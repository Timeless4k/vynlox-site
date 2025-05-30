import axios from 'axios';

// Validate environment variables
const validateEnvVars = () => {
  const requiredVars = [
    'BREVO_API_KEY',
    'BREVO_NEWSLETTER_LIST_ID',
    'BREVO_PRELAUNCH_LIST_ID',
    'BREVO_DEMO_LIST_ID',
    'BREVO_WORKSHOP_LIST_ID',
    'BREVO_CONTACT_LIST_ID',
    'BREVO_DISCOUNT_LIST_ID',
    'BREVO_RETAINER_LIST_ID',
    'BREVO_NEWSLETTER_TEMPLATE_ID',
    'BREVO_PRELAUNCH_TEMPLATE_ID',
    'BREVO_DISCOUNT_TEMPLATE_ID',
    'BREVO_DEMO_TEMPLATE_ID',
    'BREVO_WORKSHOP_TEMPLATE_ID',
    'BREVO_CONTACT_TEMPLATE_ID',
    'BREVO_RETAINER_TEMPLATE_ID',
  ];

  const missingVars = requiredVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    if (process.env.NODE_ENV === 'production') {
      // In production, only log the names
      console.error('[Brevo] Missing required environment variables:', missingVars);
      throw new Error('Missing required environment variables for Brevo integration: ' + missingVars.join(', '));
    } else {
      // In development, log names and values (mask API key)
      console.warn('[Brevo] Missing required environment variables (development only):');
      missingVars.forEach(varName => {
        let value = process.env[varName];
        if (varName === 'BREVO_API_KEY') {
          value = value ? value.slice(0, 4) + '...' : undefined;
        }
        console.warn(`  ${varName}:`, value === undefined ? '(undefined)' : `(empty: '${value}')`);
      });
    }
  }
};

// Call validation on module load
validateEnvVars();

// Types for email capture
export const EmailCapturePurpose = {
  // Main purposes
  PRELAUNCH: 'prelaunch',
  DISCOUNT_CODE: 'discount_code',
  DEMO_ACCESS: 'demo_access',
  WORKSHOP: 'workshop',
  NEWSLETTER: 'newsletter',
  CONTACT: 'contact',
  RETAINER_INFO: 'retainer_info',
  
  // Location-specific captures
  HOMEPAGE_NEWSLETTER: 'homepage_newsletter',
  FOOTER_NEWSLETTER: 'footer_newsletter',
  BLOG_NEWSLETTER: 'blog_newsletter',
  PRICING_DEMO: 'pricing_demo',
  FEATURES_DEMO: 'features_demo',
  CONTACT_PAGE: 'contact_page',
  WORKSHOP_SIGNUP: 'workshop_signup',
  RETAINER_CALCULATOR: 'retainer_calculator',
} as const;

export type EmailCapturePurpose = typeof EmailCapturePurpose[keyof typeof EmailCapturePurpose];

interface EmailCaptureData {
  email: string;
  purpose: EmailCapturePurpose;
  name: string;
  company: string;
  phone: string;
  message?: string;
  unlockCode?: string;
  // Additional beneficial attributes
  jobTitle?: string;
  industry?: string;
  companySize?: string;
  interests?: string[];
  preferredContactTime?: string;
  timezone?: string;
  source?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
}

// Initialize Brevo client with error handling
const brevoClient = axios.create({
  baseURL: 'https://api.brevo.com/v3',
  headers: {
    'api-key': process.env.BREVO_API_KEY,
    'content-type': 'application/json',
    'accept': 'application/json',
  },
});

// Add response interceptor for better error handling
brevoClient.interceptors.response.use(
  response => response,
  error => {
    console.error('Brevo API Error:', error.response?.data || error.message);
    throw error;
  }
);

