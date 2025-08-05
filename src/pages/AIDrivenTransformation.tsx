import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Brain, TrendingUp, Shield, Zap, Target, Users, BarChart3, Clock, DollarSign, Heart, Stethoscope, FileText, Database, Cpu, CheckCircle, Star, Award, Globe } from 'lucide-react';

const AIDrivenTransformation = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Driven Transformation
              <span className="block text-blue-300 text-3xl md:text-4xl mt-2">
                Revolutionizing American Healthcare
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Empowering healthcare providers with intelligent automation, predictive analytics, and AI-powered solutions 
              that transform patient care, optimize revenue cycles, and drive value-based outcomes across the entire healthcare ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                Explore AI Solutions <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core AI Transformation Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Six Pillars of AI Healthcare Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ImpTrax delivers comprehensive AI solutions that address the most critical challenges in American healthcare, 
              from revenue optimization to clinical excellence and population health management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Revenue Cycle Management */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Revenue Cycle Management</h3>
              <p className="text-gray-600 mb-6">
                Intelligent automation for claims processing, denial prediction, and payment optimization that reduces administrative costs by up to 30% while improving cash flow.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Automated coding & billing</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Predictive denial management</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Real-time eligibility verification</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Intelligent prior authorization</li>
              </ul>
            </div>

            {/* AI Clinical Decision Support */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Stethoscope className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Clinical Decision Support</h3>
              <p className="text-gray-600 mb-6">
                Advanced CDSS powered by machine learning that enhances diagnostic accuracy, treatment recommendations, and patient safety through evidence-based insights.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Predictive risk stratification</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Personalized treatment plans</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Drug interaction alerts</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Clinical pathway optimization</li>
              </ul>
            </div>

            {/* Value-Based Care Analytics */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Value-Based Care Analytics</h3>
              <p className="text-gray-600 mb-6">
                AI-powered population health management and quality metrics optimization that drives better outcomes while reducing costs in value-based care models.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Population health insights</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Quality measure tracking</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Risk adjustment optimization</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Outcome prediction models</li>
              </ul>
            </div>

            {/* AI Financial Systems */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Financial Systems</h3>
              <p className="text-gray-600 mb-6">
                Intelligent financial management platforms that provide real-time insights, predictive forecasting, and automated financial operations for healthcare providers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Revenue forecasting</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Cost optimization</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Financial risk assessment</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Automated reporting</li>
              </ul>
            </div>

            {/* Digital Health Platforms */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-teal-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Health Platforms</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive digital transformation solutions that integrate AI across all healthcare touchpoints, from patient engagement to operational excellence.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Patient portal integration</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Telehealth optimization</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Workflow automation</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Data interoperability</li>
              </ul>
            </div>

            {/* Predictive Analytics */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Predictive Analytics</h3>
              <p className="text-gray-600 mb-6">
                Advanced machine learning models that predict patient outcomes, identify at-risk populations, and enable proactive interventions for improved care delivery.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Readmission prediction</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Disease progression modeling</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Resource utilization forecasting</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Early warning systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Revenue Cycle Excellence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI Revenue Cycle Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your revenue cycle with intelligent automation that reduces costs, accelerates payments, and improves accuracy across all RCM processes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Intelligent Claims Processing</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Automated Coding & Documentation</h4>
                    <p className="text-gray-600">
                      AI-powered natural language processing automatically assigns accurate billing codes from clinical documentation, 
                      reducing manual effort by 70% and improving coding accuracy to 98%.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Predictive Denial Management</h4>
                    <p className="text-gray-600">
                      Machine learning algorithms analyze historical denial patterns to predict and prevent claim denials before submission, 
                      reducing denial rates by up to 40% and accelerating payment cycles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Eligibility Verification</h4>
                    <p className="text-gray-600">
                      Instant insurance verification and benefits checking that eliminates coverage surprises and reduces 
                      administrative burden while improving patient satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">RCM Performance Metrics</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                  <div className="text-sm text-gray-600">Reduction in Discharged Not Final Billed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                  <div className="text-sm text-gray-600">Increase in Coder Productivity</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">22%</div>
                  <div className="text-sm text-gray-600">Decrease in Prior Auth Denials</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
                  <div className="text-sm text-gray-600">Coding Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Decision Support Systems */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Clinical Decision Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance clinical decision-making with intelligent systems that provide evidence-based recommendations, 
              risk stratification, and personalized treatment pathways at the point of care.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Risk Stratification</h3>
              <p className="text-gray-600 mb-6">
                AI algorithms analyze patient data to identify high-risk individuals and predict potential complications, 
                enabling proactive interventions and preventive care strategies.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Sepsis prediction models</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Readmission risk scoring</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Mortality prediction</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Chronic disease progression</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Database className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Evidence-Based Recommendations</h3>
              <p className="text-gray-600 mb-6">
                Intelligent systems that integrate clinical guidelines, research evidence, and patient-specific data 
                to provide personalized treatment recommendations and care pathways.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Treatment protocol optimization</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Drug dosing recommendations</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Diagnostic support</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Care plan personalization</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-Time Alerts</h3>
              <p className="text-gray-600 mb-6">
                Intelligent monitoring systems that provide real-time alerts for critical conditions, drug interactions, 
                and care gaps to improve patient safety and clinical outcomes.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Drug interaction warnings</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Allergy alerts</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Critical value notifications</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Care gap identification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value-Based Care Transformation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Value-Based Care Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-driven analytics and population health management tools that optimize quality metrics, 
              reduce costs, and improve patient outcomes in value-based care models.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-green-50 to-teal-100 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Population Health Insights</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Diabetes A1C Control</span>
                  <span className="text-2xl font-bold text-green-600">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Breast Cancer Screening</span>
                  <span className="text-2xl font-bold text-blue-600">88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '88%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Preventive Care Completion</span>
                  <span className="text-2xl font-bold text-purple-600">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">AI-Powered Quality Management</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Quality Measure Optimization</h4>
                    <p className="text-gray-600">
                      AI algorithms continuously monitor and optimize quality metrics, identifying opportunities 
                      for improvement and automating quality reporting for value-based contracts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Population Risk Management</h4>
                    <p className="text-gray-600">
                      Advanced analytics identify high-risk patient populations and enable targeted interventions 
                      to prevent adverse outcomes and reduce total cost of care.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Outcome Prediction & Analytics</h4>
                    <p className="text-gray-600">
                      Predictive models forecast patient outcomes and care costs, enabling proactive care management 
                      and resource optimization in value-based arrangements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Financial Systems */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Intelligent Financial Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered financial systems that provide real-time insights, predictive forecasting, 
              and automated operations to optimize healthcare financial performance.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Revenue Forecasting</h3>
              <p className="text-gray-600 mb-6">
                Advanced machine learning models analyze historical data, market trends, and operational metrics 
                to provide accurate revenue forecasts and budget planning insights.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Predictive revenue modeling</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Seasonal trend analysis</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Payer mix optimization</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Budget variance analysis</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cost Optimization</h3>
              <p className="text-gray-600 mb-6">
                AI-driven cost analysis identifies inefficiencies, optimizes resource allocation, 
                and provides actionable insights to reduce operational expenses while maintaining quality.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Supply chain optimization</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Labor cost analysis</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Vendor performance tracking</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Waste reduction insights</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Risk Assessment</h3>
              <p className="text-gray-600 mb-6">
                Intelligent risk models assess financial exposure, predict cash flow challenges, 
                and provide early warning systems for potential financial issues.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Credit risk analysis</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Cash flow prediction</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Bad debt forecasting</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Financial stress testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI Implementation Roadmap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful AI adoption with minimal disruption to your operations 
              and maximum return on investment.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Assessment & Strategy</h3>
              <p className="text-gray-600">
                Comprehensive evaluation of current systems, workflows, and data readiness to develop 
                a customized AI transformation strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pilot Implementation</h3>
              <p className="text-gray-600">
                Targeted pilot programs in high-impact areas to demonstrate value, refine processes, 
                and build organizational confidence in AI solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Scaled Deployment</h3>
              <p className="text-gray-600">
                Systematic rollout across departments and functions with comprehensive training, 
                change management, and continuous optimization.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Optimization & Growth</h3>
              <p className="text-gray-600">
                Continuous monitoring, performance optimization, and expansion of AI capabilities 
                to drive ongoing value and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI Transformation Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from healthcare organizations that have successfully implemented 
              AI-driven transformation initiatives with ImpTrax.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Auburn Community Hospital</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Independent 99-bed rural hospital leveraged AI-powered RCM solutions to achieve 
                remarkable operational improvements and financial performance.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">DNFB Reduction</span>
                  <span className="font-bold text-blue-600">50%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Coder Productivity</span>
                  <span className="font-bold text-green-600">+40%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Case Mix Index</span>
                  <span className="font-bold text-purple-600">+4.6%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Star className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Banner Health System</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Multi-state health system implemented comprehensive AI automation across 
                revenue cycle operations and insurance management processes.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Coverage Discovery</span>
                  <span className="font-bold text-blue-600">Automated</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Appeal Generation</span>
                  <span className="font-bold text-green-600">AI-Powered</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Write-off Decisions</span>
                  <span className="font-bold text-purple-600">Predictive</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Community Health Network</h3>
              </div>
              <p className="text-gray-600 mb-6">
                California-based network deployed AI-powered claims review and denial prediction 
                to significantly improve prior authorization and coverage outcomes.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Prior Auth Denials</span>
                  <span className="font-bold text-blue-600">-22%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Coverage Denials</span>
                  <span className="font-bold text-green-600">-18%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Claims Accuracy</span>
                  <span className="font-bold text-purple-600">+35%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your Healthcare Organization with AI
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Join leading healthcare providers who are leveraging AI to improve patient outcomes, 
            optimize operations, and drive sustainable financial performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Start Your AI Journey
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Download AI Readiness Assessment
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIDrivenTransformation;