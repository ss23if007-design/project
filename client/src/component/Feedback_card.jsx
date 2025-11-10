import React from "react";
import "./Feedback_card.css";


export const Feedback_card = ({ image, name, feedback,images}) => {
  return (
    <div className="feedback-card">
      {/* Profile Image */}
      <div className="user">
      <img src={image} alt={name} className="profile-img" />
      {/* Name */}
      <h3 className="feedback-name">{name}</h3>
      </div>
      {/* Feedback */}
      <p className="feedback-text">{feedback}</p>

      {/*photo gallery LAGA*/}
      <img src={images} alt ={name} className="feedback-img" width="350px" height="auto" overflow="hidden"  /> 
    </div>
  );
};


