import { useLayoutEffect } from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { hotjar } from 'react-hotjar'
import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  render() {
    useLayoutEffect(()=> {
      hotjar.initialize(process.env.NEXT_PUBLIC_HOTJAR_ID, process.env.NEXT_PUBLIC_HOTJAR_SV);
    }, []);
    
    return (
      <Html lang="nl">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"/>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />       
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}