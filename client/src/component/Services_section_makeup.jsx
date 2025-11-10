import React from "react";
import { Service_card } from "./Service_card";
import "./Service_card.css";

export const Services_section_makeup = () => {
    const services = [
        {
            title: "Bleach Facial:",
            description: " Instant lightening and brightening to erase dullness   and reveal fairer skin.",
            duration: "60 mins",
            image: "/images/BleachFacial.jpg"
        },
        {
            title: "Hand Wax",
            description: "Smooth, soft hands ready for their close-up.",
            duration: "10 mins",
            image: "/images/handwax.jpg"
        },
        {
            title: "Manicure",
            description: "Your fingertips, polished and perfected, ready to make a statement.",
            duration: "30 mins",
            image: "/images/Manicure.jpg"
        },
        {
            title: "Pedicure",
            description: " Walk in the sunshine with perfectly pampered and polished feet.",
            duration: "30 mins",
            image: "/images/padicure.jpg"
        },
        {
            title: "Advance Facial",
            description: "Next-level skin technology for targeted correction and a luminous finish.",
            duration: "2 hours",
            image: "/images/AdvanceFacial.jpg"
        },
        {
            title: "O3+ Facial",
            description: "A professional-grade power treatment for unparalleled radiance and clarity.",
            duration: "2 hours",
            image: "/images/O3+facial.jpg"
        },
        {
            title: "HydraFacial",
            description: "The three-step, vortex-fusion process for a deeply satisfying, instant glow.",
            duration: "2 hours",
            image: "/images/HydraFacial.jpg"
        },{
            title: "Haircut",
            description: "A precise snip to redefine your style and refresh your ends. .",
            duration: "15 mins",
            image: "/images/Haircut.jpg"
        },{
            title: "Advanced Haircut",
            description: "Architecting a customized, dynamic look that moves and flatters perfectly.",
            duration: "30 mins",
            image: "/images/Advancehaircut.jpg"
        },{
            title: "Hair Spa",
            description: "A deep conditioning escape that transforms dry, stressed hair into silken strands.",
            duration: "60 mins",
            image: "/images/HairSpa.jpg"
        },{
            title: "Smoothening",
            description: "Taming the frizz and chaos for sleek, effortlessly manageable hair.",
            duration: "5 hours",
            image: "/images/hairSmoothening.jpg"
        },{
            title: "Keratin",
            description: "Infusing structure and strength for months of smooth, frizz-free perfection.",
            duration: "3 hours",
            image: "/images/Keratin.jpg"
        },{
            title: "Botox (Hair)",
            description: "A powerful anti-aging filler for hair that restores mass and youthful bounce.",
            duration: "3 hours",
            image: "/images/Hairbotox.jpg"
        },{
            title: "Nanoplastic",
            description: "The ultimate chemical-free smoothing system for intense shine and lasting straightness.",
            duration: "6 hours",
            image: "/images/Nanoplastic.jpg"
        },
        {
            title: "Bridal Make Up",
            description: "The ultimate chemical-free smoothing system for intense shine and lasting straightness.",
            duration: "3 hours",
            image: "/images/Bridal.jpg"
        },
        {
            title: "Henna Mehendi ( Hands and feets )",
            description: "The ultimate chemical-free smoothing system for intense shine and lasting straightness.",
            duration: " depends ",
            image: "/images/HEnna mehendii.jpg"
        },
        
    ];

    return (
        <div className="service-section">
            {services.map((service, index) => (
                <Service_card key={index} {...service} />
            ))}
        </div>
    );
};

export const Services_section_skin = () => {
    const services = [
        
        {
            title: "Shaving",
            description: "Experience a smooth shave with our expert shaving service.",
            duration: "15 mins",
            image: ""
        },
        {
            title: "Hair Coloring",
            description: "Add some color to your hair with our professional hair coloring service.",
            duration: "45 mins",
            image: ""
        },
        {
            title: "Facial",
            description: "Relax and rejuvenate with our refreshing facial treatments.",
            duration: "60 mins",
            image: ""
        },
        
    ];

    return (
        <div className="service-section">
            {services.map((service, index) => (
                <Service_card key={index} {...service} />
            ))}
        </div>
    );
};

export const Services_section_hair = () => {
    const services = [
        
       
        {
            title: "Hair Coloring",
            description: "Add some color to your hair with our professional hair coloring service.",
            duration: "45 mins",
            image: ""
        },
        {
            title: "Facial",
            description: "Relax and rejuvenate with our refreshing facial treatments.",
            duration: "60 mins",
            image: ""
        },
        
    ];

    return (
        <div className="service-section">
            {services.map((service, index) => (
                <Service_card key={index} {...service} />
            ))}
        </div>
    );
};