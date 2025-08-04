import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

const KnowledgeBase = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Knowledge Base | ImpTrax - Site Map & Page Directory";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'ImpTrax Knowledge Base - Complete site map and directory of all pages including services, policies, and resources.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'ImpTrax Knowledge Base - Complete site map and directory of all pages including services, policies, and resources.';
      document.head.appendChild(meta);
    }
  }, []);

  const pageCategories = [
    {
      category: "Main Pages",
      pages: [
        {
          title: "Home",
          description: "Main landing page with company overview and services",
          url: "/"
        }
      ]
    },
    {
      category: "Services",
      pages: [
        {
          title: "AI Development Services",
          description: "Comprehensive AI solutions including machine learning, computer vision, and NLP",
          url: "/ai-development-services"
        },
        {
          title: "AI Consulting Services",
          description: "Expert AI consulting and strategic guidance for artificial intelligence implementation",
          url: "/ai-consulting"
        }
      ]
    },
    {
      category: "Legal & Policies",
      pages: [
        {
          title: "Privacy Policy",
          description: "How we collect, use, and protect your personal information",
          url: "/privacy-policy"
        },
        {
          title: "Terms of Service",
          description: "Legal terms and conditions governing the use of our services",
          url: "/terms-of-service"
        },
        {
          title: "Cookie Policy",
          description: "Information about how we use cookies on our website",
          url: "/cookie-policy"
        }
      ]
    },
    {
      category: "Resources",
      pages: [
        {
          title: "Knowledge Base",
          description: "Complete site map and page directory",
          url: "/knowledge-base"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Knowledge Base
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complete directory of all pages and resources available on the ImpTrax website. 
                Navigate through our comprehensive collection of services, policies, and information.
              </p>
            </div>

            <div className="grid gap-12">
              {pageCategories.map((category, categoryIndex) => (
                <section key={categoryIndex} className="space-y-6">
                  <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                    {category.category}
                  </h2>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.pages.map((page, pageIndex) => (
                      <div key={pageIndex} className="group">
                        <div className="bg-card border border-border rounded-lg p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {page.title}
                            </h3>
                            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {page.description}
                          </p>
                          <a 
                            href={page.url}
                            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                          >
                            Visit Page
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Need Help Finding Something?
                </h3>
                <p className="text-muted-foreground mb-6">
                  If you can't find what you're looking for, please don't hesitate to contact us. 
                  Our team is here to help you navigate our services and find the right solutions for your needs.
                </p>
                <a 
                  href="/"
                  className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KnowledgeBase;