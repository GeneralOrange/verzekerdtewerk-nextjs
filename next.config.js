module.exports = {
    trailingSlash: true,
    env: {
        API_ENDPOINT: process.env.API_ENDPOINT,
        SITE_URL: process.env.SITE_URL
    },
    images: {
        domains: [
                'localhost',
                'https://www.verzekerdtewerk.nl/',
                'https://verzekerdtewerk-strapi.herokuapp.com/'
            ]
    }
}