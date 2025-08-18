import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  jobTitle?: string
  website?: string
  companySize?: string
  industry?: string
  servicesInterested: string[]
  projectDescription?: string
  timeline?: string
  budgetRange?: string
  urgency?: string
  preferredContactMethod?: string
  bestTimeToCall?: string
  meetingType?: string
  additionalNotes?: string
  browserInfo: any
  screenInfo: any
  timezoneInfo: any
  referralInfo: any
  sessionInfo: any
  formCompletionTime: number
  captchaVerified: boolean
}

async function getLocationFromIP(ip: string) {
  try {
    const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,region,regionName,city,lat,lon,timezone,isp,org,query`)
    const data = await response.json()
    
    if (data.status === 'success') {
      return {
        ip: data.query,
        city: data.city,
        state: data.regionName,
        country: data.country,
        countryCode: data.countryCode,
        latitude: data.lat,
        longitude: data.lon,
        timezone: data.timezone,
        isp: data.isp,
        organization: data.org
      }
    }
  } catch (error) {
    console.error('IP geolocation error:', error)
  }
  
  // Fallback data
  return {
    ip: ip,
    city: 'Unknown',
    state: 'Unknown',
    country: 'Unknown',
    countryCode: 'XX',
    latitude: null,
    longitude: null,
    timezone: 'Unknown',
    isp: 'Unknown',
    organization: 'Unknown'
  }
}

function calculateLeadScore(formData: ContactFormData): number {
  let score = 0
  
  // Company size scoring
  if (formData.companySize) {
    if (formData.companySize.includes('1000+')) score += 30
    else if (formData.companySize.includes('500-1000')) score += 25
    else if (formData.companySize.includes('100-500')) score += 20
    else if (formData.companySize.includes('50-100')) score += 15
    else score += 10
  }
  
  // Industry scoring
  if (formData.industry === 'Financial Services' || formData.industry === 'Healthcare') {
    score += 25
  } else {
    score += 10
  }
  
  // Budget range scoring
  if (formData.budgetRange) {
    if (formData.budgetRange.includes('$500,000+')) score += 30
    else if (formData.budgetRange.includes('$100,000 - $500,000')) score += 25
    else if (formData.budgetRange.includes('$50,000 - $100,000')) score += 20
    else score += 10
  }
  
  // Urgency scoring
  if (formData.urgency === 'Immediate') score += 20
  else if (formData.urgency === 'High') score += 15
  else if (formData.urgency === 'Medium') score += 10
  else score += 5
  
  // Services interested scoring
  if (formData.servicesInterested.length > 1) score += 10
  else score += 5
  
  // Form completeness scoring
  const completedFields = Object.values(formData).filter(value => 
    value !== null && value !== undefined && value !== ''
  ).length
  score += Math.min(completedFields, 15)
  
  return Math.min(score, 100)
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const formData: ContactFormData = await req.json()
    
    // Get client IP
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
                     req.headers.get('x-real-ip') || 
                     '127.0.0.1'

    // Get location data from IP
    const locationData = await getLocationFromIP(clientIP)
    
    // Calculate lead score
    const leadScore = calculateLeadScore(formData)
    
    // SECURITY: Validate captcha is verified before processing
    if (!formData.captchaVerified) {
      console.error('Captcha verification failed - submission blocked')
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Captcha verification required' 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400 
        }
      )
    }

    // Prepare submission data with enhanced validation
    const submissionData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      job_title: formData.jobTitle,
      website: formData.website,
      company_size: formData.companySize,
      industry: formData.industry,
      services_interested: formData.servicesInterested,
      project_description: formData.projectDescription,
      timeline: formData.timeline,
      budget_range: formData.budgetRange,
      urgency: formData.urgency,
      preferred_contact_method: formData.preferredContactMethod,
      best_time_to_call: formData.bestTimeToCall,
      meeting_type: formData.meetingType,
      additional_notes: formData.additionalNotes,
      ip_address: locationData.ip,
      city: locationData.city,
      state: locationData.state,
      country: locationData.country,
      country_code: locationData.countryCode,
      timezone: locationData.timezone,
      isp: locationData.isp,
      browser_info: formData.browserInfo,
      screen_info: formData.screenInfo,
      timezone_info: formData.timezoneInfo,
      referral_page: formData.referralInfo?.referrer || 'Direct',
      cta_source: formData.referralInfo?.ctaSource || 'Unknown',
      user_agent: formData.browserInfo?.userAgent,
      session_data: formData.sessionInfo,
      form_completion_time: formData.formCompletionTime,
      form_interaction_data: {
        screenInfo: formData.screenInfo,
        timezoneInfo: formData.timezoneInfo,
        referralInfo: formData.referralInfo,
        locationData: locationData
      },
      captcha_verified: true, // Explicitly set to true since we validated above
      lead_score: leadScore,
      lead_status: leadScore >= 70 ? 'hot' : leadScore >= 40 ? 'warm' : 'cold'
    }

    // Insert into database
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert(submissionData)
      .select()

    if (error) {
      console.error('Database error:', error)
      throw error
    }

    console.log('Contact form submitted successfully:', data[0].id)
    console.log('Lead score:', leadScore)
    console.log('Location data:', locationData)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully',
        leadId: data[0].id,
        leadScore: leadScore
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})