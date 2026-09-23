import FillerMasterUae from "./FillerMasterUae";

export const metadata = {
  title: "Buy Filler Masterbatch Machine in UAE | Xtreme Machines Exporter",

  description:
    "Buy high-performance Filler Masterbatch Machines in the UAE from Xtreme Machines— a trusted Indian manufacturer & exporter of pelletizing lines for the plastic compounding industry.",

  keywords: [
    "Filler Masterbatch Machine in UAE",
    "Filler masterbatch machine supplier UAE",
    "Filler masterbatch machine manufacturer Dubai",
    "Plastic filler machine exporter UAE",
    "Masterbatch pelletizing line UAE",
  ],

  alternates: {
    canonical: "https://www.xtrememachines.in/filler-masterbatch-machine-uae/",
  },
};

const faqs = [
  {
    question: "What is the price of a filler masterbatch machine in UAE?",
    answer:
      "Prices vary based on capacity, screw configuration (single/twin), and automation level. Contact Xtreme Machines for a customized quotation based on your production requirements and UAE delivery terms.",
  },
  {
    question: "Which company exports filler masterbatch machines to UAE?",
    answer:
      "Xtreme Machines, an ISO 9001:2000 certified manufacturer from New Delhi, India, exports filler masterbatch machines to UAE with complete installation and technical support.",
  },
  {
    question: "What filler percentage can this machine handle?",
    answer:
      "Xtreme Machines' filler masterbatch machines support filler loading of up to 80% CaCO3 or other mineral fillers, depending on machine configuration.",
  },
  {
    question: "How long does delivery take from India to UAE?",
    answer:
      "Standard delivery timelines range from 4–8 weeks depending on machine specifications, customization, and sea freight schedules to major UAE ports.",
  },
  {
    question: "Is installation support provided after delivery?",
    answer:
      "Yes, Xtreme Machines provides technical guidance for installation, commissioning, and operator training either remotely or on-site as per requirement.",
  },
  {
    question:
      "What raw materials can be processed in a filler masterbatch machine?",
    answer:
      "The machine processes CaCO3, talc, and other mineral fillers combined with PP, PE, or other carrier resins to produce filler masterbatch granules.",
  },
  {
    question: "Can the machine be customized for small-scale UAE manufacturers?",
    answer:
      "Yes, Xtreme Machines offers machines in multiple capacity ranges, suitable for both small-scale startups and large industrial production units in UAE.",
  },
  {
    question:
      "What is the difference between single-screw and twin-screw filler masterbatch machines?",
    answer:
      "Twin-screw machines offer better mixing efficiency and higher filler loading capacity, while single-screw machines are more economical for standard filler percentages.",
  },
  {
    question: "Do you provide spare parts support for machines operating in UAE?",
    answer:
      "Yes, genuine spare parts and after-sales technical support are available for all Xtreme Machines equipment exported to UAE.",
  },
  {
    question: "What documentation is required to import this machine into UAE?",
    answer:
      "Xtreme Machines assists with commercial invoices, packing lists, certificates of origin, and other export documentation required for smooth UAE customs clearance.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FillerMasterUae faqs={faqs} />
    </>
  );
}
