module.exports = (req, res) => {
    const webhook_url = 'https://discord.com/api/webhooks/842522800699080735/V4EPKnHNauwJgFoCnJD6FOcLCsDGjftZvjIZO0bd2-VIAIbb3kwMnYAmXfB6pQIZ3D1w?wait=true';

    const msg = {
        "content": "Dit is een test!"
    }

    fetch(webhook_url, {
        "method": "POST",
        "headers": {
            "content-type": "application/json"
        },
        "body": JSON.stringify(msg)
    })
  }