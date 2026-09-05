import "./globals.css";
import Script from "next/script";
import Navbar from "@/src/component/Navbar";
import Footer from "@/src/component/Footer";
import ScrollToTop from "@/src/component/ScrollToTop";
import WhatsAppButton from "@/src/component/WhatsAppButton";
import LeadPopup from "@/src/component/LeadPopup";

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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MWLFWVSM');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWLFWVSM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Navbar />
        <ScrollToTop />
        <main className="pt-29.5 min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <LeadPopup />

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
