"use client";

import Link from "next/link";
import { useState } from "react";
import { FaPlus, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function FillerMasterAfrica() {
  const galleryImages = [
    "/assets/fillermasterbatch1.webp",
    "/assets/fillermasterbatch2.webp",
    "/assets/fillermasterbatch3.webp",
    "/assets/fillermasterbatch4.webp",
    "/assets/fillermasterbatch5.webp",
    "/assets/fillermasterbatch6.webp",
    "/assets/fillermasterbatch7.webp",
    "/assets/fillermasterbatch8.webp",
    "/assets/fillermasterbatch9.webp",
    "/assets/fillermasterbatch10.webp",
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  };

  const choosingFactors = [
    "Required production capacity",
    "Type of polymer being processed",
    "Percentage and type of filler",
    "Calcium carbonate or other mineral filler specifications",
    "Required filler dispersion",
    "Desired pellet size",
    "Raw-material feeding requirements",
    "Downstream processing equipment",
    "Available production space",
    "Power and operating requirements",
  ];

  const faqs = [
    {
      question: "What is a Filler Masterbatch Machine?",
      answer:
        "A Filler Masterbatch Machine is used to compound polymer materials with mineral fillers such as calcium carbonate and convert the resulting compound into masterbatch pellets for use in plastic manufacturing.",
    },
    {
      question: "What is filler masterbatch used for?",
      answer:
        "Filler masterbatch is used in various plastic manufacturing applications, including films, bags, pipes, sheets and selected injection-moulded products, depending on the formulation and product requirements.",
    },
    {
      question: "Which filler is commonly used in filler masterbatch?",
      answer:
        "CCalcium carbonate is one of the most commonly used mineral fillers in filler masterbatch production. The appropriate filler and formulation depend on the intended application and required product properties.",
    },
    {
      question: "Where can I buy a Filler Masterbatch Machine in Africa?",
      answer:
        "African plastic manufacturers can source filler masterbatch production machinery from international manufacturers and exporters such as Xtreme Machines. The appropriate machine should be selected according to the required capacity, formulation and application.",
    },
    {
      question: "How do I choose the right filler masterbatch machine?",
      answer:
        "Consider production capacity, polymer type, filler percentage, filler characteristics, required dispersion, pellet size and the overall production process when selecting a machine.",
    },
    {
      question: "Can filler masterbatch be used with recycled plastic?",
      answer:
        "Yes, filler masterbatch can be incorporated into certain recycled-plastic formulations, depending on the polymer, quality of the recycled material and final product requirements. Testing the formulation is recommended before full-scale production.",
    },
  ];

  return (
    <>
      <main className="bg-white text-[#333]">
        {/* =====================================================
            TOP BANNER
        ====================================================== */}
        <section className="bg-[#ff5c0a]">
          <div className="mx-auto flex min-h-[350px] max-w-[1200px] items-center justify-center px-5 py-20 text-center">
            <h1 className="text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
              Filler Masterbatch Machine in Africa
            </h1>
          </div>
        </section>

        {/* =====================================================
            GALLERY
        ====================================================== */}
        <section className="bg-[#f5f5f5] py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="mb-10 text-center">
              <span className="mb-3 block text-sm font-bold uppercase tracking-[3px] text-[#ff5c0a]">
                Xtreme Machines
              </span>

              <h2 className="text-3xl font-bold text-[#222] sm:text-4xl">
                Filler Masterbatch Machine
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="group relative cursor-pointer overflow-hidden bg-white"
                  onClick={() => openImage(index)}
                >
                  <img
                    src={img}
                    alt={`Filler Masterbatch Machine ${index + 1}`}
                    className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition duration-500 group-hover:opacity-100">
                    <FaPlus className="text-3xl text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            IMAGE POPUP
        ====================================================== */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90">
            {/* CLOSE */}
            <button
              type="button"
              onClick={closeImage}
              className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center text-2xl text-white transition hover:text-[#ff5c0a]"
              aria-label="Close gallery"
            >
              <FaTimes />
            </button>

            {/* PREVIOUS */}
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-4 z-50 flex h-12 w-12 items-center justify-center text-2xl text-white transition hover:text-[#ff5c0a] sm:left-8"
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>

            {/* IMAGE */}
            <img
              src={galleryImages[selectedImage]}
              alt="Filler Masterbatch Machine"
              className="max-h-[85vh] max-w-[88%] object-contain"
            />

            {/* NEXT */}
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-4 z-50 flex h-12 w-12 items-center justify-center text-2xl text-white transition hover:text-[#ff5c0a] sm:right-8"
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>
          </div>
        )}

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}
        <section className="bg-white px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-[1150px]">
            {/* BUY FILLER MASTERBATCH */}
            <div className="mb-16">
              <h2 className="mb-7 border-l-[5px] border-[#ff5c0a] pl-5 text-3xl font-bold leading-tight text-[#222] sm:text-4xl">
                Buy Filler Masterbatch Machine in Africa
              </h2>

              <div className="space-y-5 text-[17px] leading-8 text-[#5a5a5a]">
                <p>
                  Xtreme Machines offers reliable{" "}
                  <Link
                    href="/filler-masterbatch-machine-exporter"
                    className="font-bold text-red-700"
                  >
                    Filler Masterbatch Machines in Africa
                  </Link>{" "}
                  for manufacturers looking to produce consistent and
                  cost-effective plastic filler masterbatch. Designed for
                  industrial plastic processing applications, these machines
                  help manufacturers efficiently combine calcium carbonate and
                  other fillers with polymer materials to produce masterbatch
                  suitable for different plastic products.
                </p>

                <p>
                  Filler masterbatch is widely used in plastic manufacturing
                  because it can help improve processing efficiency, control
                  material costs, and provide specific properties to the final
                  plastic product. A properly designed production system is
                  therefore important for achieving consistent dispersion,
                  stable output, and reliable masterbatch quality.
                </p>

                <p>
                  As an experienced manufacturer and exporter of plastic
                  processing machinery from India, Xtreme Machines provides
                  machinery solutions for businesses across international
                  markets, including African countries.
                </p>
              </div>
            </div>

            {/* FILLER MASTERBATCH AFRICA */}
            <div className="mb-16">
              <h3 className="mb-7 text-3xl font-bold leading-tight text-[#222] sm:text-4xl">
                Filler Masterbatch Machine Africa for Plastic Manufacturing
              </h3>

              <div className="space-y-5 text-[17px] leading-8 text-[#5a5a5a]">
                <p>
                  A{" "}
                  <Link href="/" className="text-red-700 font-bold">
                    Filler Masterbatch Machine in Africa
                  </Link>{" "}
                  is used to produce concentrated filler compounds that can
                  later be blended with virgin or recycled polymers during
                  plastic production.
                </p>

                <p>
                  Calcium carbonate is one of the commonly used fillers in
                  masterbatch production. Depending on the formulation, filler
                  masterbatch can be used in applications such as plastic bags,
                  films, pipes, sheets, injection-molded products, and other
                  plastic articles.
                </p>

                <p>
                  The production process generally involves accurately feeding
                  the raw materials, mixing and compounding them under
                  controlled conditions, and converting the compound into
                  pellets for convenient handling and further processing.
                </p>
              </div>
            </div>

            {/* WHY USE */}
            <div className="mb-16">
              <h4 className="mb-7 text-3xl font-bold leading-tight text-[#222] sm:text-4xl">
                Why Use a Filler Masterbatch Machine?
              </h4>

              <p className="mb-9 text-[17px] leading-8 text-[#5a5a5a]">
                For plastic manufacturers, consistent material preparation is
                important for maintaining product quality and production
                efficiency. A suitable filler masterbatch production machine can
                provide several operational benefits.
              </p>

              <div className="space-y-8">
                <div>
                  <h5 className="mb-3 text-2xl font-bold text-[#222]">
                    Consistent Filler Dispersion
                  </h5>

                  <p className="text-[17px] leading-8 text-[#5a5a5a]">
                    Proper mixing and compounding help distribute filler
                    material throughout the polymer matrix. Consistent
                    dispersion is important for maintaining uniform properties
                    in the finished masterbatch.
                  </p>
                </div>

                <div>
                  <h5 className="mb-3 text-2xl font-bold text-[#222]">
                    Efficient Material Processing
                  </h5>

                  <p className="text-[17px] leading-8 text-[#5a5a5a]">
                    An industrial compounding system can streamline the process
                    of feeding, mixing, melting, and pelletizing materials,
                    helping manufacturers maintain a continuous production
                    workflow.
                  </p>
                </div>

                <div>
                  <h5 className="mb-3 text-2xl font-bold text-[#222]">
                    Cost-Effective Plastic Production
                  </h5>

                  <p className="text-[17px] leading-8 text-[#5a5a5a]">
                    Filler masterbatch can allow manufacturers to incorporate
                    mineral fillers into plastic formulations according to their
                    product requirements. This can help optimise raw-material
                    usage and production economics.
                  </p>
                </div>

                <div>
                  <h5 className="mb-3 text-2xl font-bold text-[#222]">
                    Suitable for Different Applications
                  </h5>

                  <p className="text-[17px] leading-8 text-[#5a5a5a]">
                    Depending on the formulation and processing requirements,
                    filler masterbatch can be used across multiple plastic
                    manufacturing applications, including films, bags, pipes,
                    sheets and moulded products.
                  </p>
                </div>
              </div>
            </div>

            {/* APPLICATIONS */}
            <div className="mb-16">
              <h4 className="mb-7 text-3xl font-bold leading-tight text-[#222] sm:text-4xl">
                Applications of Filler Masterbatch in Africa
              </h4>

              <p className="mb-9 text-[17px] leading-8 text-[#5a5a5a]">
                Plastic manufacturing continues to serve a wide range of
                industries across African markets. Filler masterbatch can be
                incorporated into different plastic production processes
                depending on the required product characteristics.
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="border-t-4 border-[#ff5c0a] bg-[#f7f7f7] p-6">
                  <h5 className="mb-3 text-2xl font-bold text-[#222]">
                    Plastic Film &amp; Bags
                  </h5>

                  <p className="text-[17px] leading-8 text-[#5a5a5a]">
                    Filler masterbatch can be used in the production of certain
                    plastic films and bags where controlled filler addition is
                    required.
                  </p>
                </div>

                <div className="border-t-4 border-[#ff5c0a] bg-[#f7f7f7] p-6">
                  <h5 className="mb-3 text-2xl font-bold text-[#222]">
                    Plastic Pipes
                  </h5>

                  <p className="text-[17px] leading-8 text-[#5a5a5a]">
                    Manufacturers can use suitable filler formulations in pipe
                    production according to their material specifications and
                    end-product requirements.
                  </p>
                </div>

                <div className="border-t-4 border-[#ff5c0a] bg-[#f7f7f7] p-6">
                  <h5 className="mb-3 text-2xl font-bold text-[#222]">
                    Plastic Sheets
                  </h5>

                  <p className="text-[17px] leading-8 text-[#5a5a5a]">
                    Filler masterbatch can be used in selected sheet
                    manufacturing applications to achieve the required material
                    formulation.
                  </p>
                </div>

                <div className="border-t-4 border-[#ff5c0a] bg-[#f7f7f7] p-6">
                  <h5 className="mb-3 text-2xl font-bold text-[#222]">
                    Injection Moulding
                  </h5>

                  <p className="text-[17px] leading-8 text-[#5a5a5a]">
                    Depending on the polymer and formulation, filler masterbatch
                    can be used in injection-molding applications for
                    manufacturing different plastic components and products.
                  </p>
                </div>

                <div className="border-t-4 border-[#ff5c0a] bg-[#f7f7f7] p-6 sm:col-span-2">
                  <h5 className="mb-3 text-2xl font-bold text-[#222]">
                    General Plastic Products
                  </h5>

                  <p className="text-[17px] leading-8 text-[#5a5a5a]">
                    Filler masterbatch can also be incorporated into various
                    plastic products where mineral filler addition is suitable
                    for the intended application.
                  </p>
                </div>
              </div>
            </div>

            {/* MANUFACTURER & EXPORTER */}
            <div className="mb-16">
              <h4 className="mb-7 text-3xl font-bold leading-tight text-[#222] sm:text-4xl">
                Filler Masterbatch Machine Manufacturer &amp; Exporter
              </h4>

              <div className="space-y-5 text-[17px] leading-8 text-[#5a5a5a]">
                <p>
                  Xtreme Machines is an India-based manufacturer and exporter of
                  plastic and rubber processing machinery. The company provides
                  industrial machinery solutions for customers in international
                  markets.
                </p>

                <p>
                  For African manufacturers, sourcing machinery directly from an
                  experienced exporter can make it easier to discuss production
                  capacity, raw-material formulation, machine configuration and
                  project requirements before purchasing.
                </p>

                <p>
                  Xtreme Machines can assist businesses in selecting an
                  appropriate{" "}
                  <strong>Filler Masterbatch Machine in Africa</strong>{" "}
                  according to their intended application and production
                  requirements.
                </p>
              </div>
            </div>

            {/* HOW TO CHOOSE */}
            <div className="mb-16">
              <h4 className="mb-7 text-3xl font-bold leading-tight text-[#222] sm:text-4xl">
                How to Choose a Filler Masterbatch Machine
              </h4>

              <div className="space-y-5 text-[17px] leading-8 text-[#5a5a5a]">
                <p>
                  Selecting the right machine depends on more than the required
                  production capacity. Manufacturers should consider the
                  complete formulation and production process before choosing
                  equipment.
                </p>

                <p className="font-semibold text-[#333]">
                  Important factors include:
                </p>
              </div>

              <ul className="mt-5 space-y-3">
                {choosingFactors.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[17px] leading-7 text-[#5a5a5a]"
                  >
                    <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff5c0a]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-7 text-[17px] leading-8 text-[#5a5a5a]">
                Discussing these factors with the machine manufacturer can help
                ensure that the selected configuration matches the intended
                production process.
              </p>
            </div>

            {/* CTA CONTENT */}
            <div className="mb-16 bg-[#f5f5f5] px-6 py-10 sm:px-10 sm:py-12">
              <h5 className="mb-6 text-3xl font-bold leading-tight text-[#222] sm:text-4xl">
                Get a Filler Masterbatch Machine for Your African Manufacturing
                Business
              </h5>

              <div className="space-y-5 text-[17px] leading-8 text-[#5a5a5a]">
                <p>
                  Whether you are setting up a new masterbatch production line
                  or expanding an existing plastic manufacturing operation,
                  choosing suitable compounding equipment is an important
                  investment.
                </p>

                <p>
                  Xtreme Machines provides industrial machinery solutions for
                  businesses looking for dependable plastic processing
                  equipment. Its technical team can evaluate your material
                  formulation, production capacity and application requirements
                  to help identify a suitable machine configuration.
                </p>

                <p>
                  If you are looking for a{" "}
                  <Link
                    href="/who-is-the-best-filler-machine-manufacturer-in-india-for-industrial-packaging-needs"
                    className="text-red-700 font-bold"
                  >
                    Filler Masterbatch Machine in Africa
                  </Link>
                  , contact Xtreme Machines to discuss your production
                  requirements and machinery options.
                </p>
              </div>
            </div>

            {/* =================================================
                FAQ
            ================================================== */}
            <div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-[#222] sm:text-4xl">
                Frequently Asked Questions
              </h2>

              <div className="border-y border-black/10">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div
                      key={faq.question}
                      className="border-b border-black/10 last:border-b-0"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="flex w-full items-center justify-between gap-5 py-5 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="text-[17px] font-bold leading-7 text-[#222]">
                          {faq.question}
                        </span>

                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff5c0a] text-white transition-transform duration-300 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        >
                          <FaPlus className="text-sm" />
                        </span>
                      </button>

                      <div
                        className={`grid transition-all duration-300 ${
                          isOpen
                            ? "grid-rows-[1fr] pb-6 opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-4xl pr-8 text-[17px] leading-8 text-[#5a5a5a]">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default FillerMasterAfrica;
