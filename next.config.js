module.exports = {
    trailingSlash: true,
    env: {
        API_ENDPOINT: process.env.API_ENDPOINT,
        SITE_URL: process.env.SITE_URL
    },
    images: {
        domains: [
                'res.cloudinary.com',
                'localhost',
                'www.verzekerdtewerk.nl'
            ]
    },
    async redirects() {
        return [
          {
            source: '/informatie-kitter/',
            destination: '/specialisten/kitter/',
            permanent: true,
          },
        ]
    },
}