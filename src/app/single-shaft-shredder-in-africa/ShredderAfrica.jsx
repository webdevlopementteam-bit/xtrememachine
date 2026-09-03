"use client";

import { useState } from "react";
import Link from "next/link";

export default function ShredderAfrica() {
  const galleryImages = [
    "/assets/shredder1.webp",
    "/assets/shredder2.webp",
    "/assets/shredder3.webp",
    "/assets/shredder4.webp",
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is a Single Shaft Shredder used for?",
      answer:
        "A Single Shaft Shredder is used to reduce large, hard or bulky materials into smaller pieces. It is commonly used in plastic recycling, industrial waste processing and material size-reduction applications.",
    },
    {
      question: "Where can I buy a Single Shaft Shredder in Africa?",
      answer:
        "Businesses in Africa can source Single Shaft Shredders directly from Xtreme Machines, an Indian manufacturer and exporter of rubber and plastic processing machinery.",
    },
    {
      question: "What materials can a Single Shaft Shredder process?",
      answer:
        "Xtreme Machines' Single Shaft Shredder is designed for materials including PP, PC, HDPE, Nylon, LLDPE and PET lumps, along with other hard and rigid plastic waste.",
    },
    {
      question:
        "What is the capacity of Xtreme Machines' Single Shaft Shredder?",
      answer:
        "Xtreme Machines offers Single Shaft Shredders with capacities ranging from 100 kg/hr to 2,000 kg/hr, depending on the machine configuration and application.",
    },
    {
      question: "Does Xtreme Machines export Single Shaft Shredders to Africa?",
      answer:
        "Yes. Xtreme Machines identifies South Africa, Kenya and Nigeria among its international markets and operates as a manufacturer and exporter of rubber and plastic processing machinery.",
    },
    {
      question: "How do I select the right shredder for my recycling plant?",
      answer:
        "The selection should be based on your material type, required throughput, feed size, desired output and downstream recycling process. Xtreme Machines can recommend a suitable configuration based on these requirements.",
    },
  ];

  return (
    <>
      <main className="bg-white text-[#333]">
        {/* =========================================================
            HERO / TOP BANNER
        ========================================================== */}
        <section className="relative overflow-hidden bg-[#ff5c0a]">
          <div className="absolute inset-0 bg-black/5" />

          <div className="relative mx-auto flex min-h-[360px] max-w-[1200px] items-center justify-center px-5 py-20 text-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-white/80">
                Xtreme Machines
              </p>

              <h1 className="text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
                Single Shaft Shredder in Africa
              </h1>
            </div>
          </div>
        </section>

        {/* =========================================================
            GALLERY
        ========================================================== */}
        <section className="bg-[#f5f5f5] py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="mb-10 text-center">
              <span className="mb-3 block text-sm font-bold uppercase tracking-[2px] text-[#ff5c0a]">
                Our Machine
              </span>

              <h2 className="text-3xl font-bold text-[#222] sm:text-4xl">
                Single Shaft Shredder Gallery
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="group overflow-hidden bg-white shadow-[0_5px_25px_rgba(0,0,0,0.08)]"
                >
                  <img
                    src={img}
                    alt={`Single Shaft Shredder ${index + 1}`}
                    className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[300px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            MAIN CONTENT
        ========================================================== */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1120px] px-5">
            {/* BUY SECTION */}
            <div className="mb-14">
              <h2 className="mb-6 border-l-[5px] border-[#ff5c0a] pl-4 text-3xl font-bold leading-tight text-[#222] sm:text-4xl">
                Buy Single Shaft Shredder in Africa
              </h2>

              <div className="space-y-5 text-[16px] leading-8 text-[#555]">
                <p>
                  Xtreme Machines is a trusted{" "}
                  <Link
                    href="/single-shaft-shredder"
                    className="font-bold text-red-700"
                  >
                    Single Shaft Shredder exporter in Africa
                  </Link>
                  , supplying robust and efficient shredding solutions for
                  plastic recycling, waste processing and industrial
                  applications. Designed for demanding operating environments,
                  our Single Shaft Shredders help businesses reduce bulky and
                  rigid materials into manageable sizes for further processing,
                  recycling or disposal.
                </p>

                <p>
                  With a capacity range of{" "}
                  <strong>100 kg/hr to 2,000 kg/hr</strong>, Xtreme Machines can
                  provide shredding solutions for different production
                  requirements. Our machines are suitable for processing
                  materials such as PP, PC, HDPE, Nylon, LLDPE and PET lumps, as
                  well as other hard and rigid plastic waste.
                </p>

                <p>
                  For recycling companies, manufacturers and waste-processing
                  businesses across African markets, a reliable shredder can
                  improve material handling, reduce waste volume and support a
                  more efficient recycling workflow.
                </p>
              </div>
            </div>

            {/* RECYCLING & WASTE PROCESSING */}
            <div className="mb-14">
              <h3 className="mb-6 text-3xl font-bold leading-tight text-[#222] sm:text-4xl">
                Single Shaft Shredder Africa for Recycling & Waste Processing
              </h3>

              <div className="space-y-5 text-[16px] leading-8 text-[#555]">
                <p>
                  A{" "}
                  <Link
                    href="/single-shaft-shredder"
                    className="text-red-700 font-bold"
                  >
                    Single Shaft Shredder in Africa
                  </Link>{" "}
                  can be used as an important size-reduction machine in plastic
                  recycling and industrial waste-processing operations. The
                  machine uses a rotating shaft fitted with cutting blades to
                  break down large, hard or bulky materials into smaller pieces.
                </p>

                <p>
                  The reduced material can then be transferred to subsequent
                  processes such as grinding, washing, separation, extrusion or
                  pelletising, depending on the recycling line.
                </p>

                <p>
                  Xtreme Machines designs its shredding equipment with a focus
                  on reliable operation, consistent shredding performance and
                  long service life, making it suitable for recycling businesses
                  handling regular volumes of plastic waste.
                </p>
              </div>
            </div>

            {/* WHY CHOOSE */}
            <div className="mb-14">
              <h4 className="mb-6 text-3xl font-bold leading-tight text-[#222] sm:text-4xl">
                Why Choose Xtreme Machines for a Single Shaft Shredder in
                Africa?
              </h4>

              <div className="space-y-5 text-[16px] leading-8 text-[#555]">
                <p>
                  Choosing the right shredding machine is important for
                  maintaining productivity and controlling operating costs.
                  Xtreme Machines offers industrial shredding equipment
                  developed for demanding plastic-processing applications.
                </p>
              </div>

              <div className="mt-8 space-y-8">
                {/* Suitable Capacity */}
                <div>
                  <h3 className="mb-3 text-2xl font-bold text-[#222]">
                    Suitable Capacity Options
                  </h3>

                  <p className="text-[16px] leading-8 text-[#555]">
                    Our Single Shaft Shredders are available in capacities from{" "}
                    <strong>100 kg/hr to 2,000 kg/hr</strong>, allowing
                    businesses to choose equipment based on their material type
                    and required processing capacity.
                  </p>
                </div>

                {/* Hard Plastics */}
                <div>
                  <h5 className="mb-3 text-2xl font-bold text-[#222]">
                    Designed for Hard & Rigid Plastics
                  </h5>

                  <p className="mb-4 text-[16px] leading-8 text-[#555]">
                    The shredder is particularly suitable for materials such as:
                  </p>

                  <ul className="grid gap-3 sm:grid-cols-2">
                    {[
                      "PP plastic lumps",
                      "HDPE waste",
                      "PET waste",
                      "PC plastic",
                      "Nylon",
                      "LLDPE",
                      "Rigid plastic scrap",
                      "Plastic production waste",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-md border border-black/5 bg-[#f7f7f7] px-5 py-3 text-[16px] text-[#555]"
                      >
                        <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-[#ff5c0a]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Durable Cutting */}
                <div>
                  <h5 className="mb-3 text-2xl font-bold text-[#222]">
                    Durable Cutting System
                  </h5>

                  <p className="text-[16px] leading-8 text-[#555]">
                    The machine uses high-grade alloy steel D2 blades designed
                    to withstand demanding shredding applications. Durable
                    cutting components can help reduce frequent blade
                    replacement and support continuous industrial operation.
                  </p>
                </div>

                {/* Consistent Reduction */}
                <div>
                  <h5 className="mb-3 text-2xl font-bold text-[#222]">
                    Consistent Material Reduction
                  </h5>

                  <p className="text-[16px] leading-8 text-[#555]">
                    A well-designed rotor and cutting system helps reduce large
                    plastic waste into smaller and more manageable pieces.
                    Consistent size reduction makes the shredded material easier
                    to handle and prepare for downstream recycling processes.
                  </p>
                </div>

                {/* Maintenance */}
                <div>
                  <h5 className="mb-3 text-2xl font-bold text-[#222]">
                    Practical Maintenance
                  </h5>

                  <p className="text-[16px] leading-8 text-[#555]">
                    The machine is designed with an industrial construction that
                    allows routine maintenance and inspection to be carried out
                    efficiently. This can help recycling businesses minimise
                    unnecessary downtime and maintain stable production.
                  </p>
                </div>
              </div>
            </div>

            {/* APPLICATIONS */}
            <div className="mb-14">
              <h4 className="mb-6 text-3xl font-bold leading-tight text-[#222] sm:text-4xl">
                Applications of Single Shaft Shredder in Africa
              </h4>

              <div className="space-y-5 text-[16px] leading-8 text-[#555]">
                <p>
                  Across Africa, recycling and waste-processing businesses
                  handle different types of plastic and industrial waste. Xtreme
                  Machines' Single Shaft Shredder can be integrated into various
                  processing applications.
                </p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="border-t-4 border-[#ff5c0a] bg-[#f7f7f7] p-6">
                  <h5 className="mb-3 text-2xl font-bold text-[#222]">
                    Plastic Recycling
                  </h5>

                  <p className="text-[16px] leading-8 text-[#555]">
                    The shredder can be used for reducing plastic lumps,
                    production scrap and rigid plastic waste before further
                    grinding, washing or extrusion.
                  </p>
                </div>

                <div className="border-t-4 border-[#ff5c0a] bg-[#f7f7f7] p-6">
                  <h5 className="mb-3 text-2xl font-bold text-[#222]">
                    Plastic Manufacturing Waste
                  </h5>

                  <p className="text-[16px] leading-8 text-[#555]">
                    Manufacturing facilities can use shredding equipment to
                    process rejected products, plastic lumps and production
                    waste so that suitable material can be recovered and
                    reprocessed.
                  </p>
                </div>

                <div className="border-t-4 border-[#ff5c0a] bg-[#f7f7f7] p-6">
                  <h5 className="mb-3 text-2xl font-bold text-[#222]">
                    Industrial Waste Processing
                  </h5>

                  <p className="text-[16px] leading-8 text-[#555]">
                    Industrial operations generating hard plastic waste can use
                    a Single Shaft Shredder to reduce material volume and
                    simplify storage, handling and transportation.
                  </p>
                </div>

                <div className="border-t-4 border-[#ff5c0a] bg-[#f7f7f7] p-6">
                  <h5 className="mb-3 text-2xl font-bold text-[#222]">
                    Recycling Plant Integration
                  </h5>

                  <p className="text-[16px] leading-8 text-[#555]">
                    The shredder can form part of a larger recycling system,
                    working before equipment such as granulators, washing
                    systems and plastic recycling extrusion lines, depending on
                    the material and desired final output.
                  </p>
                </div>
              </div>
            </div>

            {/* EXPORTER */}
            <div className="mb-14">
              <h4 className="mb-6 text-3xl font-bold leading-tight text-[#222] sm:text-4xl">
                Single Shaft Shredder Exporter in Africa
              </h4>

              <div className="space-y-5 text-[16px] leading-8 text-[#555]">
                <p>
                  Xtreme Machines is an established manufacturer and exporter of
                  rubber and plastic processing machinery from India. The
                  company has been operating since <strong>2008</strong> and
                  supplies machinery to international markets. Its listed global
                  network includes African markets such as{" "}
                  <strong>South Africa, Kenya</strong> and{" "}
                  <strong>Nigeria</strong>.
                </p>

                <p>
                  For African buyers, working directly with an experienced
                  manufacturer can make it easier to discuss material
                  requirements, processing capacity, machine configuration and
                  export requirements before purchasing.
                </p>

                <p>
                  Whether you operate a plastic recycling plant, manufacturing
                  facility or industrial waste-processing business, Xtreme
                  Machines can help you identify a suitable Single Shaft
                  Shredder according to your application.
                </p>
              </div>
            </div>

            {/* RIGHT SHREDDER */}
            <div className="mb-14">
              <div className="mb-8 rounded-sm bg-[#f5f5f5] p-7 sm:p-9">
                <h4 className="mb-5 text-3xl font-bold leading-tight text-[#222] sm:text-4xl">
                  Get the Right Single Shaft Shredder for Your Application
                </h4>

                <p className="text-[16px] leading-8 text-[#555]">
                  The ideal shredder depends on several factors, including the
                  type of material, feed size, required throughput, desired
                  output size and overall recycling process.
                </p>
              </div>

              <p className="mb-5 text-[16px] font-semibold text-[#333]">
                Before selecting a machine, it is important to evaluate:
              </p>

              <ul className="space-y-3">
                {[
                  "Type and hardness of material",
                  "Required capacity in kg/hr",
                  "Feed material dimensions",
                  "Desired output size",
                  "Working hours and production requirements",
                  "Downstream recycling equipment",
                  "Installation and operating conditions",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[16px] leading-7 text-[#555]"
                  >
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff5c0a]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-[16px] leading-8 text-[#555]">
                <Link href="/" className="font-bold text-red-700">
                  Xtreme Machines
                </Link>{" "}
                can assist buyers in selecting the appropriate shredding
                solution based on their processing requirements.
              </p>
            </div>

            {/* FAQ */}
            <div>
              <h4 className="mb-8 text-3xl font-bold leading-tight text-[#222] sm:text-4xl">
                Frequently Asked Questions
              </h4>

              <div className="divide-y divide-black/10 border-y border-black/10">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div key={faq.question}>
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
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ff5c0a] text-xl font-light text-white transition-transform duration-300 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </span>
                      </button>

                      <div
                        className={`grid transition-all duration-300 ${
                          isOpen
                            ? "grid-rows-[1fr] pb-5 opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-4xl pr-8 text-[16px] leading-8 text-[#555]">
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
