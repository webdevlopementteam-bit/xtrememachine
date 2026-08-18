"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaPlus,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaPaperPlane,
  FaGraduationCap,
  FaGlobeAmericas,
} from "react-icons/fa";

function Home() {
  const galleryImages = [
    "/assets/mission1.webp",
    "/assets/mission2.webp",
    "/assets/mission3.webp",
    "/assets/mission4.webp",
    "/assets/mission5.webp",
    "/assets/mission6.webp",
    "/assets/mission7.webp",
    "/assets/mission8.webp",
    "/assets/mission9.webp",
    "/assets/mission10.webp",
    "/assets/mission11.webp",
    "/assets/mission12.webp",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

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

  return (
    <>
      {/* BANNER */}
      <section className="w-full">
        <img src="/assets/homebanner.jpeg" alt="Masterbatch Compounding Line | Filler Machine Compounding Line" className="w-full h-auto object-cover" />
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-[rgb(255,255,255)] pt-12 ">
        <div className="max-w-375 mx-auto px-5 lg:px-7">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12">
            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-4xl leading-tight font-semibold text-black">
                Compounding Lines For{" "}
                <span className="text-[#E2010E]">Filler & Masterbatches</span>
              </h1>

              <p className="mt-6 text-lg leading-loose text-black">
                Xtreme Machines is a maximum first-rate manufacturer and issuer
                of advanced compounding strains for a big range of industries.
                Our machines are designed to supply superior average overall
                performance, performance, and reliability, assisting agencies
                achieve higher productiveness with minimum downtime. Whether
                you’re seeking out PVC compounding solutions or specialised
                machines for bio-based completely polymers, Xtreme Machines has
                the right era for you.
              </p>

              <p className="mt-6 text-lg leading-loose text-black">
                One of our flagship products is the PVC Compounding Line,
                designed to meet the challenges of even the most demanding
                production environments. This line ensures precise mixing and
                compounding of PVC materials, guaranteeing consistent quality
                and reliable performance. Perfect for producing a wide range of
                PVC products such as cables, pipes, and profiles, it
                incorporates advanced features like automatic temperature
                control and high-torque mixing for enhanced efficiency. Whether
                you’re scaling up production or improving operational ease, our
                compounding line helps streamline the manufacturing process.
              </p>

              <p className="mt-6 text-lg leading-loose text-black">
                Corn starch is becoming a key factor within the manufacturing of
                bio-primarily based polymers, specially in the introduction of
                biodegradable plastics. As the demand for sustainable materials
                grows, Corn Starch Compounding Line Manufacturers have advanced
                specialised system to technique corn starch effectively.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="max-w-180 ml-auto">
              <img
                src="/assets/home-2ndImage.jpg"
                alt="Masterbatch Compounding Line Machine"
                className="w-full rounded-2xl"
              />

              <div className="mt-8">
                <h3 className="text-3xl font-semibold text-black mb-5">
                  Technical Specifications:-
                </h3>

                <img
                  src="/assets/home-technicalImg.png"
                  alt="Compounding Line Technical Specifications"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* SECOND CONTENT */}
          <div className="mt-12">
            <p className="text-lg leading-loose text-black">
              A kneader-based pelletizing line is an advanced solution designed
              to deliver high-quality, uniform, and efficient compounding
              results for a wide range of polymers and filler masterbatches.
              These systems are particularly suitable for Pelletizing Lines or
              Compounding Lines for Calcium, Talc, and Sodium-based Filler &
              Masterbatches used in polymers like PP, PE, LLDPE, PVC, TPR, EVA,
              and even bio-polymers such as PBAT, PLA, and PBS.
            </p>

            <h2 className="text-2xl lg:text-3xl leading-tight font-normal mt-6 text-black">
              These compounding strains mix corn starch with numerous additives
              to provide green materials that smash down greater easily inside
              the environment, imparting a promising opportunity to traditional
              plastics.
            </h2>

            <p className="mt-8 text-lg leading-loose text-black">
              Xtreme Machines also excels in manufacturing Bio Polymer Filler
              Compounding Machines, which are essential for producing
              eco-friendly plastic products. Our Bio Polymer Filler Compounding
              Machine is designed to work with biodegradable materials like PLA,
              PBAT, and other bio-based resins. The Bio Polymer Filler
              Compounding Machine integrates the latest technology to ensure
              precise compounding, offering businesses a competitive edge in the
              growing biodegradable plastics market. With a Bio Polymer Filler
              Compounding Machine from Xtreme Machines, manufacturers can
              achieve high-quality production while adhering to environmental
              regulations. The Bio Polymer Filler Compounding Machine is perfect
              for companies that prioritize sustainability and want to deliver
              green solutions to their customers.
            </p>

            <p className="mt-8 text-lg leading-loose text-black">
              For industries working with EVA materials, Xtreme Machines
              provides the state-of-the-art EVA Filler Compounding Line. This
              EVA Filler Compounding Line is tailored for compounding ethylene
              vinyl acetate (EVA) resins, commonly used in shoe soles, foam
              products, and adhesives. The EVA Filler Compounding Line from
              Xtreme Machines offers excellent dispersion and consistency,
              ensuring that your end products meet the highest quality
              standards. With advanced control systems and energy-efficient
              operation, the EVA Filler Compounding Line helps manufacturers
              optimize their production processes while minimizing waste. The
              EVA Filler Compounding Line is the perfect choice for businesses
              seeking reliable and high-performance compounding solutions for
              EVA materials.
            </p>

            <p className="mt-8 text-lg leading-loose text-black">
              Another cutting-edge solution offered by Xtreme Machines is the
              TPR Filler Compounding Line, which is designed for processing
              thermoplastic rubber (TPR) materials. The TPR Filler Compounding
              Line ensures optimal mixing and dispersion of fillers and
              additives, producing high-quality TPR compounds for various
              applications. The TPR Filler Compounding Line is ideal for the
              footwear industry, automotive parts, and flexible tubing
              manufacturing. With the TPR Filler Compounding Line, manufacturers
              can achieve superior flexibility, durability, and performance in
              their final products. Xtreme Machines’ TPR Filler Compounding Line
              is engineered for efficiency and ease of use, making it a
              preferred choice for businesses looking to enhance their
              production capabilities.
            </p>

            <p className="mt-8 text-lg leading-loose text-black">
              In addition to TPR, Xtreme Machines offers the advanced PE Filler
              Compounding Line, which is specifically designed for polyethylene
              (PE) materials. The PE Filler Compounding Line ensures precise
              mixing and compounding, delivering consistent quality for
              applications in packaging, construction, and consumer goods. The
              PE Filler Compounding Line is known for its energy efficiency and
              ability to handle large production volumes, making it ideal for
              businesses with high demands. With the PE Filler Compounding Line,
              manufacturers can achieve excellent product quality while reducing
              operational costs. The PE Filler Compounding Line is a top choice
              for companies seeking reliable and efficient compounding
              solutions.
            </p>

            <p className="mt-8 text-lg leading-loose text-black">
              Xtreme Machines also specializes in ZHFR Cable Filler Machines,
              which are designed for zero halogen flame retardant (ZHFR) cable
              applications. The ZHFR Cable Filler Machine ensures that the
              compounding process meets the stringent safety and environmental
              regulations required for flame retardant cables. The ZHFR Cable
              Filler Machine offers precise control over the compounding
              process, resulting in superior flame resistance and durability.
              With the ZHFR Cable Filler Machine, manufacturers can produce
              high-quality ZHFR cables that are both safe and environmentally
              friendly. The ZHFR Cable Filler Machine is an essential tool for
              businesses in the cable manufacturing industry.
            </p>
          </div>

          {/* APPLICATIONS SECTION */}
          <div className="mt-10">
            <h2 className="text-[24px] font-semibold text-black">
              Applications:-
            </h2>

            {/* APPLICATION LIST */}
            <div className="flex flex-wrap gap-4 mt-7">
              {/* COLUMN 1 */}
              <div className="space-y-3 min-w-55">
                <p className="text-[18px] text-[#667085] font-normal">
                  Bio Polymer
                </p>

                <p className="text-[18px] text-[#667085] font-normal">
                  Non Wooven Bags
                </p>

                <p className="text-[18px] text-[#667085] font-normal">
                  Carry Bags
                </p>

                <p className="text-[18px] text-[#667085] font-normal">
                  Wooven Sack Bags
                </p>
              </div>

              {/* COLUMN 2 */}
              <div className="space-y-3 min-w-55">
                <p className="text-[18px] text-[#667085] font-normal">
                  Garbage Bags
                </p>

                <p className="text-[18px] text-[#667085] font-normal">
                  Tarpals
                </p>

                <p className="text-[18px] text-[#667085] font-normal">
                  Engineering Plastics
                </p>

                <p className="text-[18px] text-[#667085] font-normal">
                  PVC Cable compounding
                </p>
              </div>

              {/* COLUMN 3 */}
              <div className="space-y-3 min-w-55">
                <p className="text-[18px] text-[#667085] font-normal">
                  PVC Footwear & Soles
                </p>

                <p className="text-[18px] text-[#667085] font-normal">
                  Pipe Industries
                </p>

                <p className="text-[18px] text-[#667085] font-normal">
                  Tank Industries
                </p>

                <p className="text-[18px] text-[#667085] font-normal">
                  Injection Moulding
                </p>
              </div>
            </div>

            {/* CAPACITIES */}
            <div className="mt-8 max-w-300">
              <p className="text-[18px] text-black">
                <span className="font-semibold">Capacities Available:</span>{" "}
                25KG/HR,50KG/HR, 100KG/HR,150KG/HR,200KG/HR, 350KG/HR,700KG/HR
                1200KG/HR. We also provide Die Face Cutter separately in Air &
                Water on demand
              </p>
            </div>
          </div>
        </div>

        {/* MISSION SECTION */}
        <section className="bg-[#020331] py-20 mt-14 w-full">
          {/* TOP CONTENT */}
          <div className="text-center">
            <h5 className="text-white text-2xl font-semibold">Our Mission</h5>

            <h2 className="text-white text-3xl lg:text-5xl font-bold leading-tight mt-6">
              To lead globally in Rubber and Plastic
              <br />
              Industry with top-notch production
              <br />
              and services.
              {/* <br /> */}
              <span className="text-[#E2010E] inline-block ml-3 text-3xl">
                <TypeAnimation
                    sequence={[
                    "Excellence in Performance.",
                    1000,
                    "Creating excellence through innovation.",
                    2000,
                     "Perfection execution through quality and service.",
                    2000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                />
                </span>
            </h2>
          </div>

          {/* IMAGE GALLERY */}
          <div className="flex flex-wrap gap-1.5 mt-16">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="w-full md:w-[49.5%] lg:w-[33%] relative overflow-hidden group cursor-pointer"
                onClick={() => openImage(index)}
              >
                {/* IMAGE */}
                <img
                  src={img}
                  alt="Masterbatch Compounding Line Machine"
                  className="w-full h-70 object-cover transition duration-500 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <FaPlus className="text-white text-2xl" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IMAGE POPUP */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-9999 flex items-center justify-center">
            {/* CLOSE BUTTON */}
            <button
              onClick={closeImage}
              className="absolute top-6 right-6 text-white text-2xl z-50 cursor-pointer"
            >
              <FaTimes />
            </button>

            {/* PREV BUTTON */}
            <button
              onClick={prevImage}
              className="absolute left-6 text-white text-2xl z-50 cursor-pointer"
            >
              <FaChevronLeft />
            </button>

            {/* IMAGE */}
            <img
              src={galleryImages[selectedImage]}
              alt="Masterbatch Compounding Line Machine"
              className="max-w-[90%] max-h-[85vh] object-contain"
            />

            {/* NEXT BUTTON */}
            <button
              onClick={nextImage}
              className="absolute right-6 text-white text-2xl z-50 cursor-pointer"
            >
              <FaChevronRight />
            </button>
          </div>
        )}

        <section className="bg-[#1f4e78] py-24">
          <div className="max-w-295 mx-auto flex flex-wrap justify-between gap-y-8">
            {/* CARD 1 */}
            <div className="bg-[#f7f7f7] w-full md:w-[31.5%] rounded-sm px-8 pt-8 pb-10 min-h-160">
              {/* ICON */}
              <div className="w-16 h-16 bg-[#E2010E] rounded-xl flex items-center justify-center">
                <FaPaperPlane className="text-white text-[30px]" />
              </div>

              {/* TITLE */}
              <h2 className="text-[#071c35] text-[24px] leading-10 font-extrabold uppercase mt-4">
                Assured Quality
              </h2>

              {/* CONTENT */}
              <p className="text-[#667085] text-[16px] leading-[2.2] font-normal mt-2">
                Quality has always remained the integral part of our endeavors.
                To provide our clients with a superlative range of Rubber and
                Plastic Processing Machinery, each and every manufacturing
                processes is supervised by an expert team of quality controllers
                who keep a close vigil on the life cycle of the machines,
                starting from procurement of raw material till the final
                dispatch.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#f7f7f7] w-full md:w-[31.5%] rounded-sm px-8 pt-8 pb-10 min-h-160">
              {/* ICON */}
              <div className="w-16 h-16 bg-[#E2010E] rounded-xl flex items-center justify-center">
                <FaGraduationCap className="text-white text-[30px]" />
              </div>

              {/* TITLE */}
              <h2 className="text-[#071c35] text-[24px] leading-10 font-extrabold uppercase mt-4">
                Infrastructure & Team
              </h2>

              {/* CONTENT */}
              <p className="text-[#667085] text-[16px] leading-[2.2] font-normal mt-2">
                Our 2000 Sq.Yards infrastructure consists of an in-house
                manufacturing unit outfitted with cutting-edge technology and
                the most advanced machinery, upgraded as per the latest
                technology. Our team of quality professionals possess years of
                experience and expertise, which has helped us be the best in the
                industry. We also have with us a diligent R & D team engaged in
                carrying out regular market research and analysis.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#f7f7f7] w-full md:w-[31.5%] rounded-sm px-8 pt-8 pb-10 min-h-160">
              {/* ICON */}
              <div className="w-16 h-16 bg-[#E2010E] rounded-xl flex items-center justify-center">
                <FaGlobeAmericas className="text-white text-[30px]" />
              </div>

              {/* TITLE */}
              <h2 className="text-[#071c35] text-[24px] leading-10 font-extrabold uppercase mt-4">
                Network
              </h2>

              {/* CONTENT */}
              <p className="text-[#667085] text-[16px] leading-[2.2] font-normal mt-2">
                We have got a vast network of distributors to our credit. Our
                Rubber and Plastic Processing Machinery cover the entire global
                markets of : Spain, Dubai, Saudi Arabia, Venezuela, Iraq,
                Jordan, South Africa, Kenya, Nigeria, Nepal and Bangladesh.
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* quality section */}
    </>
  );
}

export default Home;
