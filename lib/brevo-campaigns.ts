import axios from 'axios';

// Initialize Brevo client
const brevoClient = axios.create({
  baseURL: 'https://api.brevo.com/v3',
  headers: {
    'api-key': process.env.BREVO_API_KEY,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

interface CampaignSettings {
  name: string;
  subject: string;
  sender: {
    name: string;
    email: string;
  };
  htmlContent: string;
  listIds: number[];
  scheduledAt?: string;
}

export async function createCampaign(settings: CampaignSettings) {
  try {
    const response = await brevoClient.post('/emailCampaigns', {
      name: settings.name,
      subject: settings.subject,
      sender: settings.sender,
      type: 'classic',
      htmlContent: settings.htmlContent,
      recipients: {
        listIds: settings.listIds,
      },
      scheduledAt: settings.scheduledAt,
    });

    return response.data;
  } catch (error) {
    console.error('Error creating campaign:', error);
    throw error;
  }
}

// Example usage:
// await createCampaign({
//   name: "Welcome Campaign",
//   subject: "Welcome to Vynlox!",
//   sender: {
//     name: "Vynlox Team",
//     email: "hello@vynlox.com"
//   },
//   htmlContent: "<h1>Welcome!</h1><p>Thanks for joining us.</p>",
//   listIds: [1], // Your list ID from Brevo
//   scheduledAt: new Date(Date.now() + 3600000).toISOString() // Schedule for 1 hour from now
// }); 