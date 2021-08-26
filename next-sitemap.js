module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
    generateRobotsTxt: true, // (optional)
    sitemapSize: 7000, // ...other options
    exclude: [
        '/werkzaamheden/alarm-systeem-installatie-of-vervanging/kosten/',
        '/werkzaamheden/airco-plaatsen-of-vervangen/kosten/',
        '/werkzaamheden/dakgoot-schoonhouden/kosten/',
        '/werkzaamheden/schoorsteen-vegen/kosten/'
    ]
}