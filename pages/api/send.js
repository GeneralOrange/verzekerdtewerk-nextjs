const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { name, email, subject, message, to_adres } = req.body

  const content = {
    to: email,
    bcc: to_adres,
    from: `Verzekerdtewerk | SupportTeam <${to_adres}>`,
    subject: `${name} zoekt contact over: ${subject}`,
    text: message,
    html: `<p>
      Beste ${name},<br/><br/>
      Graag bevestigen wij dat uw email in goede orde is ontvangen.<br/>
      Doorgaans proberen wij binnen 48 uur te reageren.<br/><br/>

      Met vriendelijke groet,<br/>
      Team verzekerdtewerk<br/><br/>

      <a href='https://www.verzekerdtewerk.nl'>
        <img src='https://www.verzekerdtewerk.nl/logo.svg' height='50px' width='50px' alt=''>
      </a><br/><br/>

      Wij hebben onderstaande gegevens van u ontvangen<br/><br/>
      <table>
        <tr><td>Onderwerp:</td><td>${subject}</td></tr>
        <tr><td>Email:</td><td>${email}</td></tr>
        <tr><td>Naam:</td><td>${name}</td></tr>
        <tr><td>Bericht:</td><td>${message}</td></tr>
      </table>
    </p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Bericht succesvol verstuurd.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Er is een probleem met het versturen van uw bericht.')
  }
}