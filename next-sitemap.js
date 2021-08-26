module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    exclude: [
        '/werkzaamheden/alarm-systeem-installatie-of-vervanging/kosten',
        '/werkzaamheden/airco-plaatsen-of-vervangen/kosten',
        '/werkzaamheden/dakgoot-schoonhouden/kosten',
        '/werkzaamheden/schoorsteen-vegen/kosten'
    ]
}