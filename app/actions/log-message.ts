"use server"

export async function logInterestMessage(formData: {
  email: string;
  message: string;
  language: 'en' | 'de';
}) {
  try {
    // You can get a webhook URL from webhook.site or similar services
    const webhookUrl = process.env.WEBHOOK_URL || 'https://webhook.site/your-unique-url';
    
    // Add timestamp to the data
    const data = {
      ...formData,
      timestamp: new Date().toISOString(),
    };
    
    // Send the data to the webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`Webhook responded with status: ${response.status}`);
    }
    
    console.log('Message logged to webhook');
    return { success: true };
  } catch (error) {
    console.error('Error logging message:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
}
