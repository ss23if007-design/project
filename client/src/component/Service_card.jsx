

import React from "react";
import "./Service_card.css";

export const Service_card = ({ title, description, duration, image }) => {
  return <>
    <div className="service-card">

      <div className="service-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <span>No Image</span>
        )}
      </div>
      {/* Left side text */}
      <div className="service-info">
        <h2 className="service-title">{title}</h2>
        <p className="service-description">{description}</p>
        <span className="service-duration">Duration: {duration}</span>
      </div>

      {/* Right side image or placeholder */}
      
    </div>
  </>;
};

