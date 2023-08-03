import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import React Icons
import Navbar from "./NavBar";
import BlueBtn from "./BlueBtn";

import image1 from "../assets/images/agro-textiles/FROST-PROTECTION.webp";
import image2 from "../assets/images/industrialtextiles.jpg";
import image3 from "../assets/images/agro-textiles/WOVEN-GROUND-COVER.webp";
import image4 from "../assets/images/industrial-textiles/LUMBER-WRAP.webp";
import image5 from "../assets/images/industrial-textiles/WOVEN-COATED-PE-GEO-MEMBRANE.webp";

const images = [image1, image2, image3, image4, image5];
const names = ['Frost Protection', 'Agro Textiles', 'Woven Ground Cover', 'Lumber Wrap', 'Woven Coated PE Geo-Membrane'];

const CarouselIndicator = ({ currentIndex, totalImages, setCurrentIndex }) => {
  return (
    <div className="absolute bottom-5 left-0 right-0 flex justify-center items-center z-20">
      {images.map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full mx-2 ${
            currentIndex === index ? "bg-white" : "bg-gray-500"
          }`}
          onClick={() => setCurrentIndex(index)}
        ></div>
      ))}
    </div>
  );
};

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const [nextImageSrc, setNextImageSrc] = useState(images[1]); // Initialize with the URL of the next image
  const [showNextImage, setShowNextImage] = useState(false);

  useEffect(() => {
    const next = (currentIndex + 1) % images.length;
    setNextImageSrc(images[next]);

    const id = setTimeout(() => {
      setCurrentIndex(next);
      setTextVisible(false);
      setShowNextImage(true); // Show the next image before the transition
      setTimeout(() => setTextVisible(true), 50); // Delay the text transition by 50ms
    }, 5000);

    return () => clearTimeout(id);
  }, [currentIndex]);

  const handleNextImageLoad = () => {
    setShowNextImage(false); // Hide the next image after it's loaded
  };

  const prevImage = () => {
    const prev = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prev);
    setTextVisible(false);
    setTimeout(() => setTextVisible(true), 500); // Delay the text transition by 500ms
  };

  const nextImage = () => {
    const next = (currentIndex + 1) % images.length;
    setCurrentIndex(next);
    setTextVisible(false);
    setTimeout(() => setTextVisible(true), 500); // Delay the text transition by 500ms
  };

  const containerStyle = {
    height: `calc(70vh)`,
  };

  return (
    <div className="relative flex flex-col w-full h-fit text-xl text-primary">
      <Navbar />
      <div className="relative w-full flex-grow flex justify-center items-center" style={containerStyle}>
        <img src={images[currentIndex]} alt={names[currentIndex]} className="w-full h-full object-cover" />
        <img
          src={nextImageSrc}
          alt={names[(currentIndex + 1) % images.length]}
          className="w-full h-full object-cover"
          style={{ opacity: showNextImage ? 1 : 0, position: "absolute", top: 0, left: 0, transition: "opacity 0.5s" }}
          onLoad={handleNextImageLoad}
        />
        <div className="flex flex-col absolute z-10 justify-center items-center" style={{ opacity: textVisible ? 1 : 0, transition: "opacity 0.5s" }}>
          <p className="text-white   text-4xl   2xl:text-6xl drop-shadow-2xl font-bold z-10 mb-10" style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}>{names[currentIndex]}</p>
          <BlueBtn name="Learn More" />
        </div>
        <div className="absolute text-white hover:text-secondary left-0 z-20 w-fit h-full flex flex-col items-center justify-center hover:cursor-pointer" onClick={prevImage}>
          <button className="my-auto p-2 rounded-full focus:outline-none">
            <FaChevronLeft size={32} />
          </button>
        </div>
        <div className="z-20 w-fit text-white hover:text-secondary absolute right-0 h-full flex flex-col items-center hover:cursor-pointer justify-center" onClick={nextImage}>
          <button className=" my-auto p-2 rounded-full focus:outline-none">
            <FaChevronRight size={32} />
          </button>
        </div>
        <div>
          <CarouselIndicator
            currentIndex={currentIndex}
            totalImages={images.length}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>
    </div>
  );
}
