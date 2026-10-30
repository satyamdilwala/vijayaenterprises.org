import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { sendEnquiryEmail } from './server/emailService.js';

dotenv.config();

function emailApiPlugin() {
  return {
    name: 'email-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/send-email', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 455;
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });

        req.on('end', async () => {
          try {
            const data = JSON.parse(body);
            const { name, email, phone, subject, productName, message } = data;

            if (!name || !email || !message) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, message: 'Name, email and message are required.' }));
              return;
            }

            console.log(`[Vite API Plugin] Sending enquiry email for ${name} (${email})...`);
            const result = await sendEnquiryEmail({ name, email, phone, subject, productName, message });
            console.log(`[Vite API Plugin] Email sent successfully! ID: ${result.messageId}`);

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ 
              success: true, 
              message: 'Enquiry sent successfully to contact@vijayaenterprises.org',
              messageId: result.messageId 
            }));
          } catch (err) {
            console.error('[Vite API Plugin Error]', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, message: 'Failed to send email', error: err.message }));
          }
        });
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), emailApiPlugin()],
});
