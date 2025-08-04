import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PatternCaptcha } from '@/components/PatternCaptcha';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { getComprehensiveTrackingData } from '@/utils/tracking';
import { Calendar, Clock, Building2, Mail, Phone, CheckCircle } from 'lucide-react';

const consultationSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  jobTitle: z.string().min(2, 'Job title is required'),
  companyName: z.string().min(2, 'Company name is required'),
  companySize: z.string().min(1, 'Please select company size'),
  industry: z.string().min(1, 'Please select your industry'),
  website: z.string().url('Please enter a valid website URL').optional().or(z.literal('')),
  serviceInterest: z.array(z.string()).min(1, 'Please select at least one service'),
  projectDescription: z.string().min(50, 'Please provide at least 50 characters describing your project'),
  timeline: z.string().min(1, 'Please select a timeline'),
  budgetRange: z.string().min(1, 'Please select a budget range'),
  urgency: z.string().min(1, 'Please select urgency level'),
  preferredContactMethod: z.string().min(1, 'Please select preferred contact method'),
  bestTimeToCall: z.string().optional(),
  meetingType: z.string().min(1, 'Please select meeting type'),
  additionalNotes: z.string().optional()
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

const ScheduleConsultation = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStartTime] = useState(Date.now());
  const [sourceInfo, setSourceInfo] = useState<any>(null);
  const { toast } = useToast();

  const form = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      serviceInterest: [],
      preferredContactMethod: 'email',
      meetingType: 'virtual'
    }
  });

  useEffect(() => {
    // Set page title and meta description
    document.title = 'Schedule Your Consultation - ImpTrax AI Solutions';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Schedule a free consultation with ImpTrax experts. Get customized AI, automation, and data analytics solutions for your enterprise.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Schedule a free consultation with ImpTrax experts. Get customized AI, automation, and data analytics solutions for your enterprise.';
      document.head.appendChild(meta);
    }

    // Capture source information
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get('source') || 'direct';
    const button = urlParams.get('button') || '';
    setSourceInfo({
      source,
      button,
      referrer: document.referrer,
      timestamp: new Date().toISOString()
    });

    // Pre-populate service interest based on source
    if (source === 'ai-services') {
      form.setValue('serviceInterest', ['AI Development']);
    } else if (source === 'automation') {
      form.setValue('serviceInterest', ['Automation Solutions']);
    } else if (source === 'analytics') {
      form.setValue('serviceInterest', ['Predictive Analytics']);
    } else if (source === 'robotic-process-automation') {
      form.setValue('serviceInterest', ['Robotic Process Automation']);
    } else if (source === 'home' && button === 'consult-now') {
      // User came from home page "Consult Now" button
      form.setValue('serviceInterest', ['AI Development', 'Automation Solutions']);
    }
  }, [form]);

  const onSubmit = async (data: ConsultationFormData) => {
    if (!captchaVerified) {
      toast({
        title: "Security Verification Required",
        description: "Please complete the security verification before submitting.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Get comprehensive tracking data
      const trackingData = await getComprehensiveTrackingData();
      
      // Calculate form completion time
      const formCompletionTime = Date.now() - formStartTime;

      // Prepare complete submission data
      const submissionData = {
        id: `cr_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        submissionDate: new Date().toISOString(),
        formData: data,
        tracking: {
          ...trackingData,
          source: sourceInfo,
          formInteraction: {
            formStartTime: new Date(formStartTime).toISOString(),
            formCompletionTime,
            captchaVerified: true
          }
        }
      };

      // Store in localStorage for demo (in production, send to backend)
      const existingSubmissions = JSON.parse(localStorage.getItem('consultationSubmissions') || '[]');
      existingSubmissions.push(submissionData);
      localStorage.setItem('consultationSubmissions', JSON.stringify(existingSubmissions));

      console.log('Consultation Request Submitted:', submissionData);

      toast({
        title: "Consultation Scheduled Successfully!",
        description: "Thank you for your interest. Our team will contact you within 24 hours to schedule your consultation.",
      });

      // Reset form
      form.reset();
      setCaptchaVerified(false);

    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <Calendar className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Schedule Your Consultation
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Get personalized AI, automation, and data analytics solutions tailored to your business needs. 
                Our experts will help you identify opportunities and create a strategic roadmap for digital transformation.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Free 60-minute consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Custom solution roadmap</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>ROI analysis included</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Contact Information</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-card rounded-lg shadow-card">
                  <Building2 className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-sm text-muted-foreground">
                    1180 Avenue of the Americas<br />
                    8th Floor<br />
                    New York, NY 10036
                  </p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg shadow-card">
                  <Phone className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-sm text-muted-foreground">
                    +1 212.233.0300
                  </p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg shadow-card">
                  <Mail className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    info@ImpTrax.com
                  </p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg shadow-card">
                  <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Business Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Mon-Fri: 9 AM - 6 PM EST<br />
                    Emergency: 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-lg shadow-elegant p-8">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Tell Us About Your Project
                </h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* Contact Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold border-b border-border pb-2">
                        Contact Information
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Smith" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Business Email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john.smith@company.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="+1 (555) 123-4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="jobTitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Job Title *</FormLabel>
                            <FormControl>
                              <Input placeholder="CTO, VP of Technology, etc." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Company Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold border-b border-border pb-2">
                        Company Information
                      </h3>
                      
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Company Inc." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="companySize"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Size *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select company size" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1-10">1-10 employees</SelectItem>
                                  <SelectItem value="11-50">11-50 employees</SelectItem>
                                  <SelectItem value="51-200">51-200 employees</SelectItem>
                                  <SelectItem value="201-500">201-500 employees</SelectItem>
                                  <SelectItem value="501-1000">501-1000 employees</SelectItem>
                                  <SelectItem value="1000+">1000+ employees</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="industry"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Industry *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select your industry" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Financial Services">Financial Services</SelectItem>
                                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                                  <SelectItem value="Real Estate">Real Estate</SelectItem>
                                  <SelectItem value="Technology">Technology</SelectItem>
                                  <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                                  <SelectItem value="Retail">Retail</SelectItem>
                                  <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Website</FormLabel>
                            <FormControl>
                              <Input placeholder="https://www.yourcompany.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Project Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold border-b border-border pb-2">
                        Project Information
                      </h3>
                      
                      <FormField
                        control={form.control}
                        name="serviceInterest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Services of Interest * (Select all that apply)</FormLabel>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                              {['AI Development',
                                'Machine Learning',
                                'Automation Solutions',
                                'Robotic Process Automation',
                                'Predictive Analytics',
                                'Natural Language Processing',
                                'Data Analytics',
                                'AI Consulting',
                                'Custom Software'
                              ].map((service) => (
                                <label key={service} className="flex items-center space-x-2 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={field.value?.includes(service) || false}
                                    onChange={(e) => {
                                      const updatedValue = e.target.checked
                                        ? [...(field.value || []), service]
                                        : (field.value || []).filter((item) => item !== service);
                                      field.onChange(updatedValue);
                                    }}
                                    className="rounded border-border"
                                  />
                                  <span className="text-sm">{service}</span>
                                </label>
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="projectDescription"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Description *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please describe your project requirements, current challenges, and desired outcomes. Include any specific technologies or constraints."
                                className="min-h-[120px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="timeline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Project Timeline *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select timeline" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Immediate">Immediate (&lt; 1 month)</SelectItem>
                                  <SelectItem value="1-3 months">1-3 months</SelectItem>
                                  <SelectItem value="3-6 months">3-6 months</SelectItem>
                                  <SelectItem value="6-12 months">6-12 months</SelectItem>
                                  <SelectItem value="12+ months">12+ months</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="budgetRange"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Budget Range *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select budget" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="&lt; $50k">Less than $50k</SelectItem>
                                  <SelectItem value="$50k - $100k">$50k - $100k</SelectItem>
                                  <SelectItem value="$100k - $250k">$100k - $250k</SelectItem>
                                  <SelectItem value="$250k - $500k">$250k - $500k</SelectItem>
                                  <SelectItem value="$500k - $1M">$500k - $1M</SelectItem>
                                  <SelectItem value="$1M+">$1M+</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="urgency"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Priority Level *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select priority" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Low">Low</SelectItem>
                                  <SelectItem value="Medium">Medium</SelectItem>
                                  <SelectItem value="High">High</SelectItem>
                                  <SelectItem value="Critical">Critical</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Consultation Preferences */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold border-b border-border pb-2">
                        Consultation Preferences
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="preferredContactMethod"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Contact Method *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select contact method" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="email">Email</SelectItem>
                                  <SelectItem value="phone">Phone</SelectItem>
                                  <SelectItem value="video-call">Video Call</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="meetingType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Meeting Type *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select meeting type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="virtual">Virtual Meeting</SelectItem>
                                  <SelectItem value="in-person">In-Person (NYC)</SelectItem>
                                  <SelectItem value="phone">Phone Call</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="bestTimeToCall"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Best Time to Contact</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Weekdays 9 AM - 5 PM EST" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="additionalNotes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Notes</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Any additional information you'd like to share..."
                                className="min-h-[80px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Security Verification */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold border-b border-border pb-2">
                        Security Verification
                      </h3>
                      
                      <PatternCaptcha onVerify={setCaptchaVerified} />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-6">
                      <Button 
                        type="submit" 
                        size="lg"
                        disabled={isSubmitting || !captchaVerified}
                        className="w-full md:w-auto min-w-[300px]"
                      >
                        {isSubmitting ? 'Submitting...' : 'Schedule My Consultation'}
                      </Button>
                      
                      <p className="text-sm text-muted-foreground mt-4">
                        By submitting this form, you agree to our{' '}
                        <a href="/privacy-policy" className="text-primary hover:underline">
                          Privacy Policy
                        </a>{' '}
                        and{' '}
                        <a href="/terms-of-service" className="text-primary hover:underline">
                          Terms of Service
                        </a>
                      </p>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ScheduleConsultation;