
import Link from "next/link";


























































function OurClients() {
  const clients = [
    "/assets/client1.webp",
    "/assets/client2.webp",
    "/assets/client3.webp",
    "/assets/client4.webp",
    "/assets/client5.webp",
    "/assets/client6.webp",
    "/assets/client7.webp",
    "/assets/client8.webp",
    "/assets/client9.webp",
    "/assets/client10.webp",
    "/assets/client11.webp",
    "/assets/client12.webp",
    "/assets/client13.webp",
    "/assets/client14.webp",
    "/assets/client15.webp",
    "/assets/client16.webp",
    "/assets/client17.webp",
    "/assets/client18.webp",
    "/assets/client19.webp",
    "/assets/client20.webp",
    "/assets/client21.webp",
    "/assets/client21.webp",
    "/assets/client23.webp",
    "/assets/client24.webp",
    "/assets/client25.webp",
    "/assets/client26.webp",
    "/assets/client27.webp",
    "/assets/client28.webp",
    "/assets/client29.webp",
    "/assets/client30.webp",
    "/assets/client31.webp",
    "/assets/client32.webp",
    "/assets/client33.webp",
    "/assets/client34.webp",
    "/assets/client35.webp",
    "/assets/client36.webp",
    "/assets/client37.webp",
    "/assets/client38.webp",
    "/assets/client39.webp",
    "/assets/client40.webp",
    "/assets/client41.webp",
    "/assets/client42.webp",
    "/assets/client43.webp",
    "/assets/client44.webp",
    "/assets/client45.webp",
    "/assets/client46.webp",
    "/assets/client47.webp",
    "/assets/client48.webp",
    "/assets/client49.webp",
    "/assets/client50.webp",
    "/assets/client51.webp",
    "/assets/client52.webp",
    "/assets/client53.webp",
    "/assets/client54.webp",
    "/assets/client55.webp",
    "/assets/client56.webp",
  ];

  return (
    <>
      {/* BANNER */}
      <section className="w-full relative">
        {/* IMAGE */}
        <img
          src="/assets/client_banner.webp"
          alt="banner"
          className="w-full h-120 object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
          <h1 className="text-white text-4xl lg:text-6xl font-bold">
            Our Clients
          </h1>
        </div>
      </section>

      {/* CLIENTS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-350 mx-auto px-6">
          {/* HEADING */}
          <h1 className="text-center text-[40px] lg:text-[50px] leading-tight font-semibold text-[#15185B] mb-16">
            Check our top partners & clients
          </h1>

          {/* GALLERY */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border border-[#e5e5e5]">
            {clients.map((client, index) => (
              <div
                key={index}
                className="border border-[#e5e5e5] bg-white h-52.5 flex items-center justify-center p-6 group overflow-hidden"
              >
                <img
                  src={client}
                  alt={`client-${index}`}
                  className="max-h-35 object-contain transition duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#ff4d2d] py-16 px-6">
        <div className="max-w-350 mx-auto flex flex-col lg:flex-row items-center align-items justify-center gap-10">
          {/* TEXT */}
          <div>
            <h2 className="text-white text-3xl lg:text-3xl font-semibold leading-tight max-w-237.5">
              We create for clients who value unique quality.
              <br />
              Projects can start from a simple sketch!
            </h2>
          </div>

          {/* BUTTON */}
          <div>
            <button className="bg-white text-black text-2xl font-medium px-12 py-4 rounded-md hover:bg-black hover:text-white transition duration-300 cursor-pointer">
             
              <Link
                  href="/contact-us"
                >
                 Contact Us
                </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurClients;
