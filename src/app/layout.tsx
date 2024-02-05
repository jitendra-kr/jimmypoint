import { GoogleAnalytics, MainFooter, MainHeader } from "@ft/components";
import { Analytics } from "@vercel/analytics/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import StoreProvider from "./StoreProvider";
import UIRegistry from "./UIRegistry";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <Analytics />
        <UIRegistry>
          <body className={inter.className}>
            <MainHeader />
            <div className="row">
              <div className="col-lg-1 col-md-2 col-sm-12 col-12"></div>

              <div className="col-lg-10 col-md-8 col-sm-12 col-12">
                {children}
              </div>

              <div className="col-lg-1 col-md-2 col-sm-12 col-12"></div>
            </div>
            <MainFooter />
          </body>
        </UIRegistry>
        <GoogleAnalytics />
      </html>
    </StoreProvider>
  );
}
