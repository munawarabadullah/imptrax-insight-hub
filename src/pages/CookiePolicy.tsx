import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Cookie Policy | ImpTrax - How We Use Cookies";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'ImpTrax Cookie Policy - Learn how we use cookies to improve your browsing experience and provide better services.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'ImpTrax Cookie Policy - Learn how we use cookies to improve your browsing experience and provide better services.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Cookie Policy
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. What Are Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ImpTrax uses cookies to enhance your browsing experience and improve our services. We use cookies for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>To remember your preferences and settings</li>
                  <li>To analyze website traffic and usage patterns</li>
                  <li>To improve website functionality and performance</li>
                  <li>To provide personalized content and recommendations</li>
                  <li>To ensure website security and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">3.1 Essential Cookies</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">3.2 Performance Cookies</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These cookies collect information about how visitors use our website, such as which pages are visited most often and if they get error messages from web pages. These cookies don't collect information that identifies a visitor.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">3.3 Functionality Cookies</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These cookies allow the website to remember choices you make (such as your user name, language, or the region you are in) and provide enhanced, more personal features.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">3.4 Analytics Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use analytics cookies to understand how our website is being used and to improve user experience. These cookies help us analyze visitor behavior and website performance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Third-Party Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may also use third-party cookies from trusted partners to help us:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Analyze website traffic and user behavior</li>
                  <li>Provide social media features</li>
                  <li>Deliver relevant advertisements</li>
                  <li>Improve our services and user experience</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  These third parties may use cookies in accordance with their own privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookie Duration</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use both session cookies and persistent cookies:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> These remain on your device for a set period or until you delete them</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Managing Your Cookie Preferences</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Using our cookie consent banner when you first visit our website</li>
                  <li>Modifying your browser settings to accept or reject cookies</li>
                  <li>Deleting cookies that have already been set</li>
                  <li>Using browser plugins that manage cookies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Browser Settings</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>View what cookies are stored on your device</li>
                  <li>Delete cookies individually or all at once</li>
                  <li>Block cookies from specific websites</li>
                  <li>Block all cookies from being set</li>
                  <li>Delete all cookies when you close your browser</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Please note that if you choose to block or delete cookies, some features of our website may not work properly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Impact of Disabling Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  While you can browse our website with cookies disabled, please be aware that disabling cookies may affect your user experience and limit access to certain features and functionalities of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Updates to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Data Protection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The information collected through cookies is processed in accordance with our Privacy Policy and applicable data protection laws. We implement appropriate security measures to protect your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us through our website contact form or by visiting our Contact page.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;