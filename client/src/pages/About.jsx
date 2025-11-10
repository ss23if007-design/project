import React from "react";
import { NavLink } from "react-router-dom";
import "./About.css";
import profile from "/images/me.png"; // use your image
import { Carousel } from "../component/Carousel";
export const About = () => {
  return (
    <section className="hero">

      <div className="hero-content">
        <div className="text-section">
          <h1>Hello,
            I’m<span> Shraddha!</span></h1>
          <p>
          I'm a dedicated Beautician and Hairstylist. My greatest passion is creating stunning looks that boost my clients' confidence. I specialize in all aspects of beauty, with a strong focus on expert hairstyling. My shop is a space where artistry and professional care come together to bring your vision to life. Let's create something beautiful!
          </p>
         <NavLink to="/contact" >
          <button className="contact-btn">Contact Me</button>
         </NavLink>
        </div>
        <div className="image-section">
          <img src={profile} alt="Han Nguyen" />
        </div>            
      </div>
     
      <h5 className="Certificate"> Certificates </h5>
      <Carousel />

    </section>
  );
}

