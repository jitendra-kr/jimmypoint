import { GA_TRACKING_ID } from "../../../../lib/gtag";

export function GoogleAnalytics() {
  return (
    <>
      <script
        id="googletagmanager"
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
    </>
  );
}
