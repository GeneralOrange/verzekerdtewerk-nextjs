const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { email, message } = req.body

  const content = {
    to: 'info@verzekerdtewerk.nl',
    from: 'info@verzekerdtewerk.nl',
    subject: `${email} - Zoekt contact`,
    text: message,
    html: `<p>${message}</p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Bericht succesvol verstuurd.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Er is een probleem met het versturen van uw bericht.')
  }
}