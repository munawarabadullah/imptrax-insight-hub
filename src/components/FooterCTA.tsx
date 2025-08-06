import { Button } from "@/components/ui/button";

const FooterCTA = () => {
  return (
    <section style={{backgroundColor: '#146ef5'}} className="text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="py-16">
          <div className="text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Let's discuss how our AI and automation solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/schedule-consultation?source=footer&button=get-free-consultation">
                <Button variant="accent" size="xl">
                  Get Free Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;