import { ContactForm } from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const ScheduleConsultation = () => {
  useEffect(() => {
    // Set CTA source in sessionStorage for tracking
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get('source') || 'schedule-consultation';
    sessionStorage.setItem('ctaSource', source);

    // SEO Meta Tags
    document.title = "Schedule Consultation - ImpTrax AI & Automation Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Schedule a free consultation with ImpTrax experts. Discuss your AI, automation, and data analytics needs. Get personalized solutions for your business.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Schedule a free consultation with ImpTrax experts. Discuss your AI, automation, and data analytics needs. Get personalized solutions for your business.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default ScheduleConsultation;