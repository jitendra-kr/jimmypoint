import Document, { Html, Head, Main, NextScript } from 'next/document'

const GA_TRACKING_ID = 'G-R8F91VBWJT'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                        data-ad-client="ca-pub-4375413214168925"
                        async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js">
                        </script>
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