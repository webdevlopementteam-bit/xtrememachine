import PageContent from "./PageContent";

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.xtrememachines.in/#organization",
      name: "Xtreme Machines",
      url: "https://www.xtrememachines.in/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.xtrememachines.in/wp-content/uploads/2023/09/logo.png",
      },
      image: "https://www.xtrememachines.in/wp-content/uploads/2023/09/logo.png",
      description:
        "Xtreme Machines is a leading manufacturer, exporter and supplier of Rubber & Plastic Processing Machinery including Dispersion Kneaders, Masterbatch Compounding Lines, Single Shaft Shredders and Industrial Processing Equipment.",
      telephone: "+91-9810322070",
      email: "info@xtrememachines.in",
      foundingDate: "1982",
      founder: {
        "@type": "Person",
        name: "Kulwant Singh (Monty Singh)",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Plot No.72/6, Khasra No.72/9/2/1, Metro Pillar #485, Swarn Park, Mundka, Rohtak Road",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        postalCode: "110041",
        addressCountry: "IN",
      },
      sameAs: ["https://share.google/Vdl3KWxiMBdzdlDd0"],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.xtrememachines.in/#localbusiness",
      name: "Xtreme Machines",
      url: "https://www.xtrememachines.in/",
      image: "https://www.xtrememachines.in/wp-content/uploads/2023/09/logo.png",
      telephone: "+91-9810322070",
      email: "info@xtrememachines.in",
      priceRange: "₹₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Plot No.72/6, Khasra No.72/9/2/1, Metro Pillar #485, Swarn Park, Mundka, Rohtak Road",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        postalCode: "110041",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      parentOrganization: {
        "@id": "https://www.xtrememachines.in/#organization",
      },
    },
    {
      "@type": "Manufacturer",
      "@id": "https://www.xtrememachines.in/#manufacturer",
      name: "Xtreme Machines",
      url: "https://www.xtrememachines.in/",
      logo: "https://www.xtrememachines.in/wp-content/uploads/2023/09/logo.png",
      description:
        "Manufacturer and Exporter of Dispersion Kneader Machines, Masterbatch Compounding Lines, Single Shaft Shredders, Die Face Cutters and Plastic Processing Machinery.",
      parentOrganization: {
        "@id": "https://www.xtrememachines.in/#organization",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Plot No.72/6, Khasra No.72/9/2/1, Metro Pillar #485, Swarn Park, Mundka, Rohtak Road",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        postalCode: "110041",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.xtrememachines.in/#website",
      url: "https://www.xtrememachines.in/",
      name: "Xtreme Machines",
      publisher: {
        "@id": "https://www.xtrememachines.in/#organization",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.xtrememachines.in/#webpage",
      url: "https://www.xtrememachines.in/",
      name: "Xtreme Machines | Rubber & Plastic Processing Machinery Manufacturer",
      description:
        "Leading manufacturer of Dispersion Kneaders, Masterbatch Compounding Lines, Single Shaft Shredders and Plastic Processing Machinery in India.",
      isPartOf: {
        "@id": "https://www.xtrememachines.in/#website",
      },
      about: {
        "@id": "https://www.xtrememachines.in/#organization",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://www.xtrememachines.in/wp-content/uploads/2023/09/logo.png",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.xtrememachines.in/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.xtrememachines.in/",
        },
      ],
    },
  ],
};

export const metadata = {
  title: "Masterbatch Compounding Line | Filler Machine Compounding Line",
  description:
    "Eva, Tpr, Pe, Lldpe, Pvc, Pbat, Pla, Hdpe, Zhfr Zero Halogen Cable, Bio Polymer, Corn Starch, Masterbatch, PVC Cable, Filler Machine Compounding Line.",
  keywords:
    "\n  PVC Compounding Line Manufacturer,\n  Corn Starch Compounding Line Manufacturers,\n  Bio Polymer Filler Compounding Machine,\n  EVA Filler Compounding Line Manufacturer,\n  TPR Filler Compounding Line Manufacturer,\n  PE Filler Compounding Line,\n  ZHFR Cable Filler Machine Manufacturer,\n  Zero Halogen Cable Filler Machine,\n  PBAT Filler Machine Manufacturer,\n  PLA Filler Machine\n",
  alternates: {
    canonical: "https://www.xtrememachines.in/",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <PageContent />
    </>
  );
}
