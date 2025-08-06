import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Check, Brain, TrendingUp, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";

const AIPromptLibrary = () => {
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

  const copyToClipboard = (text: string, promptId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(promptId);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  const businessDevelopmentPrompts = [
    {
      id: "bd-strategy",
      title: "Business Development Strategy Generator",
      category: "Strategy",
      description: "Generate comprehensive business development strategies tailored to your industry and goals.",
      prompt: `Act as a senior business development strategist with 15+ years of experience. I need you to create a comprehensive business development strategy for [COMPANY TYPE/INDUSTRY]. 

Company Details:
- Industry: [YOUR INDUSTRY]
- Company Size: [STARTUP/SME/ENTERPRISE]
- Current Revenue: [REVENUE RANGE]
- Target Market: [TARGET AUDIENCE]
- Geographic Focus: [LOCATION/REGION]

Please provide:
1. Market Analysis & Opportunities
2. Competitive Positioning Strategy
3. Revenue Growth Tactics (3-6 month plan)
4. Partnership & Alliance Opportunities
5. Key Performance Indicators (KPIs)
6. Risk Assessment & Mitigation
7. Implementation Timeline

Format the response with clear sections, actionable steps, and specific metrics where possible.`,
      icon: <Brain className="w-6 h-6" />,
      tags: ["Strategy", "Planning", "Growth"]
    },
    {
      id: "lead-generation",
      title: "Lead Generation Campaign Planner",
      category: "Sales",
      description: "Create targeted lead generation campaigns with multi-channel approaches and conversion optimization.",
      prompt: `You are an expert lead generation specialist. Help me design a comprehensive lead generation campaign for [PRODUCT/SERVICE].

Business Context:
- Product/Service: [DESCRIBE YOUR OFFERING]
- Target Audience: [IDEAL CUSTOMER PROFILE]
- Budget Range: [MONTHLY BUDGET]
- Current Channels: [EXISTING MARKETING CHANNELS]
- Sales Cycle Length: [TYPICAL SALES CYCLE]

Create a detailed plan including:
1. Lead Magnet Ideas (3-5 options)
2. Multi-Channel Campaign Strategy
   - Content Marketing
   - Social Media
   - Email Marketing
   - Paid Advertising
   - Networking/Events
3. Lead Scoring Framework
4. Nurturing Sequence (email/content flow)
5. Conversion Optimization Tactics
6. Measurement & Analytics Setup
7. Expected ROI Projections

Provide specific tactics, tools, and timelines for implementation.`,
      icon: <TrendingUp className="w-6 h-6" />,
      tags: ["Lead Generation", "Marketing", "Sales"]
    },
    {
      id: "partnership-outreach",
      title: "Strategic Partnership Outreach Template",
      category: "Partnerships",
      description: "Craft compelling partnership proposals and outreach strategies for business growth.",
      prompt: `Act as a business development expert specializing in strategic partnerships. Help me create a partnership outreach strategy for [YOUR COMPANY].

Company Information:
- Company: [YOUR COMPANY NAME]
- Industry: [YOUR INDUSTRY]
- Core Value Proposition: [WHAT YOU OFFER]
- Target Partner Type: [TYPE OF PARTNERS YOU SEEK]
- Partnership Goals: [WHAT YOU WANT TO ACHIEVE]

Create:
1. Partnership Value Proposition
   - What you bring to partners
   - Mutual benefits framework
   - Unique differentiators

2. Partner Identification Strategy
   - Ideal partner profile
   - Research methodology
   - Qualification criteria

3. Outreach Email Templates (3 variations)
   - Initial contact
   - Follow-up sequence
   - Meeting request

4. Partnership Proposal Structure
   - Executive summary
   - Collaboration models
   - Success metrics
   - Next steps

5. Negotiation Framework
   - Key terms to discuss
   - Win-win scenarios
   - Deal structure options

Make all content professional, compelling, and results-focused.`,
      icon: <Users className="w-6 h-6" />,
      tags: ["Partnerships", "Outreach", "Collaboration"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI Pulse
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6">
              AI Prompt{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Library
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Unlock the power of AI with our curated collection of professional prompts designed to accelerate your business development efforts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Business Development Focus
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                Ready-to-Use Templates
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                Expert-Crafted
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Prompts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Business Development{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Prompts
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transform your business development process with these carefully crafted AI prompts designed by industry experts.
            </p>
          </div>

          <div className="grid gap-8 max-w-6xl mx-auto">
            {businessDevelopmentPrompts.map((prompt) => (
              <Card key={prompt.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                        {prompt.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors duration-300">
                          {prompt.title}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-2">
                          {prompt.category}
                        </Badge>
                      </div>
                    </div>
                    <Button
                      onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                      variant="outline"
                      size="sm"
                      className="shrink-0 group-hover:bg-blue-50 group-hover:border-blue-300 transition-all duration-300"
                    >
                      {copiedPrompt === prompt.id ? (
                        <>
                          <Check className="w-4 h-4 mr-2 text-green-600" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy Prompt
                        </>
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg mb-6 leading-relaxed">
                    {prompt.description}
                  </CardDescription>
                  
                  <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 group-hover:bg-blue-50/50 transition-colors duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-slate-900">Prompt Template</h4>
                      <div className="flex gap-2">
                        {prompt.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <pre className="whitespace-pre-wrap text-sm text-slate-700 leading-relaxed font-mono bg-white p-4 rounded border border-slate-200 max-h-64 overflow-y-auto">
                      {prompt.prompt}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Usage Tips */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              How to Use These Prompts
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Customize</h4>
                <p className="text-slate-600 text-sm">
                  Replace the bracketed placeholders with your specific business information and requirements.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-lg">2</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Execute</h4>
                <p className="text-slate-600 text-sm">
                  Use the customized prompt with your preferred AI tool (ChatGPT, Claude, etc.) for best results.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-lg">3</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Refine</h4>
                <p className="text-slate-600 text-sm">
                  Iterate and refine the outputs based on your specific needs and feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterCTA />
      <Footer />
    </div>
  );
};

export default AIPromptLibrary;