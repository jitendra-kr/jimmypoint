import Script from "next/script";

export function MonetagAds() {
  return (
    <>
      {/* Start  in-page-push-banner*/}
      <Script
        id="moneyTag-in-page-push-banner-anti-adblock"
        src={`../../../monetagCdn/in-page-push-banner-anti-adblock/anti-adblock.js`}
      />
      <Script
        id="moneyTag-in-page-push-banner-anti-adblock-main"
        src={`../../../monetagCdn/in-page-push-banner-anti-adblock/main.js`}
      />
      {/* End  in-page-push-banner*/}
    </>
  );
}
