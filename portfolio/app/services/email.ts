import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export async function sendContactEmail(data: EmailData) {
    try {
        const response = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['nicholasvannguyen@yahoo.com.au'],
            subject: `Portfolio Contact: ${data.subject}`,
            replyTo: data.email,
            text: `
                Name: ${data.name}
                Email: ${data.email}
                Subject: ${data.subject}
                
                Message:
                ${data.message}
            `,
        });

        return { success: true, data: response };
    } catch (error) {
        return { success: false, error: 'Failed to send email' };
    }
} 