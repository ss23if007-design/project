import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Home_service.css";

export const Home_service_card = ({title, description, duration, index,expanded,onClick}) => {

    return (
    <div
      className={`container accordion-card${expanded ? " expanded" : ""}`}
      style={{ animationDelay: `${index * 0.15}s` }}
      onClick={onClick}

    >
     
        
        <div className="service-infoo">
            
          <div className="service-right">
           <h5 style={{margin:"10px", fontSize:"18px"}}>{title}</h5>
           <div className="blockk" >
            <img src="/images/clock.png" alt= "Clock_icon"
                width="20px" 
                 />
           <p>{duration}</p>
           </div>
           
          </div>

          <div className="service-left">
             {expanded && <p>{description}</p>} 
          </div>
          
        
        </div>
     
    </div>
    );
};

export const Home_service_section = () => {
  
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      title: "Make-up",
      image: "/images/login.jpg",
      description: "Flawless, Natural or Dewy base with high-end branded products - is bare minimum. ",
      duration: "1 hour"
      
    },
    {
      title: "Hydrating Facials",
      image: "/images/graphic_design.jpg",
      description: "We provide all kinds of facials, based on your skin issues but hydration is common in all of them.",
      duration: "60 minutes"
    },
    {
      title: "Custom Nail",
      image: "/images/digital_marketing.jpg",
      description: "Right now we are on the way of perfection but we give shot.",
      duration: "30 min"
    },
      {
      title: "Wax Hair Removal",
      image: "/images/digital_marketing.jpg",
      description: "smells like freshly waxed skin! We Provide clean, soft and natural wax.",
      duration: "1 hour"
    },
      {
      title: "Hair-Style",
      image: "/images/digital_marketing.jpg",
      description: "All kinds of hair spa, style and colour services, based on your hair issues.",
      duration: "1 hour"
    },
    {
      title: "Massaging",
      image: "/images/digital_marketing.jpg",
      description: "Head Massages, Body Massages & Foot Massages. Click explore for more.",
      duration: "30 minutes"
    }
  ];
  return (
    <div>
    <div className="Home_service-section">
      {services.map((service, index) => (
        <Home_service_card
          key={index}
          title={service.title}
          image={service.image}
          description={service.description}
          duration={service.duration}
          index={index}
          expanded={openIndex === index}
          onClick = {() => setOpenIndex(openIndex === index ? null : index ) }
        />
      ))}
    </div>
    </div>
  );
};