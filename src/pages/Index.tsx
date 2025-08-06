import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, CheckSquare, Users, Settings, Package, Palette, Code, Database, Cloud, Smartphone, Globe, Cpu } from "lucide-react";

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
        
        {/* What Makes Us the Top Choice Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What Makes Us the Top Choice</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Precision-Built for Product Success</CardTitle>
                </CardHeader>
              </Card>
              
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckSquare className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Dedicated CoEs for Scalable Delivery</CardTitle>
                </CardHeader>
              </Card>
              
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Cross-Functional, Outcome-Focused Teams</CardTitle>
                </CardHeader>
              </Card>
              
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Robust Architecture, Built to Scale</CardTitle>
                </CardHeader>
              </Card>
              
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Package className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Impeccable Quality, On-Time Delivery</CardTitle>
                </CardHeader>
              </Card>
              
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Palette className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Human-Centric Design & UX Excellence</CardTitle>
                </CardHeader>
              </Card>
            </div>
           </div>
         </section>
         
         {/* Technologies and Platforms We Use Section */}
         <section className="py-20 bg-white">
           <div className="container mx-auto px-4">
             <div className="text-center mb-16">
               <h2 className="text-4xl font-bold text-gray-900 mb-6">Technologies and Platforms We Use</h2>
               <p className="text-xl text-gray-600 max-w-3xl mx-auto">We leverage cutting-edge technologies and industry-leading platforms to deliver robust, scalable solutions that drive business transformation.</p>
             </div>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:border-purple-200">
                 <CardHeader className="pb-4">
                   <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                     <Code className="w-8 h-8 text-purple-600" />
                   </div>
                   <CardTitle className="text-xl font-bold text-gray-900 mb-3">Development Frameworks</CardTitle>
                   <CardContent className="p-0">
                     <p className="text-gray-600 text-sm leading-relaxed">React, Angular, Vue.js, Node.js, .NET Core, Spring Boot, Django, Laravel</p>
                   </CardContent>
                 </CardHeader>
               </Card>
               
               <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:border-purple-200">
                 <CardHeader className="pb-4">
                   <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                     <Database className="w-8 h-8 text-purple-600" />
                   </div>
                   <CardTitle className="text-xl font-bold text-gray-900 mb-3">Database Technologies</CardTitle>
                   <CardContent className="p-0">
                     <p className="text-gray-600 text-sm leading-relaxed">PostgreSQL, MongoDB, MySQL, Redis, Elasticsearch, Apache Cassandra, Oracle</p>
                   </CardContent>
                 </CardHeader>
               </Card>
               
               <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:border-purple-200">
                 <CardHeader className="pb-4">
                   <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                     <Cloud className="w-8 h-8 text-purple-600" />
                   </div>
                   <CardTitle className="text-xl font-bold text-gray-900 mb-3">Cloud Platforms</CardTitle>
                   <CardContent className="p-0">
                     <p className="text-gray-600 text-sm leading-relaxed">AWS, Microsoft Azure, Google Cloud Platform, Docker, Kubernetes, Terraform</p>
                   </CardContent>
                 </CardHeader>
               </Card>
               
               <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:border-purple-200">
                 <CardHeader className="pb-4">
                   <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                     <Smartphone className="w-8 h-8 text-purple-600" />
                   </div>
                   <CardTitle className="text-xl font-bold text-gray-900 mb-3">Mobile Development</CardTitle>
                   <CardContent className="p-0">
                     <p className="text-gray-600 text-sm leading-relaxed">React Native, Flutter, Swift, Kotlin, Xamarin, Ionic, Progressive Web Apps</p>
                   </CardContent>
                 </CardHeader>
               </Card>
               
               <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:border-purple-200">
                 <CardHeader className="pb-4">
                   <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                     <Globe className="w-8 h-8 text-purple-600" />
                   </div>
                   <CardTitle className="text-xl font-bold text-gray-900 mb-3">Integration & APIs</CardTitle>
                   <CardContent className="p-0">
                     <p className="text-gray-600 text-sm leading-relaxed">REST APIs, GraphQL, Microservices, Apache Kafka, RabbitMQ, API Gateway</p>
                   </CardContent>
                 </CardHeader>
               </Card>
               
               <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:border-purple-200">
                 <CardHeader className="pb-4">
                   <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                     <Cpu className="w-8 h-8 text-purple-600" />
                   </div>
                   <CardTitle className="text-xl font-bold text-gray-900 mb-3">AI & Machine Learning</CardTitle>
                   <CardContent className="p-0">
                     <p className="text-gray-600 text-sm leading-relaxed">TensorFlow, PyTorch, Scikit-learn, OpenAI, Hugging Face, Apache Spark, MLflow</p>
                   </CardContent>
                 </CardHeader>
               </Card>
             </div>
           </div>
         </section>
       </main>
       <Footer />
    </div>
  );
};

export default Index;
