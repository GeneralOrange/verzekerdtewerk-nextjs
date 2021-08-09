const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { name, email, specialism_1, specialism_2, specialism_3, adres, city, distance, message, to_adres } = req.body

  const content = {
    to: email,
    bcc: to_adres,
    from: `Verzekerdtewerk | Werk <${to_adres}>`,
    subject: `Specialist aanmelding: ${name}`,
    text: message,
    html: `<p>
      Beste ${name},<br/><br/>
      Uw inschrijving is in goede orde ontvangen,<br/>
      uw ingevulde gegevens worden op een veilige manier verwerkt in onze database.<br/><br/>

      Zodra er een match plaats vind met uw ingevulde gegevens krijgt u hier over bericht van ons.<br/>
      Dit is een geautomatiseerd bericht, reageren op deze mail is niet mogelijk.<br/><br/>
      Wij willen u er op wijzen indien u vragen heeft gebruik te maken van onze contact pagina.<br/><br/>

      Met vriendelijke groet,<br/>
      Team verzekerdtewerk<br/><br/>

      <a href='https://www.verzekerdtewerk.nl'>
        <img src='https://www.verzekerdtewerk.nl/logo.svg' height='50px' width='50px' alt=''>
      </a><br/><br/>

      Wij hebben onderstaande gegevens van u ontvangen<br/><br/>
      <table>
        <tr><td>Email:</td><td>${email}</td></tr>
        <tr><td>Naam:</td><td>${name}</td></tr>
        <tr><td>Specialisme 1:</td><td>${specialism_1}</td></tr>
        <tr><td>Specialisme 2:</td><td>${specialism_2}</td></tr>
        <tr><td>Specialisme 3:</td><td>${specialism_3}</td></tr>
        <tr><td>Adres:</td><td>${adres}</td></tr>
        <tr><td>Plaats:</td><td>${city}</td></tr>
        <tr><td>Afstand die u maximaal wilt afleggen:</td><td>${distance} km</td></tr>
        <tr><td>Bericht:</td><td>${message}</td></tr>
      </table>
    </p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Aanmelding succesvol verstuurd.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Er is een probleem met het versturen van uw aanmelding.')
  }
}