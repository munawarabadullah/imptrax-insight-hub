import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "ImpTrax - AI, Automation & Data Solutions for Enterprise";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Leading provider of AI, automation, and data analytics solutions for Financial Services, Healthcare, and Real Estate industries. Transform your business with cutting-edge technology.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Leading provider of AI, automation, and data analytics solutions for Financial Services, Healthcare, and Real Estate industries. Transform your business with cutting-edge technology.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Industries />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
