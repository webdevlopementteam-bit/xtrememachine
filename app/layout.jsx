import "./globals.css";
import Script from "next/script";
import Navbar from "@/src/component/Navbar";
import Footer from "@/src/component/Footer";
import ScrollToTop from "@/src/component/ScrollToTop";

export const metadata = {
  metadataBase: new URL("https://www.xtrememachines.in"),
  title:
    "Xtreme Machines | Filler Machine, Dispersion Kneader & Compounding Line Manufacturer",
  description:
    "Xtreme Machines manufactures and exports filler machines, dispersion kneaders, single shaft shredders, pelletizing and compounding lines.",
  other: {
    "google-site-verification": "zC2E99CYphy8TA_8ykz76X_Edqa_rIaD_nbcn6BUJoo",
  },
  icons: {
    icon: "/favicon_icon.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ScrollToTop />
        <main className="pt-29.5 min-h-screen">{children}</main>
        <Footer />

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V7KK82VWW2"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-V7KK82VWW2');
          `}
        </Script>
      </body>
    </html>
  );
}
