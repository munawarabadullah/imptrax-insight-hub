import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AIDevelopmentServices from "./pages/AIDevelopmentServices";
import AIConsulting from "./pages/AIConsulting";
import PredictiveAnalytics from "./pages/PredictiveAnalytics";
import WhyToPredictiveAnalytics from "./pages/WhyToPredictiveAnalytics";
import RealEstateSoftware from "./pages/RealEstateSoftware";
import NaturalLanguageProcessing from "./pages/NaturalLanguageProcessing";
import HIPAACompliant from "./pages/HIPAACompliant";
import MachineLearningDevelopment from "./pages/MachineLearningDevelopment";
import ProcessAutomation from "./pages/ProcessAutomation";
import WhatIsProcessAutomation from "./pages/WhatIsProcessAutomation";
import RoboticProcessAutomation from "./pages/RoboticProcessAutomation";
import WorkflowOptimization from "./pages/WorkflowOptimization";
import FinancialWorkflowProcess from "./pages/FinancialWorkflowProcess";
import BusinessIntelligence from "./pages/BusinessIntelligence";
import DataAnalytics from "./pages/DataAnalytics";
import DataMigration from "./pages/DataMigration";
import DataWarehouseServices from "./pages/DataWarehouseServices";
import RealTimeAnalytics from "./pages/RealTimeAnalytics";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import AIConsultingServices from "./pages/AIConsultingServices";
import CaseStudies from "./pages/CaseStudies";
import IndustryTrends from "./pages/IndustryTrends";
import KnowledgeBase from "./pages/KnowledgeBase";
import ScheduleConsultation from "./pages/ScheduleConsultation";
import BankingSolutions from "./pages/BankingSolutions";
import InvestmentManagement from "./pages/InvestmentManagement";
import RiskAssessment from "./pages/RiskAssessment";
import ComplianceManagement from "./pages/ComplianceManagement";
import RevenueCycleManagement from "./pages/RevenueCycleManagement";
import HealthcareAutomation from "./pages/HealthcareAutomation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ai-development-services" element={<AIDevelopmentServices />} />
          <Route path="/ai-consulting" element={<AIConsulting />} />
          <Route path="/predictive-analytics" element={<PredictiveAnalytics />} />
          <Route path="/why-to-use-predictive-analytics" element={<WhyToPredictiveAnalytics />} />
          <Route path="/real-estate-software" element={<RealEstateSoftware />} />
          <Route path="/natural-language-processing" element={<NaturalLanguageProcessing />} />
          <Route path="/hipaa-compliant" element={<HIPAACompliant />} />
          <Route path="/machine-learning-development" element={<MachineLearningDevelopment />} />
          <Route path="/process-automation" element={<ProcessAutomation />} />
          <Route path="/what-is-process-automation" element={<WhatIsProcessAutomation />} />
          <Route path="/robotic-process-automation" element={<RoboticProcessAutomation />} />
          <Route path="/workflow-optimization" element={<WorkflowOptimization />} />
          <Route path="/financial-workflow-process" element={<FinancialWorkflowProcess />} />
          <Route path="/business-intelligence" element={<BusinessIntelligence />} />
          <Route path="/data-analytics" element={<DataAnalytics />} />
          <Route path="/data-migration" element={<DataMigration />} />
          <Route path="/data-warehouse-services" element={<DataWarehouseServices />} />
          <Route path="/real-time-analytics" element={<RealTimeAnalytics />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/ai-consulting-services" element={<AIConsultingServices />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/industry-trends" element={<IndustryTrends />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/schedule-consultation" element={<ScheduleConsultation />} />
          <Route path="/banking-solutions" element={<BankingSolutions />} />
          <Route path="/investment-management" element={<InvestmentManagement />} />
          <Route path="/risk-assessment" element={<RiskAssessment />} />
          <Route path="/compliance-management" element={<ComplianceManagement />} />
          <Route path="/revenue-cycle-management" element={<RevenueCycleManagement />} />
          <Route path="/healthcare-automation" element={<HealthcareAutomation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
