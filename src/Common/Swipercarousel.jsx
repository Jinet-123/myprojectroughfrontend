import React, { useState } from "react";
import baseurl from "../../services/baseurl";


const Swipercarousel = ({ images = [] }) => {
  const [index, setIndex] = useState(0);

  if (!images.length) {
    return <p className="text-center text-gray-500">No images uploaded</p>;
  }

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full  mx-auto relative">
      
      <img
        src={`${baseurl}/Imguploads/${images[index]}`}
        alt="property"
        className="w-full h-80 object-cover rounded-xl shadow-lg"
      />

  
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 bg-black/40 text-white px-3 py-2 rounded-full"
      >
        ❮
      </button>

      
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 bg-black/40 text-white px-3 py-2 rounded-full"
      >
        ❯
      </button>

     
      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === i ? "bg-orange-500" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Swipercarousel;
