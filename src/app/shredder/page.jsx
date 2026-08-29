





export default function Shredder() {

  const galleryImages = [
    "/assets/shredder1.webp",
    "/assets/shredder2.webp",
    "/assets/shredder3.webp",
    "/assets/shredder4.webp",
  ];

  return (
    <>
         <section className="bg-[#f3f3f3] min-h-screen">
      
      {/* TOP BANNER */}
      <div className="bg-[#ff5c0a] py-24 text-center">
        <h1 className="text-white text-4xl lg:text-4xl font-bold uppercase">
          Single Shaft Shredder
        </h1>
      </div>

      {/* GALLERY SECTION */}
      <div className="max-w-300 mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white"
            >
              <img
                src={img}
                alt="shredder"
                className="w-full h-85 object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
    </>
  )
}
