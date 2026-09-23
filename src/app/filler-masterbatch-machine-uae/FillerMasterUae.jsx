"use client";

import Link from "next/link";
import { useState } from "react";
import { FaPlus, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function FillerMasterUae({ faqs }) {
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

  const features = [
    {
      title: "High Filler Loading Capacity",
      text: "Supports up to 80% CaCO3/mineral filler content for cost-effective masterbatch production",
    },
    {
      title: "Twin-Screw / Single-Screw Configuration",
      text: "Available based on your product requirement and output capacity",
    },
    {
      title: "Energy-Efficient Design",
      text: "Reduces power consumption, ideal for UAE's high-volume industrial operations",
    },
    {
      title: "Precision Temperature Control",
      text: "Multi-zone heating and cooling system for consistent melt quality",
    },
    {
      title: "Robust Build Quality",
      text: "Heavy-duty components designed to withstand continuous, high-temperature operation",
    },
    {
      title: "Customized Output Capacity",
      text: "Machines available from small-scale to large industrial production lines",
    },
    {
      title: "Easy Maintenance",
      text: "Simplified design for quick servicing, minimizing downtime",
    },
    {
      title: "Compliance-Ready",
      text: "Built to meet international quality and safety standards for export markets",
    },
  ];

  const applications = [
    "Packaging film and woven sack manufacturing",
    "PVC pipe and profile production",
    "Injection molding compound preparation",
    "Non-woven fabric and geotextile production",
    "Automotive and construction plastic components",
  ];

  const indiaBenefits = [
    "Competitive pricing compared to European and Chinese alternatives",
    "Customized machine design as per your product and space requirements",
    "Complete documentation support for UAE customs and import clearance",
    "Installation guidance and technical support post-delivery",
    "Genuine spare parts availability for long-term machine performance",
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
              Filler Masterbatch Machine in UAE
            </h1>
          </div>
        </section>

        {/* =====================================================
            GALLERY
        ====================================================== */}
        <section className="bg-[#f5f5f5] py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="group relative cursor-pointer overflow-hidden bg-white"
                  onClick={() => openImage(index)}
                >
                  <img
                    src={img}
                    alt={`Filler Masterbatch Machine in UAE ${index + 1}`}
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
              alt="Filler Masterbatch Machine in UAE"
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
                Buy Filler Masterbatch Machine in UAE
              </h2>

              <div className="space-y-5 text-[17px] leading-8 text-[#5a5a5a]">
                <p>
                  The plastic manufacturing industry across the UAE — from
                  Dubai&apos;s industrial zones to Sharjah&apos;s Hamriyah Free
                  Zone and Abu Dhabi&apos;s KIZAD — is expanding rapidly,
                  driving strong demand for reliable, high-output filler
                  masterbatch machines. As a trusted{" "}
                  <Link
                    href="/filler-masterbatch-machine-exporter/"
                    className="font-bold text-red-700"
                  >
                    exporter of plastic processing machinery
                  </Link>
                  , Xtreme Machines supplies premium-quality filler masterbatch
                  machines to UAE-based manufacturers, helping them produce
                  consistent, high-quality filler masterbatch at competitive
                  production costs.
                </p>
              </div>
            </div>

            {/* WHY UAE MANUFACTURERS CHOOSE */}
            <div className="mb-16">
              <h3 className="mb-7 text-3xl font-bold leading-tight text-[#222] sm:text-4xl">
                Why UAE Manufacturers Choose Xtreme Machines
              </h3>

              <div className="space-y-5 text-[17px] leading-8 text-[#5a5a5a]">
                <p>
                  UAE&apos;s plastics and packaging sector is one of the
                  fastest-growing in the GCC region, supported by strong
                  government investment in industrial free zones and
                  export-oriented manufacturing. Local producers of filler
                  masterbatch, PP/PE compounds, and CaCO3-filled plastics need
                  machinery that can handle high ambient temperatures,
                  continuous multi-shift operation, and strict quality standards
                  demanded by regional and international buyers.
                </p>

                <p>
                  Xtreme Machines&apos; filler masterbatch machines are
                  engineered specifically for these demanding conditions —
                  offering high throughput, energy efficiency, and long-term
                  durability, making them ideal for UAE&apos;s industrial
                  climate and 24x7 production requirements.
                </p>
              </div>
            </div>

            {/* WHAT IS */}
            <div className="mb-16">
              <h3 className="mb-7 text-3xl font-bold leading-tight text-[#222] sm:text-4xl">
                What is a Filler Masterbatch Machine?
              </h3>

              <p className="text-[17px] leading-8 text-[#5a5a5a]">
                A filler masterbatch machine is used to manufacture masterbatch
                — a concentrated mixture of calcium carbonate (CaCO3), talc, or
                other mineral fillers combined with a carrier resin — which is
                later blended with virgin plastic to reduce raw material cost
                while maintaining product strength and quality. This machine is
                a critical part of the plastic compounding process, widely used
                by manufacturers producing packaging films, woven sacks, pipes,
                and injection-molded products across the UAE.
              </p>
            </div>

            {/* FEATURES */}
            <div className="mb-16">
              <h3 className="mb-9 text-3xl font-bold leading-tight text-[#222] sm:text-4xl">
                Features of Xtreme Machines&apos; Filler Masterbatch Machine
              </h3>

              <div className="grid gap-5 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="border-t-4 border-[#ff5c0a] bg-[#f7f7f7] p-6"
                  >
                    <h4 className="mb-3 text-2xl font-bold text-[#222]">
                      {feature.title}
                    </h4>

                    <p className="text-[17px] leading-8 text-[#5a5a5a]">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* APPLICATIONS */}
            <div className="mb-16">
              <h3 className="mb-7 text-3xl font-bold leading-tight text-[#222] sm:text-4xl">
                Applications in UAE&apos;s Plastic Industry
              </h3>

              <p className="text-[17px] leading-8 text-[#5a5a5a]">
                Xtreme Machines&apos; filler masterbatch machines serve a wide
                range of applications across the UAE, including:
              </p>

              <ul className="mt-5 space-y-3">
                {applications.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[17px] leading-7 text-[#5a5a5a]"
                  >
                    <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff5c0a]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WHY IMPORT FROM INDIA */}
            <div className="mb-16">
              <h3 className="mb-7 text-3xl font-bold leading-tight text-[#222] sm:text-4xl">
                Why Import Your Filler Masterbatch Machine from India?
              </h3>

              <div className="space-y-5 text-[17px] leading-8 text-[#5a5a5a]">
                <p>
                  India has emerged as a leading global hub for plastic
                  processing machinery manufacturing, offering UAE buyers a
                  strong combination of advanced engineering, cost efficiency,
                  and reliable after-sales support. Xtreme Machines, based in
                  New Delhi, is an ISO 9001:2000 certified manufacturer and
                  exporter, with decades of manufacturing experience (since
                  1982) and a strong export track record across the Middle East.
                </p>

                <p className="font-semibold text-[#333]">
                  Choosing Xtreme Machines means:
                </p>
              </div>

              <ul className="mt-5 space-y-3">
                {indiaBenefits.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[17px] leading-7 text-[#5a5a5a]"
                  >
                    <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff5c0a]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA CONTENT */}
            <div className="mb-16 bg-[#f5f5f5] px-6 py-10 sm:px-10 sm:py-12">
              <h3 className="mb-6 text-3xl font-bold leading-tight text-[#222] sm:text-4xl">
                Get a Quote for Your UAE Plant
              </h3>

              <div className="space-y-5 text-[17px] leading-8 text-[#5a5a5a]">
                <p>
                  Whether you&apos;re setting up a new masterbatch production
                  line in Dubai, Sharjah, Ajman, or Abu Dhabi, or upgrading your
                  existing plant capacity, Xtreme Machines can design a filler
                  masterbatch machine tailored to your exact production needs.{" "}
                  <Link href="/contact-us/" className="font-bold text-red-700">
                    Contact us today
                  </Link>{" "}
                  for a detailed quotation, technical specifications, and export
                  documentation assistance.
                </p>
              </div>
            </div>

            {/* =================================================
                FAQ
            ================================================== */}
            <div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-[#222] sm:text-4xl">
                FAQs
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
                          {index + 1}. {faq.question}
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

export default FillerMasterUae;
