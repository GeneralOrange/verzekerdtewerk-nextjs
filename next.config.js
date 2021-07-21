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
          source: '/informatie-behanger/',
          destination: '/specialisten/behanger/',
          permanent: true,
        },
        {
          source: '/sloop/',
          destination: '/specialisten/sloop/',
          permanent: true,
        },
        {
          source: '/kosten-informatie-domotica/',
          destination: '/specialisten/domotica/kosten/',
          permanent: true,
        },
        {
          source: '/isolatie/',
          destination: '/specialisten/isolatie/',
          permanent: true,
        },
        {
          source: '/informatie-aannemer/',
          destination: '/specialisten/aannemer/',
          permanent: true,
        },
        {
          source: '/informatie-plinten-zetter/',
          destination: '/specialisten/plinten-zetter/',
          permanent: true,
        },
        {
          source: '/architect/',
          destination: '/specialisten/architect/',
          permanent: true,
        },
        {
          source: '/kitter/',
          destination: '/specialisten/kitter/',
          permanent: true,
        },
        {
          source: '/kosten-informatie-tegelzetter-specialist/',
          destination: '/specialisten/tegelzetter/kosten/',
          permanent: true,
        },
        {
          source: '/informatie-kitter/',
          destination: '/specialisten/kitter/',
          permanent: true,
        },
        {
          source: '/wat-is-en-wat-doet-een-badkamer-specialist/',
          destination: '/specialisten/badkamer/',
          permanent: true,
        },
        {
          source: '/dakdekker/',
          destination: '/specialisten/dakdekker/',
          permanent: true,
        },
        {
          source: '/kosten-informatie-tegelzetter/',
          destination: '/specialisten/tegelzetter/kosten/',
          permanent: true,
        },
        {
          source: '/kosten-informatie-metselaar/',
          destination: '/specialisten/metselaar/kosten/',
          permanent: true,
        },
        {
          source: '/kosten-informatie-stratenmaker/',
          destination: '/specialisten/stratenmaker/kosten/',
          permanent: true,
        },
        {
          source: '/informatie-tegelzetter/',
          destination: '/specialisten/tegelzetter/',
          permanent: true,
        },
        {
          source: '/riolering/',
          destination: '/specialisten/riolering/',
          permanent: true,
        },
         {
          source: '/glaszetter/',
          destination: '/specialisten/glaszetter/',
          permanent: true,
        },
         {
          source: '/informatie-vloer/',
          destination: '/specialisten/vloer/',
          permanent: true,
        },
         {
          source: '/informatie-klusbedrijf/',
          destination: '/specialisten/klusbedrijf/',
          permanent: true,
        },
         {
          source: '/plinten-zetter/',
          destination: '/specialisten/plinten-zetter/',
          permanent: true,
        },
         {
          source: '/kosten-informatie-keukenmonteur-specialist/',
          destination: '/specialisten/keukenmonteur/kosten/',
          permanent: true,
        },
         {
          source: '/kosten-informatie-behang-specialist/',
          destination: '/specialisten/behanger/kosten/',
          permanent: true,
        },
         {
          source: '/informatie-badkamer/',
          destination: '/specialisten/badkamer/',
          permanent: true,
        },
         {
          source: '/kosten-informatie-badkamer/',
          destination: '/specialisten/badkamer/kosten/',
          permanent: true,
        },
         {
          source: '/wat-is-en-wat-doet-een-architect/',
          destination: '/specialisten/architect/',
          permanent: true,
        },
         {
          source: '/stoffeerder-kosten/',
          destination: '/specialisten/stoffeerder/kosten/',
          permanent: true,
        },
         {
          source: '/informatie-metselaar/',
          destination: '/specialisten/metselaar/',
          permanent: true,
        },
         {
          source: '/wat-is-en-wat-doet-een-dak-specialist/',
          destination: '/specialisten/dakdekker/',
          permanent: true,
        },
       {
          source: '/kosten-informatie-elektricien/',
          destination: '/specialisten/elektricien/kosten/',
          permanent: true,
        },
     {
          source: '/isolatie/',
          destination: '/specialisten/isolatie/',
          permanent: true,
        },
     {
          source: '/wat-is-en-wat-doet-een-tegelzetter-specialist/',
          destination: '/specialisten/tegelzetter/',
          permanent: true,
        },
     {
          source: '/kosten-informatie-behang/',
          destination: '/specialisten/behanger/kosten/',
          permanent: true,
        },
     {
          source: '/stukadoor/',
          destination: '/specialisten/stukadoor/',
          permanent: true,
        },
     {
          source: '/kosten-informatie-isolatie-specialist/',
          destination: '/specialisten/isolatie/kosten/',
          permanent: true,
        },
     {
          source: '/kosten-informatie-stukadoor/',
          destination: '/specialisten/stukadoor/kosten/',
          permanent: true,
        },
     {
          source: '/kosten-informatie-architect/',
          destination: '/specialisten/architect/kosten/',
          permanent: true,
        },
     {
          source: '/kosten-informatie-gevel-specialist/',
          destination: '/specialisten/gevel/kosten/',
          permanent: true,
        },
     {
          source: '/informatie-gevel/',
          destination: '/specialisten/gevel/',
          permanent: true,
        },
     {
          source: '/informatie-hovenier/',
          destination: '/specialisten/hovenier/',
          permanent: true,
        },
     {
          source: '/informatie-klusbedrijf/',
          destination: '/specialisten/klusbedrijf/',
          permanent: true,
        },
     {
          source: '/haard-schoorsteen/',
          destination: '/specialisten/haard-schoorsteen/',
          permanent: true,
        },
     {
          source: '/informatie-badkamer/',
          destination: '/specialisten/badkamer/',
          permanent: true,
        },
   {
          source: '/informatie-architect/',
          destination: '/specialisten/architect/',
          permanent: true,
        },
     {
          source: '/informatie-metselaar/',
          destination: '/specialisten/metselaar/',
          permanent: true,
        },
         {
          source: '/informatie-timmerman/',
          destination: '/specialisten/timmerman/',
          permanent: true,
        },
         {
          source: '/informatie-isolatie/',
          destination: '/specialisten/isolatie/',
          permanent: true,
        },
         {
          source: '/informatie-schilder/',
          destination: '/specialisten/schilder/',
          permanent: true,
        },
         {
          source: '/informatie-dakdekker/',
          destination: '/specialisten/dakdekker/',
          permanent: true,
        },
         {
          source: '/installatie/',
          destination: '/specialisten/installatie/',
          permanent: true,
        },
         {
          source: '/klusbedrijf/',
          destination: '/specialisten/klusbedrijf/',
          permanent: true,
        },
         {
          source: '/kosten-informatie-dak/',
          destination: '/specialisten/dakdekker/kosten/',
          permanent: true,
        },
         {
          source: '/kosten-informatie-schilder-specialist/',
          destination: '/specialisten/schilder/kosten/',
          permanent: true,
        },
         {
          source: '/kosten-informatie-klusbedrijf/',
          destination: '/specialisten/klusbedrijf/kosten/',
          permanent: true,
        },
         {
          source: '/wat-is-en-wat-doet-een-kozijnen-specialist/',
          destination: '/specialisten/kozijnen/',
          permanent: true,
        },
         {
          source: '/wat-is-en-wat-doet-een-installatie-specialist/',
          destination: '/specialisten/installatie/',
          permanent: true,
        },
         {
          source: '/wat-is-en-wat-doet-een-stukadoor-specialist/',
          destination: '/specialisten/stukadoor/',
          permanent: true,
        },
         {
          source: '/wat-is-en-wat-doet-een-isolatie-specialist/',
          destination: '/specialisten/isolatie/',
          permanent: true,
        },
         {
          source: '/kosten-informatie-stratenmaker-specialist/',
          destination: '/specialisten/stratenmaker/kosten/',
          permanent: true,
        },
         {
          source: '/wat-is-en-wat-doet-een-witgoed-specialist/',
          destination: '/specialisten/witgoed/',
          permanent: true,
        },
         {
          source: '/wat-is-en-wat-doet-een-keukenmonteur-specialist/',
          destination: '/specialisten/keukenmonteur/',
          permanent: true,
        },
         {
          source: '/wat-is-en-wat-doet-een-schoonmaak-specialist/',
          destination: '/specialisten/schoonmaak/',
          permanent: true,
        },
         {
          source: '/wat-is-en-wat-doet-een-gevel-specialist/',
          destination: '/specialisten/gevel/',
          permanent: true,
        },
         {
          source: '/kosten-informatie-stukadoor-specialist/',
          destination: '/specialisten/stukadoor/kosten/',
          permanent: true,
        },
         {
          source: '/wat-is-en-wat-doet-een-metselaar-specialist/',
          destination: '/specialisten/metselaar/',
          permanent: true,
        },
         {
          source: '/wat-is-en-wat-doet-een-schilder-specialist/',
          destination: '/specialisten/schilder/',
          permanent: true,
        },
         {
          source: '/kosten-informatie-kozijnen-specialist/',
          destination: '/specialisten/kozijnen/kosten/',
          permanent: true,
        },
         {
          source: '/kosten-informatie-installatie-specialist/',
          destination: '/specialisten/installatie/kosten/',
          permanent: true,
        },
         {
          source: '/kosten-informatie-elektricien-specialist/',
          destination: '/specialisten/elektricien/kosten/',
          permanent: true,
        },
         {
          source: '/wat-is-en-wat-doet-een-vloer-specialist/',
          destination: '/specialisten/vloer/',
          permanent: true,
        },
         {
          source: '/kosten-informatie-metselaar-specialist/',
          destination: '/specialisten/metselaar/kosten/',
          permanent: true,
        },
         {
          source: '/kosten-informatie-badkamer-specialist/',
          destination: '/specialisten/badkamer/kosten/',
          permanent: true,
        },
         {
          source: '/kosten-informatie-verhuis-specialist/',
          destination: '/specialisten/verhuis/kosten/',
          permanent: true,
        },
         {
          source: '/kosten-informatie-sloop-specialist/',
          destination: '/specialisten/sloop/kosten/',
          permanent: true,
        },
         {
          source: '/kosten-informatie-dak-specialist/',
          destination: '/specialisten/dakdekker/kosten/',
          permanent: true,
        },
         {
          source: '/wat-is-en-wat-doet-een-klusbedrijf/',
          destination: '/specialisten/klusbedrijf/',
          permanent: true,
        },
         {
          source: '/wat-is-en-wat-doet-een-aannemer/',
          destination: '/specialisten/aannemer/',
          permanent: true,
        },
         {
          source: '/beton-of-cement-dekvloer/',
          destination: '/werkzaamheden/beton-of-cement-dekvloer/',
          permanent: true,
        },
         {
          source: '/binnen-schilderwerk/',
          destination: '/werkzaamheden/binnen-schilderwerk/',
          permanent: true,
        },
         {
          source: '/informatie-glaszetter/',
          destination: '/specialisten/glaszetter/',
          permanent: true,
        },
         {
          source: '/informatie-kozijnen/',
          destination: '/specialisten/kozijnen/',
          permanent: true,
        },
         {
          source: '/informatie-riolering/',
          destination: '/specialisten/riolering/',
          permanent: true,
        },
         {
          source: '/airco-kosten/',
          destination: '/specialisten/airco/kosten/',
          permanent: true,
        },
         {
          source: '/informatie-keukenmonteur/',
          destination: '/specialisten/keukenmonteur/',
          permanent: true,
        },
         {
          source: '/informatie-haard-schoorsteen/',
          destination: '/specialisten/haard-schoorsteen/',
          permanent: true,
        },
         {
          source: '/domotica/',
          destination: '/specialisten/domotica/',
          permanent: true,
        },
         {
          source: '/airco/',
          destination: '/specialisten/airco/',
          permanent: true,
        },
         {
          source: '/stoffeerder/',
          destination: '/specialisten/stoffeerder/',
          permanent: true,
        },
         {
          source: '/informatie-installatie/',
          destination: '/specialisten/installatie/',
          permanent: true,
        },
         {
          source: '/informatie-elektricien/',
          destination: '/specialisten/elektricien/',
          permanent: true,
        },
         {
          source: '/kosten-informatie-sloop/',
          destination: '/specialisten/sloop/kosten/',
          permanent: true,
        },
         {
          source: '/kosten-informatie-hovenier/',
          destination: '/specialisten/hovenier/kosten/',
          permanent: true,
        },
         {
          source: '/kosten-informatie-glaszetter/',
          destination: '/specialisten/glaszetter/kosten/',
          permanent: true,
        },
         {
          source: '/elektricien/',
          destination: '/specialisten/elektricien/',
          permanent: true,
        },
        {
          source: '/schilder/',
          destination: '/specialisten/schilder/',
          permanent: true,
        },
         {
          source: '/witgoed/',
          destination: '/specialisten/witgoed/',
          permanent: true,
        },
         {
          source: '/vloer/',
          destination: '/specialisten/vloer/',
          permanent: true,
        },
         {
          source: '/schoonmaak/',
          destination: '/specialisten/schoonmaak/',
          permanent: true,
        },
         {
          source: '/timmerman/',
          destination: '/specialisten/timmerman/',
          permanent: true,
        },
         {
          source: '/hovenier/',
          destination: '/specialisten/hovenier/',
          permanent: true,
        },
         {
          source: '/aannemer/',
          destination: '/specialisten/aannemer/',
          permanent: true,
        },
         {
          source: '/kozijnen/',
          destination: '/specialisten/kozijnen/',
          permanent: true,
        },
         {
          source: '/kosten-informatie-vloer/',
          destination: '/specialisten/vloer/kosten/',
          permanent: true,
        },
         {
          source: '/behanger/',
          destination: '/specialisten/behanger/',
          permanent: true,
        },
         {
          source: '/stratenmaker/',
          destination: '/specialisten/stratenmaker/',
          permanent: true,
        },
        {
          source: '/verhuis/',
          destination: '/specialisten/verhuis/',
          permanent: true,
        },
         {
          source: '/metselaar/',
          destination: '/specialisten/metselaar/',
          permanent: true,
        },
        {
          source: '/kosten-informatie-gevel/',
          destination: '/specialisten/gevel/kosten/',
          permanent: true,
        },
         {
          source: '/dakdekker/',
          destination: '/specialisten/dakdekker/',
          permanent: true,
        },
        {
          source: '/kosten-informatie-kozijnen/',
          destination: '/specialisten/kozijnen/kosten/',
          permanent: true,
        },
         {
          source: '/kosten-informatie-verhuis/',
          destination: '/specialisten/verhuis/kosten/',
          permanent: true,
        },
        {
          source: '/kosten-informatie-schilder/',
          destination: '/specialisten/schilder/kosten/',
          permanent: true,
        },
         {
          source: '/gevel/',
          destination: '/specialisten/gevel/',
          permanent: true,
        },
        {
          source: '/kosten-informatie-glaszetter-specialist/',
          destination: '/specialisten/glaszetter/kosten/',
          permanent: true,
        },
         {
          source: '/dak/',
          destination: '/specialisten/dakdekker/',
          permanent: true,
        },
        {
          source: '/kosten-informatie-huis-automatisering-specialist/',
          destination: '/specialisten/domotica/kosten/',
          permanent: true,
        },
         {
          source: '/kosten-informatie-witgoed-reparateur-specialist/',
          destination: '/specialisten/witgoed/kosten/',
          permanent: true,
        },
        {
          source: '/wat-is-en-wat-doet-een-elektricien-specialist/',
          destination: '/specialisten/elektricien/',
          permanent: true,
        },
         {
          source: '/wat-is-en-wat-doet-een-glas-zet-specialist/',
          destination: '/specialisten/glaszetter/',
          permanent: true,
        },
        {
          source: '/kosten-informatie-schoonmaak-specialist/',
          destination: '/specialisten/schoonmaak/kosten/',
          permanent: true,
        },
         {
          source: '/wat-is-en-wat-doet-een-stratenmaker-specialist/',
          destination: '/specialisten/stratenmaker/',
          permanent: true,
        },
        {
          source: '/wat-is-en-wat-doet-een-verhuis-specialist/',
          destination: '/specialisten/verhuis/',
          permanent: true,
        },
         {
          source: '/kosten-informatie-timmerman-specialist/',
          destination: '/specialisten/timmerman/kosten/',
          permanent: true,
        },
        {
          source: '/kosten-informatie-hovenier-specialist/',
          destination: '/specialisten/hovenier/kosten/',
          permanent: true,
        },
         {
          source: '/kosten-informatie-vloer-specialist/',
          destination: '/specialisten/vloer/kosten/',
          permanent: true,
        },
        {
          source: '/instagram/',
          destination: '/',
          permanent: true,
        },
        {
          source: '/twitter/',
          destination: '/',
          permanent: true,
        },
        {
          source: '/youtube/',
          destination: '/',
          permanent: true,
        },
        {
          source: '/categorie/socials/',
          destination: '/',
          permanent: true,
        },
          {
          source: '/categorie/de-specialismes-van-verzekerd-te-werk/',
          destination: '/specialisten/',
          permanent: true,
        },
         {
          source: '/categorie/privacy-verklaring/',
          destination: '/privacy-verklaring/',
          permanent: true,
        },
        {
          source: '/voorwaarden-specialist/',
          destination: '/algemene-voorwaarden-specialist/',
          permanent: true,
        },
        {
          source: '/categorie/voorwaarden-opdrachtgever/',
          destination: '/algemene-voorwaarden-opdrachtgever/',
          permanent: true,
        },
        {
          source: '/categorie/specialismes/',
          destination: '/specialisten/',
          permanent: true,
        },
         {
          source: '/categorie/Algemeen/',
          destination: '/categorieen/algemeen/',
          permanent: true,
        },
        {
          source: '/categorie/Service/',
          destination: '/categorieen/algemeen/',
          permanent: true,
        },
      ]
    },
}