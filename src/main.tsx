import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializePerformanceMonitoring } from './utils/performance'
import { initializeAIOptimization } from './utils/aiOptimization'
import { initializeSEOMonitoring } from './utils/seoAudit'

// Initialize performance monitoring for Core Web Vitals
initializePerformanceMonitoring();

// Initialize AI optimization for better LLM understanding
initializeAIOptimization();

// Initialize SEO monitoring and auditing
initializeSEOMonitoring();

createRoot(document.getElementById("root")!).render(<App />);
