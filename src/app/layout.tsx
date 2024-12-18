import { AntdRegistry } from "@ant-design/nextjs-registry";
import GoogleAnalytics from "@ft/components/Analytics/GoogleAnalytics/GoogleAnalytics";
import MainHeader from "@ft/components/Header";
import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";
import { ReactNode } from "react";
import StoreProvider from "./StoreProvider";

const Feedback = dynamic(() => import("@ft/components/Feedback/Feedback"));
const MainFooter = dynamic(() => import("@ft/components/Footer"));
const LazyBootstrapComponentCss = dynamic(
  () => import("./LazyBootstrapComponentCss"),
);

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <LazyBootstrapComponentCss />
      <StoreProvider>
        <AntdRegistry>
          <body>
            <MainHeader />
            <div className="row" style={{ minHeight: "100vh" }}>
              <div className="col-lg-1 col-md-2 col-sm-12 col-12"></div>
              <div className="col-lg-10 col-md-8 col-sm-12 col-12">
                <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                  {children}
                </div>
              </div>
              <div className="col-lg-1 col-md-2 col-sm-12 col-12"></div>
              <Feedback />
            </div>
            <MainFooter />
          </body>
        </AntdRegistry>
      </StoreProvider>
      <GoogleAnalytics />
      {/* <MonetagAds /> */}
      <Analytics mode={"production"} />
    </html>
  );
}
