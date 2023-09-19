import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Extract data from the request body
      const { to, subject, message } = req.body;

      if (!to || !subject || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Define your SendGrid API key
      const apiKey = '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';

      // Define the email data
      const emailData = {
        personalizations: [
          {
            to: [
              {
                email: to,
              },
            ],
            subject: subject,
          },
        ],
        from: {
          email: 'vamshi.krishna@novamodule.com',
        },
        content: [
          {
            type: 'text/plain', // You can also use 'text/html' for HTML content
            value: message,
          },
        ],
      };

      // Define the SendGrid API URL
      const apiUrl = 'https://api.sendgrid.com/v3/mail/send';

      // Make a POST request to SendGrid API using Axios
      const response = await axios.post(apiUrl, emailData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        timeout: 10000, // Set a timeout for the API request
      });

      if (response.status === 202) {
        res.status(200).json({ message: 'Email sent successfully!' });
      } else {
        console.error('Failed to send email');
        res.status(500).json({ error: 'Failed to send email - SendGrid error' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      if (error.response && error.response.status === 401) {
        res.status(401).json({ error: 'Unauthorized - Check your API key' });
      } else {
        res.status(500).json({ error: `Error sending email: ${error.message}` });
      }
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
