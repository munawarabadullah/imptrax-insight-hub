/**
 * SEO Summary Component
 * Displays current SEO status and recommendations
 */

import React, { useState, useEffect } from 'react';
import { performSEOAudit, generateSEOReport, SEOAuditResult } from '../utils/seoAudit';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { AlertCircle, CheckCircle, Info, RefreshCw, Download } from 'lucide-react';

interface SEOSummaryProps {
  showDetails?: boolean;
  autoRefresh?: boolean;
}

export const SEOSummary: React.FC<SEOSummaryProps> = ({ 
  showDetails = true, 
  autoRefresh = false 
}) => {
  const [auditResult, setAuditResult] = useState<SEOAuditResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const runAudit = async () => {
    setLoading(true);
    try {
      const result = await performSEOAudit();
      setAuditResult(result);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('SEO audit failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const downloadReport = async () => {
    if (!auditResult) return;
    
    const report = await generateSEOReport();
    const blob = new Blob([report], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seo-audit-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    runAudit();
    
    if (autoRefresh) {
      const interval = setInterval(runAudit, 300000); // 5 minutes
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBadgeVariant = (score: number) => {
    if (score >= 90) return 'default';
    if (score >= 70) return 'secondary';
    return 'destructive';
  };

  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      default:
        return <Info className="h-4 w-4 text-blue-500" />;
    }
  };

  if (!auditResult && !loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>SEO Summary</CardTitle>
          <CardDescription>Click to run SEO audit</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={runAudit} className="w-full">
            Run SEO Audit
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Main Score Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle>SEO Score</CardTitle>
            <CardDescription>
              {lastUpdated && `Last updated: ${lastUpdated.toLocaleTimeString()}`}
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={runAudit}
              disabled={loading}
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            </Button>
            {auditResult && (
              <Button
                variant="outline"
                size="sm"
                onClick={downloadReport}
              >
                <Download className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <RefreshCw className="h-8 w-8 animate-spin" />
              <span className="ml-2">Running SEO audit...</span>
            </div>
          ) : auditResult ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold ${getScoreColor(auditResult.score)}">
                  {auditResult.score}/100
                </div>
                <Badge variant={getScoreBadgeVariant(auditResult.score)}>
                  {auditResult.score >= 90 ? 'Excellent' : 
                   auditResult.score >= 70 ? 'Good' : 'Needs Improvement'}
                </Badge>
              </div>
              <Progress value={auditResult.score} className="w-full" />
            </div>
          ) : null}
        </CardContent>
      </Card>

      {/* Issues Summary */}
      {auditResult && auditResult.issues.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Issues Found ({auditResult.issues.length})</CardTitle>
            <CardDescription>SEO issues that need attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {auditResult.issues.slice(0, showDetails ? undefined : 5).map((issue, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg border">
                  {getIssueIcon(issue.type)}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{issue.message}</span>
                      <Badge variant="outline" className="text-xs">
                        {issue.impact}
                      </Badge>
                    </div>
                    {issue.element && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Element: {issue.element}
                      </p>
                    )}
                  </div>
                </div>
              ))}
              {!showDetails && auditResult.issues.length > 5 && (
                <p className="text-sm text-muted-foreground text-center">
                  +{auditResult.issues.length - 5} more issues
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recommendations */}
      {auditResult && auditResult.recommendations.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Recommendations</CardTitle>
            <CardDescription>Suggestions to improve SEO performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {auditResult.recommendations.slice(0, showDetails ? undefined : 3).map((rec, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{rec}</span>
                </div>
              ))}
              {!showDetails && auditResult.recommendations.length > 3 && (
                <p className="text-sm text-muted-foreground text-center">
                  +{auditResult.recommendations.length - 3} more recommendations
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Technical Details */}
      {showDetails && auditResult && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Technical SEO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Internal Links:</span>
                <span className="font-medium">{auditResult.technicalSEO.internalLinks}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>External Links:</span>
                <span className="font-medium">{auditResult.technicalSEO.externalLinks}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Images:</span>
                <span className="font-medium">{auditResult.technicalSEO.images.totalImages}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Structured Data:</span>
                <span className="font-medium">
                  {auditResult.technicalSEO.structuredData.hasStructuredData ? '✓' : '✗'}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Content SEO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Word Count:</span>
                <span className="font-medium">{auditResult.contentSEO.wordCount}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Readability:</span>
                <span className="font-medium">{auditResult.contentSEO.readabilityScore.toFixed(1)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Content Quality:</span>
                <span className="font-medium">{auditResult.contentSEO.contentQuality.toFixed(1)}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Page Size:</span>
                <span className="font-medium">
                  {Math.round(auditResult.performanceSEO.pageSize / 1024)}KB
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Resources:</span>
                <span className="font-medium">{auditResult.performanceSEO.resourceCount}</span>
              </div>
              {auditResult.performanceSEO.coreWebVitals.ttfb && (
                <div className="flex justify-between text-sm">
                  <span>TTFB:</span>
                  <span className="font-medium">
                    {Math.round(auditResult.performanceSEO.coreWebVitals.ttfb)}ms
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SEOSummary;