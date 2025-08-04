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
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import KnowledgeBase from "./pages/KnowledgeBase";
import ScheduleConsultation from "./pages/ScheduleConsultation";
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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/schedule-consultation" element={<ScheduleConsultation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
