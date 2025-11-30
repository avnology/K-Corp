'use server'

import { createSafeActionClient } from 'next-safe-action'
import nodemailer, { type TransportOptions } from 'nodemailer'
import { getPayload } from 'payload'
import { z } from 'zod'
import config from '@/payload.config'

const actionClient = createSafeActionClient()

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: process.env.NODE_ENV === 'development' ? { rejectUnauthorized: false } : undefined,
} as TransportOptions)

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
})

export const sendEmail = actionClient
  .schema(schema)
  .action(async ({ parsedInput: { name, email, message } }) => {
    try {
      // Save to database
      const payload = await getPayload({ config: await config })

      await payload.create({
        collection: 'messages',
        data: {
          name,
          email,
          message,
        },
      })

      // Send email
      await transporter.sendMail({
        from: process.env.SMTP_FROM_EMAIL,
        to: process.env.SMTP_TO_EMAIL,
        subject: 'New Contact Message',
        text: 'You have a new message',
        html: `
        <div style="font-family: Arial, sans-serif; background: #f8f9fc; padding: 20px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: auto; background: #fff; border-radius: 8px; overflow: hidden;">
            <tr>
              <td style="background: #002569; padding: 16px;">
                <h2 style="margin:0; color: #fff; text-align:center;">New Contact Message</h2>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px;">
                <table width="100%" cellpadding="6">
                  <tr>
                    <td><strong>Name:</strong></td>
                    <td>${name}</td>
                  </tr>
                  <tr>
                    <td><strong>Email:</strong></td>
                    <td>${email}</td>
                  </tr>
                  <tr>
                    <td valign="top"><strong>Message:</strong></td>
                    <td>${message.replace(/\n/g, '<br>')}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="background:#f1f1f1; padding: 10px; text-align:center; font-size: 12px; color:#777;">
                This message was sent from your website contact form.
              </td>
            </tr>
          </table>
        </div>
      `,
      })

      return { success: true, message: 'Email sent successfully' }
    } catch (error) {
      console.error('Error sending email:', error)
      return {
        success: false,
        message: 'Failed to send email',
      }
    }
  })
