"use client";
import { useState } from "react";













import {
  FaPlus,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";



function DispersionKneaderPneumaticHydraulic() {

  const galleryImages = [
    "/assets/dispersion_kne1.webp",
    "/assets/dispersion_kne2.webp",
    "/assets/dispersion_kne3.webp",
    "/assets/dispersion_kne4.webp",
    "/assets/dispersion_kne5.webp",
    "/assets/dispersion_kne6.webp",
    "/assets/dispersion_kne7.webp",
    "/assets/dispersion_kne8.webp",
    "/assets/dispersion_kne9.webp",
    "/assets/dispersion_kne10.webp",
    "/assets/dispersion_kne11.webp",
    "/assets/dispersion_kne12.webp",
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
         {/* TOP BANNER */}
      <div className="bg-[#ff5c0a] py-24 text-center">
        <h1 className="text-white text-4xl lg:text-4xl font-bold uppercase">
          Dispersion Kneader Pneumatic Hydraulic
        </h1>
      </div>


        {/* IMAGE GALLERY */}
          <div className="flex flex-wrap gap-1.5 mt-16 px-6 mb-8">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="w-full md:w-[49.5%] lg:w-[33%] relative overflow-hidden group cursor-pointer"
                onClick={() => openImage(index)}
              >
                {/* IMAGE */}
                <img
                  src={img}
                  alt="Dispersion Kneader Machine"
                  className="w-full h-100 object-cover transition duration-500 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <FaPlus className="text-white text-2xl" />
                </div>
              </div>
            ))}
          </div>

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
              alt="Dispersion Kneader Machine"
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
    </>
  )
}

export default DispersionKneaderPneumaticHydraulic
