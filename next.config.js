module.exports = {
    trailingSlash: true,
    env: {
        API_ENDPOINT: process.env.API_ENDPOINT
    },
    images: {
        domains: [
                'localhost',
                'https://verzekerdtewerk-strapi.herokuapp.com/'
            ]
    }
}