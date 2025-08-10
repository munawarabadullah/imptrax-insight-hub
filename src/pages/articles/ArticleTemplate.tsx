import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Sample article content - in a real app, this would come from a CMS or API
const articleContent = {
  'mid-market-firms-ai-competitive-advantage': {
    title: "Mid-Market Firms Can Punch Above Their Weight with AI - Our COO Explains How",
    category: "Software Development",
    author: "John Smith, COO",
    publishDate: "2024-01-15",
    readTime: "5 min read",
    image: "/articles/mid-market-firms-ai-competitive-advantage.svg",
    content: `
      <p>In today's rapidly evolving business landscape, artificial intelligence is no longer a luxury reserved for tech giants and Fortune 500 companies. Mid-market firms are discovering that AI can be their secret weapon to compete with larger enterprises and drive significant business growth.</p>
      
      <h2>The AI Advantage for Mid-Market Companies</h2>
      <p>Mid-market companies often have advantages that larger corporations lack: agility, faster decision-making processes, and the ability to implement changes quickly. When combined with AI technologies, these advantages become even more pronounced.</p>
      
      <h3>Key Areas Where AI Makes a Difference</h3>
      <ul>
        <li><strong>Customer Service Automation:</strong> AI-powered chatbots and virtual assistants can provide 24/7 customer support, reducing response times and improving customer satisfaction.</li>
        <li><strong>Predictive Analytics:</strong> Machine learning algorithms can analyze customer behavior patterns to predict future trends and optimize inventory management.</li>
        <li><strong>Process Automation:</strong> Robotic Process Automation (RPA) can streamline repetitive tasks, freeing up employees to focus on strategic initiatives.</li>
        <li><strong>Personalized Marketing:</strong> AI can analyze customer data to create highly targeted marketing campaigns that rival those of larger competitors.</li>
      </ul>
      
      <h2>Implementation Strategy</h2>
      <p>The key to successful AI implementation for mid-market firms is to start small and scale gradually. Begin with pilot projects that address specific pain points and demonstrate clear ROI before expanding to other areas of the business.</p>
      
      <blockquote>
        "The companies that will thrive in the next decade are those that embrace AI not as a replacement for human intelligence, but as an amplifier of it." - John Smith, COO
      </blockquote>
      
      <h2>Overcoming Common Challenges</h2>
      <p>While the benefits of AI are clear, mid-market companies often face unique challenges in implementation:</p>
      
      <h3>Budget Constraints</h3>
      <p>Start with cloud-based AI solutions that require minimal upfront investment. Many platforms offer pay-as-you-scale pricing models that align costs with business growth.</p>
      
      <h3>Talent Acquisition</h3>
      <p>Consider partnering with AI consulting firms or investing in training existing employees rather than trying to hire expensive AI specialists.</p>
      
      <h3>Data Quality</h3>
      <p>Ensure your data infrastructure is robust before implementing AI solutions. Clean, well-organized data is essential for AI success.</p>
      
      <h2>The Future is Now</h2>
      <p>Mid-market firms that embrace AI today will be the industry leaders of tomorrow. The technology is more accessible than ever, and the competitive advantages it provides are too significant to ignore.</p>
      
      <p>At ImpTrax, we've helped numerous mid-market companies successfully implement AI solutions that drive real business results. The key is having the right strategy, the right technology, and the right partner to guide you through the process.</p>
    `
  },
  'data-analytics-business-intelligence-insights': {
    title: "Data Analytics and Business Intelligence: Turning Data into Insights",
    category: "Data Analytics",
    author: "Emily Rodriguez",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    image: "/articles/data-analytics-business-intelligence-insights.svg",
    content: `
      <p>In today's data-driven business environment, organizations are sitting on goldmines of information. The challenge isn't collecting data—it's transforming that raw data into actionable insights that drive strategic decision-making and competitive advantage.</p>
      
      <h2>The Data Analytics Revolution</h2>
      <p>Modern businesses generate vast amounts of data from multiple sources: customer interactions, sales transactions, website analytics, social media engagement, and operational processes. Business intelligence tools and advanced analytics platforms are making it possible to harness this data effectively.</p>
      
      <h3>Key Components of Modern Data Analytics</h3>
      <ul>
        <li><strong>Data Collection & Integration:</strong> Gathering data from multiple sources and creating unified datasets</li>
        <li><strong>Data Processing & Cleaning:</strong> Ensuring data quality and consistency for accurate analysis</li>
        <li><strong>Advanced Analytics:</strong> Using statistical models, machine learning, and AI to uncover patterns</li>
        <li><strong>Visualization & Reporting:</strong> Creating intuitive dashboards and reports for stakeholders</li>
      </ul>
      
      <h2>Business Intelligence in Action</h2>
      <p>Leading companies are using business intelligence to optimize operations, improve customer experiences, and identify new market opportunities. From retail giants using predictive analytics to forecast demand to healthcare organizations leveraging data to improve patient outcomes, the applications are limitless.</p>
      
      <h3>Implementing a Data-Driven Culture</h3>
      <p>Success with data analytics requires more than just technology—it requires a cultural shift toward data-driven decision making. Organizations must invest in training, establish clear data governance policies, and ensure that insights are accessible to decision-makers at all levels.</p>
      
      <blockquote>
        "The goal is to turn data into information, and information into insight."
      </blockquote>
      
      <p>As we move forward, the organizations that can effectively leverage their data assets will be the ones that thrive in an increasingly competitive marketplace. The time to invest in data analytics and business intelligence is now.</p>
    `
  },
  'digital-transformation-mid-market-companies': {
    title: "Digital Transformation Strategies for Mid-Market Companies",
    category: "Digital Transformation",
    author: "Michael Chen",
    publishDate: "2024-01-18",
    readTime: "6 min read",
    image: "/articles/digital-transformation-mid-market-companies.svg",
    content: `
      <p>Digital transformation is no longer a luxury for mid-market companies—it's a necessity for survival and growth. As technology continues to reshape industries, organizations that fail to adapt risk being left behind by more agile competitors.</p>
      
      <h2>Understanding Digital Transformation</h2>
      <p>Digital transformation goes beyond simply adopting new technologies. It's a fundamental shift in how organizations operate, deliver value to customers, and compete in the marketplace. For mid-market companies, this transformation presents both unique opportunities and challenges.</p>
      
      <h3>Key Areas of Focus</h3>
      <ul>
        <li><strong>Customer Experience:</strong> Leveraging digital channels to enhance customer interactions</li>
        <li><strong>Operational Efficiency:</strong> Automating processes and improving productivity through technology</li>
        <li><strong>Data-Driven Decision Making:</strong> Using analytics to inform strategic choices</li>
        <li><strong>Digital Business Models:</strong> Creating new revenue streams through digital innovation</li>
        <li><strong>Workforce Transformation:</strong> Upskilling employees and embracing remote work capabilities</li>
      </ul>
      
      <h2>Strategic Framework for Success</h2>
      <p>Successful digital transformation requires a structured approach. Mid-market companies should start by assessing their current digital maturity, identifying priority areas for improvement, and developing a roadmap that aligns with business objectives.</p>
      
      <h3>Implementation Best Practices</h3>
      <p>The most successful transformations are those that take a phased approach, starting with quick wins that demonstrate value while building toward more comprehensive changes. Leadership commitment, employee engagement, and change management are critical success factors.</p>
      
      <blockquote>
        "Digital transformation is not about technology—it's about reimagining your business for the digital age."
      </blockquote>
      
      <h2>Overcoming Common Challenges</h2>
      <p>Mid-market companies often face resource constraints, legacy system limitations, and resistance to change. However, these challenges can be overcome with the right strategy, partnerships, and commitment to continuous improvement.</p>
      
      <p>The companies that embrace digital transformation today will be the market leaders of tomorrow. The question isn't whether to transform—it's how quickly and effectively you can make it happen.</p>
    `
  },
  'future-cloud-computing-trends-predictions-2024': {
    title: "The Future of Cloud Computing: Trends and Predictions for 2024",
    category: "Software Development",
    author: "David Rodriguez, Cloud Architect",
    publishDate: "2024-01-18",
    readTime: "8 min read",
    image: "/articles/future-cloud-computing-trends-predictions-2024.svg",
    content: `
      <p>As we advance through 2024, cloud computing continues to evolve at an unprecedented pace. From edge computing to serverless architectures, the landscape is shifting in ways that will fundamentally change how businesses operate and scale.</p>
      
      <h2>The Rise of Multi-Cloud and Hybrid Strategies</h2>
      <p>Organizations are increasingly adopting multi-cloud strategies to avoid vendor lock-in and optimize performance. This trend is driven by the need for flexibility, cost optimization, and risk mitigation.</p>
      
      <h3>Key Benefits of Multi-Cloud Adoption</h3>
      <ul>
        <li><strong>Vendor Independence:</strong> Reduced dependency on a single cloud provider</li>
        <li><strong>Cost Optimization:</strong> Ability to choose the most cost-effective services for specific workloads</li>
        <li><strong>Performance Enhancement:</strong> Leveraging the best features from different providers</li>
        <li><strong>Risk Mitigation:</strong> Improved disaster recovery and business continuity</li>
      </ul>
      
      <h2>Edge Computing: Bringing Processing Closer to Data</h2>
      <p>Edge computing is becoming critical for applications requiring low latency and real-time processing. This trend is particularly important for IoT devices, autonomous vehicles, and augmented reality applications.</p>
      
      <blockquote>
        "Edge computing isn't just about reducing latency – it's about creating new possibilities for real-time intelligence and decision-making." - David Rodriguez, Cloud Architect
      </blockquote>
      
      <h3>Edge Computing Use Cases</h3>
      <ul>
        <li><strong>IoT and Smart Cities:</strong> Real-time data processing for traffic management and environmental monitoring</li>
        <li><strong>Manufacturing:</strong> Predictive maintenance and quality control in real-time</li>
        <li><strong>Healthcare:</strong> Remote patient monitoring and emergency response systems</li>
        <li><strong>Retail:</strong> Personalized shopping experiences and inventory management</li>
      </ul>
      
      <h2>Serverless Computing Evolution</h2>
      <p>Serverless architectures are maturing, with improved cold start times, better debugging tools, and enhanced security features. This evolution is making serverless a viable option for more complex applications.</p>
      
      <h3>Serverless Advantages in 2024</h3>
      <ul>
        <li><strong>Automatic Scaling:</strong> Seamless handling of traffic spikes without manual intervention</li>
        <li><strong>Cost Efficiency:</strong> Pay-per-execution model reduces costs for variable workloads</li>
        <li><strong>Reduced Operational Overhead:</strong> Less infrastructure management and maintenance</li>
        <li><strong>Faster Time to Market:</strong> Rapid development and deployment cycles</li>
      </ul>
      
      <h2>AI and Machine Learning Integration</h2>
      <p>Cloud providers are increasingly integrating AI and ML capabilities directly into their platforms, making advanced analytics and intelligent automation more accessible to businesses of all sizes.</p>
      
      <h2>Security and Compliance Evolution</h2>
      <p>As cloud adoption grows, security remains a top priority. Zero-trust architectures, enhanced encryption, and automated compliance monitoring are becoming standard features.</p>
      
      <h3>Emerging Security Trends</h3>
      <ul>
        <li><strong>Zero Trust Architecture:</strong> Never trust, always verify approach to security</li>
        <li><strong>Confidential Computing:</strong> Protecting data in use through hardware-based security</li>
        <li><strong>Automated Threat Detection:</strong> AI-powered security monitoring and response</li>
        <li><strong>Privacy-Preserving Technologies:</strong> Techniques like differential privacy and homomorphic encryption</li>
      </ul>
      
      <h2>Sustainability and Green Cloud Computing</h2>
      <p>Environmental consciousness is driving the adoption of green cloud computing practices. Cloud providers are investing heavily in renewable energy and carbon-neutral operations.</p>
      
      <h2>Looking Ahead: What to Expect</h2>
      <p>The future of cloud computing in 2024 and beyond will be characterized by increased intelligence, better integration, and more sustainable practices. Organizations that embrace these trends will be better positioned to compete in the digital economy.</p>
      
      <p>At ImpTrax, we're helping businesses navigate this evolving landscape by implementing cutting-edge cloud solutions that drive innovation and growth while maintaining security and cost-effectiveness.</p>
    `
  },
  'life-at-imptrax-building-innovation-through-collaboration': {
    title: "Life at ImpTrax: Building Innovation Through Collaboration",
    category: "Life at ImpTrax",
    author: "Emma Thompson, HR Director",
    publishDate: "2024-01-16",
    readTime: "5 min read",
    image: "/articles/life-at-imptrax-building-innovation-through-collaboration.svg",
    content: `
      <p>At ImpTrax, we believe that great technology solutions are born from great teams. Our culture of collaboration, innovation, and continuous learning creates an environment where both our people and our clients thrive.</p>
      
      <h2>Our Collaborative Culture</h2>
      <p>Collaboration isn't just a buzzword at ImpTrax – it's the foundation of everything we do. From cross-functional project teams to our open office design, we've built an environment that encourages knowledge sharing and creative problem-solving.</p>
      
      <h3>How We Foster Collaboration</h3>
      <ul>
        <li><strong>Cross-Functional Teams:</strong> Bringing together diverse expertise for every project</li>
        <li><strong>Open Communication:</strong> Regular team meetings, stand-ups, and informal check-ins</li>
        <li><strong>Shared Workspaces:</strong> Physical and virtual spaces designed for collaboration</li>
        <li><strong>Knowledge Sharing Sessions:</strong> Weekly tech talks and learning sessions</li>
      </ul>
      
      <h2>Innovation at Every Level</h2>
      <p>Innovation isn't limited to our senior developers or architects. We encourage every team member to contribute ideas, experiment with new technologies, and challenge the status quo.</p>
      
      <blockquote>
        "The best ideas often come from unexpected places. We've created a culture where everyone feels empowered to innovate." - Emma Thompson, HR Director
      </blockquote>
      
      <h3>Our Innovation Initiatives</h3>
      <ul>
        <li><strong>Innovation Fridays:</strong> Dedicated time for exploring new technologies and ideas</li>
        <li><strong>Hackathons:</strong> Quarterly events where teams build creative solutions</li>
        <li><strong>Idea Incubator:</strong> A formal process for developing and testing new concepts</li>
        <li><strong>Client Co-Innovation:</strong> Collaborative innovation sessions with our clients</li>
      </ul>
      
      <h2>Professional Development and Growth</h2>
      <p>We invest heavily in our team's professional development because we know that growing our people grows our capabilities and ultimately benefits our clients.</p>
      
      <h3>Learning and Development Programs</h3>
      <ul>
        <li><strong>Certification Support:</strong> Financial support for industry certifications</li>
        <li><strong>Conference Attendance:</strong> Opportunities to attend leading tech conferences</li>
        <li><strong>Internal Training:</strong> Regular workshops and training sessions</li>
        <li><strong>Mentorship Programs:</strong> Pairing junior and senior team members</li>
      </ul>
      
      <h2>Work-Life Balance and Well-being</h2>
      <p>We understand that our team's well-being directly impacts their ability to deliver exceptional results. That's why we've implemented policies and programs that support work-life balance.</p>
      
      <h3>Well-being Initiatives</h3>
      <ul>
        <li><strong>Flexible Work Arrangements:</strong> Remote work options and flexible hours</li>
        <li><strong>Mental Health Support:</strong> Access to counseling and mental health resources</li>
        <li><strong>Wellness Programs:</strong> Gym memberships, yoga classes, and health screenings</li>
        <li><strong>Team Building Activities:</strong> Regular social events and team outings</li>
      </ul>
      
      <h2>Diversity and Inclusion</h2>
      <p>Our diverse team brings different perspectives, experiences, and ideas that make our solutions stronger and more innovative. We're committed to creating an inclusive environment where everyone can thrive.</p>
      
      <h3>Our D&I Commitments</h3>
      <ul>
        <li><strong>Inclusive Hiring:</strong> Diverse interview panels and bias-free recruitment processes</li>
        <li><strong>Equal Opportunities:</strong> Fair promotion and development opportunities for all</li>
        <li><strong>Cultural Awareness:</strong> Regular training on unconscious bias and cultural sensitivity</li>
        <li><strong>Employee Resource Groups:</strong> Support networks for underrepresented groups</li>
      </ul>
      
      <h2>Making an Impact</h2>
      <p>What truly drives our team is the opportunity to make a meaningful impact. Whether we're helping a startup scale their infrastructure or enabling a large enterprise to modernize their systems, we know our work matters.</p>
      
      <h2>Join Our Team</h2>
      <p>If you're passionate about technology, collaboration, and making a difference, we'd love to hear from you. At ImpTrax, you'll find more than just a job – you'll find a community of innovators working together to shape the future of technology.</p>
      
      <p>Ready to be part of something special? Check out our current openings and discover how you can contribute to our mission of building innovation through collaboration.</p>
    `
  },
  'modern-application-development-best-practices-methodologies': {
    title: "Modern Application Development: Best Practices and Methodologies",
    category: "Software Development",
    author: "Alex Kumar, Lead Developer",
    publishDate: "2024-01-14",
    readTime: "9 min read",
    image: "/articles/modern-application-development-best-practices-methodologies.svg",
    content: `
      <p>Modern application development has evolved significantly from traditional waterfall methodologies. Today's development landscape demands agility, scalability, and continuous delivery to meet rapidly changing business requirements and user expectations.</p>
      
      <h2>Agile and DevOps Integration</h2>
      <p>The integration of Agile methodologies with DevOps practices has revolutionized how we build and deploy applications. This combination enables faster delivery cycles while maintaining high quality and reliability.</p>
      
      <h3>Key Agile-DevOps Principles</h3>
      <ul>
        <li><strong>Continuous Integration:</strong> Automated testing and integration of code changes</li>
        <li><strong>Continuous Deployment:</strong> Automated deployment pipelines for faster releases</li>
        <li><strong>Infrastructure as Code:</strong> Version-controlled infrastructure management</li>
        <li><strong>Monitoring and Feedback:</strong> Real-time application performance monitoring</li>
      </ul>
      
      <h2>Microservices Architecture</h2>
      <p>Microservices have become the preferred architectural pattern for modern applications, offering improved scalability, maintainability, and team autonomy.</p>
      
      <blockquote>
        "Microservices aren't just about technology – they're about organizing teams and processes to deliver value faster." - Alex Kumar, Lead Developer
      </blockquote>
      
      <h3>Microservices Benefits</h3>
      <ul>
        <li><strong>Scalability:</strong> Independent scaling of individual services</li>
        <li><strong>Technology Diversity:</strong> Freedom to choose the best technology for each service</li>
        <li><strong>Team Autonomy:</strong> Independent development and deployment cycles</li>
        <li><strong>Fault Isolation:</strong> Failures in one service don't affect the entire system</li>
      </ul>
      
      <h2>Cloud-Native Development</h2>
      <p>Cloud-native development practices leverage cloud computing capabilities to build applications that are resilient, manageable, and observable.</p>
      
      <h3>Cloud-Native Characteristics</h3>
      <ul>
        <li><strong>Containerization:</strong> Using Docker and Kubernetes for deployment</li>
        <li><strong>Service Mesh:</strong> Managing service-to-service communication</li>
        <li><strong>Serverless Computing:</strong> Event-driven, auto-scaling functions</li>
        <li><strong>API-First Design:</strong> Building applications around well-defined APIs</li>
      </ul>
      
      <h2>Test-Driven Development (TDD)</h2>
      <p>TDD has proven to be an effective methodology for ensuring code quality and reducing bugs in production. By writing tests before code, developers create more reliable and maintainable applications.</p>
      
      <h3>TDD Benefits</h3>
      <ul>
        <li><strong>Higher Code Quality:</strong> Tests ensure code meets requirements</li>
        <li><strong>Better Design:</strong> Writing tests first leads to better architecture</li>
        <li><strong>Regression Prevention:</strong> Automated tests catch breaking changes</li>
        <li><strong>Documentation:</strong> Tests serve as living documentation</li>
      </ul>
      
      <h2>Security by Design</h2>
      <p>Modern application development must incorporate security considerations from the beginning of the development process, not as an afterthought.</p>
      
      <h3>Security Best Practices</h3>
      <ul>
        <li><strong>Secure Coding Standards:</strong> Following established security guidelines</li>
        <li><strong>Automated Security Testing:</strong> Integrating security scans into CI/CD pipelines</li>
        <li><strong>Dependency Management:</strong> Regular updates and vulnerability scanning</li>
        <li><strong>Access Control:</strong> Implementing proper authentication and authorization</li>
      </ul>
      
      <h2>Performance Optimization</h2>
      <p>Performance optimization should be considered throughout the development lifecycle, not just at the end. Modern applications must be fast, responsive, and efficient.</p>
      
      <h3>Performance Strategies</h3>
      <ul>
        <li><strong>Caching:</strong> Implementing multiple layers of caching</li>
        <li><strong>Database Optimization:</strong> Efficient queries and indexing strategies</li>
        <li><strong>CDN Usage:</strong> Content delivery networks for global performance</li>
        <li><strong>Code Splitting:</strong> Loading only necessary code for better user experience</li>
      </ul>
      
      <h2>Monitoring and Observability</h2>
      <p>Modern applications require comprehensive monitoring and observability to ensure optimal performance and quick issue resolution.</p>
      
      <h3>Observability Pillars</h3>
      <ul>
        <li><strong>Metrics:</strong> Quantitative measurements of system behavior</li>
        <li><strong>Logs:</strong> Detailed records of system events and errors</li>
        <li><strong>Traces:</strong> Request flow tracking across distributed systems</li>
        <li><strong>Alerts:</strong> Proactive notifications for system issues</li>
      </ul>
      
      <h2>Team Collaboration and Communication</h2>
      <p>Successful modern application development relies heavily on effective team collaboration and communication. Tools and practices that facilitate this are essential.</p>
      
      <h3>Collaboration Tools and Practices</h3>
      <ul>
        <li><strong>Version Control:</strong> Git workflows for collaborative development</li>
        <li><strong>Code Reviews:</strong> Peer review processes for quality assurance</li>
        <li><strong>Documentation:</strong> Comprehensive and up-to-date project documentation</li>
        <li><strong>Communication Platforms:</strong> Slack, Teams, or similar for team coordination</li>
      </ul>
      
      <h2>Future Trends</h2>
      <p>The future of application development will likely see increased adoption of AI-assisted coding, low-code/no-code platforms, and edge computing architectures.</p>
      
      <h2>Conclusion</h2>
      <p>Modern application development is about more than just writing code – it's about creating sustainable, scalable, and secure solutions that deliver value to users and businesses. By embracing these best practices and methodologies, development teams can build applications that stand the test of time.</p>
      
      <p>At ImpTrax, we apply these modern development practices to help our clients build robust, scalable applications that drive their business forward. Our experienced team stays current with the latest trends and technologies to deliver cutting-edge solutions.</p>
    `
  }
};

