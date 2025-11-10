import React from "react";
import "./Carousel.css";

/*
 Put your images in: client/public/images/
 Example filenames: carousel1.jpg, carousel2.jpg, carousel3.jpg
 You can change the paths below to match your files.
*/
const images = [
  "/images/Ceritificate1.jpg",
  "/images/Certificate3.jpg",
  "/images/Certificate2.jpg"
];

export const Carousel = () => {
  return (
    <div className="carousel">
      {images.map((src, index) => (
        <div key={index} className="card">
          <img src={src} alt={`Slide ${index + 1}`} className="card-image" />
        </div>
      ))}
    </div>
  );
};


