"use client"
import { useState } from 'react';
import axios from 'axios';

export default function SendEmailPage() {
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = async () => {
    try {
      // Define SendGrid API URL
      const apiUrl = 'https://api.sendgrid.com/v3/mail/send';

      // Define your SendGrid API key
      const apiKey = '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'; // Access the API key from environment variables
        
      // console.log(apiKey);
      // Define the email data
      const emailData = {
        personalizations: [
          {
            to: [
              {
                email: 'svamshikrish02@gmail.com',
              },
            ],
            subject: 'Nice to meet you',
          },
        ],
        from: {
          email: 'vamshi.krishna@novamodule.com',
        },
        content: [
          {
            type: 'text/html',
            value: `
              <h1>Dear recipient</h1>
              <p>We wanted to inform you about some important updates regarding your account. Please read the following information carefully:</p>
              <p>[Your message here]</p>
              <p>Thank you for your attention.</p>
              <p>Sincerely, Vamshi Krishna</p>
            `,
          },
        ],
      };

      // Make a POST request to SendGrid API using Axios
      console.log('Sending email request...');

      const response = await axios.post(apiUrl, emailData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        timeout: 10000, // Set a timeout of 10 seconds (adjust as needed)
      });
      console.log('Email request completed with status:', response.status);

      if (response.status === 202) {
        setEmailSent(true);
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);

    }
  };
  return (
    <div>
      <h1>Send Email Page</h1>
      <button onClick={sendEmail}>Send Email</button>
      {emailSent && <p>Email sent successfully!</p>}
    </div>
  );
}





// import React, { useState } from 'react';
// export default function SendEmailPage() {
//   const [emailSent, setEmailSent] = useState(false);
//   const [emailData, setEmailData] = useState(null); // State to store emailData

//   const sendEmail = async () => {
//     try {
//       // Make a POST request to your server's /sendemail endpoint using fetch
//       const response = await fetch('/sendemail', {
//         method: 'POST',
//       });

//       if (response.status === 200) {
//         // Retrieve emailData from the response
//         const email = await response.json();
//         console.log("email", email);
//         setEmailData(email);
//         setEmailSent(true);
//       } else {
//         console.error('Failed to send email');
//       }
//     } catch (error) {
//       console.error('Error sending email:', error);
//     }
//   };

//   return (
//     <div>
//   <h1>Send Email Page</h1>
//   <button onClick={sendEmail}>Send Email</button>
//      {emailSent && <p>Email sent successfully!</p>}
//     </div>
//   );
// }



// import React, { useState } from 'react';

// export default function SendEmailPage() {
//   const [emailSent, setEmailSent] = useState(false);
//   const [emailData, setEmailData] = useState(null);

//   const sendEmail = async () => {
//     try {
//       // Make a POST request to your server's /sendemail endpoint using fetch
//       const response = await fetch('http://localhost:8080/sendemail', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(emailData),
//       });

//       if (response.status === 200) {
//         // Retrieve emailData from the response (if your server sends it back)
//         const email = await response.json();
//         setEmailData(email);
//         setEmailSent(true);
//       } else {
//         console.error('Failed to send email');
//       }
//     } catch (error) {
//       console.error('Error sending email:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Send Email Page</h1>
//       <button onClick={sendEmail}>Send Email</button>
//       {emailSent && <p>Email sent successfully!</p>}
//     </div>
//   );
// }


// import React, { useState } from 'react';

// export default async function SendEmailPage() {
//   const [emailSent, setEmailSent] = useState(false);
//   const [emailData, setEmailData] = useState(null); 
    
  

//   const sendEmail = async () => {
//     try {
//       // Define your API URL
    
//       const apiUrl = '/sendemail'; // Assuming your API route is at /sendemail

//       // Define your SendGrid API key
//       const apiKey = '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';

//       // Extract request data from Postman-like object
//       const requestData = {
//         to: 'svamshikrish02@gmail.com', // Replace with req.body.to from Postman
//         subject: 'bdchdbvdbdbvdjvdjvndjvdvdvdv', // Replace with req.body.subject from Postman
//         message: 'vjhbdjvbdjvdvb', // Replace with req.body.message from Postman
//       };

//       // Create the emailData object with extracted values
//       const emailData = {
//         personalizations: [
//           {
//             to: [
//               {
//                 email: requestData.to,
//               },
//             ],
//             subject: requestData.subject,
//           },
//         ],
//         from: {
//           email: 'vamshi.krishna@novamodule.com', // Set your from email address
//         },
//         content: [
//           {
//             type: 'text/html',
//             value: `
//               <h1>Dear recipient</h1>
//               <p>We wanted to inform you about some important updates regarding your account. Please read the following information carefully:</p>
//               <p>${requestData.message}</p>
//               <p>Thank you for your attention.</p>
//               <p>Sincerely, Vamshi Krishna</p>
//             `,
//           },
//         ],
//       };

//       // Make a POST request to your API route using fetch
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${apiKey}`, // Include your API key here
//         },
//         body: JSON.stringify(emailData), // Send the emailData object
//       });

//       if (response.status === 200) {
//         // Retrieve emailData from the response
//         const email = await response.json();
//         console.log("email", email);
//         setEmailData(email);
//         setEmailSent(true);
//       } else {
//         console.error('Failed to send email');
//       }
//     } catch (error) {
//       console.error('Error sending email:', error);
//     }
//   };
 

//   return (
//     <div>
//       <h1>Send Email Page</h1>
//       <button onClick={sendEmail}>Send Email</button>
//       {emailSent && <p>Email sent successfully!</p>}
//     </div>
//   );
// }



// import React, { useState } from 'react';

// export default function SendEmailPage() {
//   const [emailSent, setEmailSent] = useState(false);

//   const sendEmail = async () => {
//     console.log("vbvbdjdv");
//     try {
//       // Define the request data
//       const requestData = {
//         to: 'svamshikrish02@gmail.com',
//         subject: 'bdchdbvdbdbvdjvdjvndjvdvdvdv',
//         message: 'vjhbdjvbdjvdvb',
//       };

//       // Make a POST request to your server's /api/sendemail endpoint using fetch
//       const response = await fetch('/sendemail', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestData),
//       });
//       console.log("response",response);
//       if (response.status === 200) {
//         // The email was sent successfully
//         setEmailSent(true);
//       } else {
//         console.error('Failed to send email');
//       }
//     } catch (error) {
//       console.error('Error sending email:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Send Email Page</h1>
//       <button onClick={sendEmail}>Send Email</button>
//       {emailSent && <p>Email sent successfully!</p>}
//     </div>
//   );
// }