const ArticleTemplate = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articleContent[slug as keyof typeof articleContent] : null;

  if (!article) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
              <p className="text-xl text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
              <Link 
                to="/insight" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Back to Insights
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Article Header */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-sm text-gray-500">
                  <li>
                    <Link to="/" className="hover:text-blue-600">Home</Link>
                  </li>
                  <li>/</li>
                  <li>
                    <Link to="/insight" className="hover:text-blue-600">Insights</Link>
                  </li>
                  <li>/</li>
                  <li className="text-gray-900">Article</li>
                </ol>
              </nav>
              
              {/* Category */}
              <div className="flex items-center mb-4">
                <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                  ARTICLE
                </span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-sm font-medium text-gray-600">
                  {article.category}
                </span>
              </div>
              
              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {article.title}
              </h1>
              
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>
                    {new Date(article.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{article.readTime}</span>
                </div>
              </div>
              
              {/* Featured Image */}
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden mb-8">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center">
                        <svg class="w-24 h-24 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div 
                className="article-content max-w-none text-lg leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              
              {/* Share Buttons */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Don't Forget to share this post!</h3>
                  <div className="flex items-center space-x-4">
                    {/* Share Icon */}
                    <div className="flex items-center text-gray-500">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                    </div>
                    
                    {/* Facebook Share */}
                    <button
                      onClick={() => {
                        const url = encodeURIComponent(window.location.href);
                        const title = encodeURIComponent(article.title);
                        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
                      }}
                      className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      title="Share on Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>
                    
                    {/* Twitter Share */}
                    <button
                      onClick={() => {
                        const url = encodeURIComponent(window.location.href);
                        const title = encodeURIComponent(article.title);
                        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank', 'width=600,height=400');
                      }}
                      className="p-2 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors"
                      title="Share on X (Twitter)"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </button>
                    
                    {/* LinkedIn Share */}
                    <button
                      onClick={() => {
                        const url = encodeURIComponent(window.location.href);
                        const title = encodeURIComponent(article.title);
                        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=400');
                      }}
                      className="p-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition-colors"
                      title="Share on LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                    
                    {/* Copy Link */}
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href).then(() => {
                          // You could add a toast notification here
                          alert('Link copied to clipboard!');
                        });
                      }}
                      className="p-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition-colors"
                      title="Copy link"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Related Articles */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Get other articles excluding current one */}
                  {Object.entries(articleContent)
                    .filter(([key]) => key !== slug)
                    .slice(0, 3)
                    .map(([key, relatedArticle]) => (
                    <div key={key} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 relative">
                        <img 
                          src={relatedArticle.image} 
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center">
                                <svg class="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                              </div>
                            `;
                          }}
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                            ARTICLE
                          </span>
                          <span className="mx-2 text-gray-400">|</span>
                          <span className="text-xs font-medium text-gray-600">
                            {relatedArticle.category}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                          {relatedArticle.title}
                        </h4>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <span>{relatedArticle.author}</span>
                          <span className="mx-2">•</span>
                          <span>{relatedArticle.readTime}</span>
                        </div>
                        <Link 
                          to={`/insight/articles/${key}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                        >
                          Read More
                          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Back to Insights */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link 
                  to="/insight" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Insights
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ArticleTemplate;