// Map purposes to Brevo list IDs
const PURPOSE_TO_LIST_ID: Record<EmailCapturePurpose, number> = {
  // Main purposes
  [EmailCapturePurpose.PRELAUNCH]: Number(process.env.BREVO_PRELAUNCH_LIST_ID),
  [EmailCapturePurpose.DISCOUNT_CODE]: Number(process.env.BREVO_DISCOUNT_LIST_ID),
  [EmailCapturePurpose.DEMO_ACCESS]: Number(process.env.BREVO_DEMO_LIST_ID),
  [EmailCapturePurpose.WORKSHOP]: Number(process.env.BREVO_WORKSHOP_LIST_ID),
  [EmailCapturePurpose.NEWSLETTER]: Number(process.env.BREVO_NEWSLETTER_LIST_ID),
  [EmailCapturePurpose.CONTACT]: Number(process.env.BREVO_CONTACT_LIST_ID),
  [EmailCapturePurpose.RETAINER_INFO]: Number(process.env.BREVO_RETAINER_LIST_ID),
  
  // Location-specific captures
  [EmailCapturePurpose.HOMEPAGE_NEWSLETTER]: Number(process.env.BREVO_NEWSLETTER_LIST_ID),
  [EmailCapturePurpose.FOOTER_NEWSLETTER]: Number(process.env.BREVO_NEWSLETTER_LIST_ID),
  [EmailCapturePurpose.BLOG_NEWSLETTER]: Number(process.env.BREVO_NEWSLETTER_LIST_ID),
  [EmailCapturePurpose.PRICING_DEMO]: Number(process.env.BREVO_DEMO_LIST_ID),
  [EmailCapturePurpose.FEATURES_DEMO]: Number(process.env.BREVO_DEMO_LIST_ID),
  [EmailCapturePurpose.CONTACT_PAGE]: Number(process.env.BREVO_CONTACT_LIST_ID),
  [EmailCapturePurpose.WORKSHOP_SIGNUP]: Number(process.env.BREVO_WORKSHOP_LIST_ID),
  [EmailCapturePurpose.RETAINER_CALCULATOR]: Number(process.env.BREVO_RETAINER_LIST_ID),
};

// Helper function to get template ID based on purpose
const getTemplateIdForPurpose = (purpose: EmailCapturePurpose): number => {
  const templateMap: Record<EmailCapturePurpose, number> = {
    // Main purposes
    [EmailCapturePurpose.PRELAUNCH]: Number(process.env.BREVO_PRELAUNCH_TEMPLATE_ID),
    [EmailCapturePurpose.DISCOUNT_CODE]: Number(process.env.BREVO_DISCOUNT_TEMPLATE_ID),
    [EmailCapturePurpose.DEMO_ACCESS]: Number(process.env.BREVO_DEMO_TEMPLATE_ID),
    [EmailCapturePurpose.WORKSHOP]: Number(process.env.BREVO_WORKSHOP_TEMPLATE_ID),
    [EmailCapturePurpose.NEWSLETTER]: Number(process.env.BREVO_NEWSLETTER_TEMPLATE_ID),
    [EmailCapturePurpose.CONTACT]: Number(process.env.BREVO_CONTACT_TEMPLATE_ID),
    [EmailCapturePurpose.RETAINER_INFO]: Number(process.env.BREVO_RETAINER_TEMPLATE_ID),
    
    // Location-specific captures
    [EmailCapturePurpose.HOMEPAGE_NEWSLETTER]: Number(process.env.BREVO_NEWSLETTER_TEMPLATE_ID),
    [EmailCapturePurpose.FOOTER_NEWSLETTER]: Number(process.env.BREVO_NEWSLETTER_TEMPLATE_ID),
    [EmailCapturePurpose.BLOG_NEWSLETTER]: Number(process.env.BREVO_NEWSLETTER_TEMPLATE_ID),
    [EmailCapturePurpose.PRICING_DEMO]: Number(process.env.BREVO_DEMO_TEMPLATE_ID),
    [EmailCapturePurpose.FEATURES_DEMO]: Number(process.env.BREVO_DEMO_TEMPLATE_ID),
    [EmailCapturePurpose.CONTACT_PAGE]: Number(process.env.BREVO_CONTACT_TEMPLATE_ID),
    [EmailCapturePurpose.WORKSHOP_SIGNUP]: Number(process.env.BREVO_WORKSHOP_TEMPLATE_ID),
    [EmailCapturePurpose.RETAINER_CALCULATOR]: Number(process.env.BREVO_RETAINER_TEMPLATE_ID),
  };
  return templateMap[purpose];
};

