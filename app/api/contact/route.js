import mail from '@sendgrid/mail';

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export async function POST(request) {

    const body = await request.json();

    const msg = `
        Name: ${body.name}\r\n
        Email: ${body.email}\r\n
        Message: ${body.message}
    `

    const data = {
        to: 'maddieladair@gmail.com',
        from: 'maddieladair@gmail.com',
        subject: 'New Contact Form Submission',
        text: msg,
        html: msg.replace(/\r\n/g, '<br>')
      }

      await sgMail.send(data) 
      return Response.json({error:""});
    }