import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ error: 'Valid email required' })
  }

  try {
    await resend.emails.send({
      from: 'Quoxova <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New newsletter subscriber: ${email}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 500px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 12px;">
          <div style="background: #4f46e5; border-radius: 8px; padding: 20px 24px; margin-bottom: 20px;">
            <h2 style="color: white; margin: 0; font-size: 18px;">New Newsletter Subscriber</h2>
          </div>
          <p style="color: #334155; font-size: 15px; margin: 0 0 8px;">
            <strong>${email}</strong> just subscribed to Quoxova Insights.
          </p>
          <p style="color: #64748b; font-size: 13px; margin: 0;">Add them to your mailing list to keep them in the loop.</p>
        </div>
      `,
    })

    await resend.emails.send({
      from: 'Quoxova <onboarding@resend.dev>',
      to: email,
      subject: "You're subscribed to Quoxova Insights",
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 500px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 12px;">
          <div style="background: #4f46e5; border-radius: 8px; padding: 20px 24px; margin-bottom: 24px;">
            <h2 style="color: white; margin: 0; font-size: 18px;">You're in.</h2>
            <p style="color: #c7d2fe; margin: 4px 0 0; font-size: 14px;">Quoxova Insights</p>
          </div>
          <p style="color: #334155; font-size: 15px; line-height: 1.7; margin: 0 0 16px;">
            Thanks for subscribing. We write about software engineering, building products for African markets, and how to avoid the most expensive mistakes in custom software.
          </p>
          <p style="color: #334155; font-size: 15px; line-height: 1.7; margin: 0 0 24px;">
            No spam. No sales pitch. Just things we've actually learned shipping software across health, fintech, logistics, and SaaS.
          </p>
          <a href="https://quoxova.vercel.app/insights" style="display: inline-block; padding: 12px 24px; background: #4f46e5; color: white; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
            Read our latest articles →
          </a>
          <p style="color: #94a3b8; font-size: 12px; margin-top: 24px;">Quoxova · Lagos, Nigeria · hello@quoxova.io</p>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Newsletter error:', error)
    return res.status(500).json({ error: 'Failed to subscribe. Please try again.' })
  }
}