// Function to add contact to Brevo
export async function addContactToBrevo(data: EmailCaptureData) {
  try {
    // Validate environment variables
    validateEnvVars();

    // First, check if contact exists
    let existingContact;
    try {
      const response = await brevoClient.get(`/contacts/${encodeURIComponent(data.email)}`);
      existingContact = response.data;
    } catch (error) {
      // Contact doesn't exist, which is fine
    }

    const currentDate = new Date().toISOString();

    // Create or update contact
    const contactData = {
      email: data.email,
      attributes: {
        // Required fields
        FIRSTNAME: data.name,
        COMPANY: data.company,
        PHONE: data.phone,
        MESSAGE: data.message || '',
        UNLOCK_CODE: data.unlockCode || '',
        
        // Tracking attributes
        SIGNUP_SOURCE: data.purpose,
        SIGNUP_DATE: currentDate,
        FIRST_CAPTURE: existingContact ? existingContact.attributes?.FIRST_CAPTURE : data.purpose,
        LAST_CAPTURE_DATE: currentDate,
        CAPTURE_HISTORY: existingContact 
          ? `${existingContact.attributes?.CAPTURE_HISTORY || ''},${data.purpose}`
          : data.purpose,
        CAPTURE_LOCATION: data.purpose,
        PAGE_SOURCE: data.purpose,

        // Additional beneficial attributes
        JOB_TITLE: data.jobTitle || '',
        INDUSTRY: data.industry || '',
        COMPANY_SIZE: data.companySize || '',
        INTERESTS: data.interests?.join(',') || '',
        PREFERRED_CONTACT_TIME: data.preferredContactTime || '',
        TIMEZONE: data.timezone || '',
        SOURCE: data.source || '',
        
        // UTM Parameters
        UTM_SOURCE: data.utmSource || '',
        UTM_MEDIUM: data.utmMedium || '',
        UTM_CAMPAIGN: data.utmCampaign || '',
        UTM_TERM: data.utmTerm || '',
        UTM_CONTENT: data.utmContent || '',
      },
      listIds: [PURPOSE_TO_LIST_ID[data.purpose]],
      updateEnabled: true,
    };

    await brevoClient.post('/contacts', contactData);

    // Trigger welcome email if template exists
    const templateId = getTemplateIdForPurpose(data.purpose);
    if (templateId) {
      await brevoClient.post('/smtp/email', {
        templateId,
        to: [{ email: data.email, name: data.name }],
        params: {
          // Required fields
          name: data.name,
          company: data.company,
          phone: data.phone,
          
          // Tracking
          signupSource: data.purpose,
          signupDate: currentDate,
          firstCapture: existingContact ? existingContact.attributes?.FIRST_CAPTURE : data.purpose,
          captureHistory: contactData.attributes.CAPTURE_HISTORY,
          captureLocation: data.purpose,
          pageSource: data.purpose,
          
          // Additional fields
          jobTitle: data.jobTitle || '',
          industry: data.industry || '',
          companySize: data.companySize || '',
          interests: data.interests?.join(',') || '',
          preferredContactTime: data.preferredContactTime || '',
          timezone: data.timezone || '',
          source: data.source || '',
          
          // UTM Parameters
          utmSource: data.utmSource || '',
          utmMedium: data.utmMedium || '',
          utmCampaign: data.utmCampaign || '',
          utmTerm: data.utmTerm || '',
          utmContent: data.utmContent || '',
        },
      });
    }

    return { success: true };
  } catch (error) {
    console.error('Error adding contact to Brevo:', error);
    throw error;
  }
} 