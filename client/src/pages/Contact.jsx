import React from "react";
import { Panel } from "../component/Panel";
import "./Contact.css";

export const Contact = () => {

  

  return (
    <section className="contact-section">
       <h2 className="get">Get In Touch</h2>
      <div className="contact-container">
        {/* Left side — video */}
        <div className="contact-left">
         
          <video
            src="/videos/shop.mp4"
            controls
            autoPlay
            muted
            loop
            className="contact-video"
          ></video>
        </div>

        {/* Right side — contact info + map */}
        <div className="contact-right">
          <p>
            Need assistance with booking, price,or salon service? 
            Reach out to us and our team will get back to you as soon as possible.
          </p>

          <div className="info-grid">
            <div className="info-item">
              <h4>Phone Number</h4>
              <p>+91 9769388063</p>
            </div>

            <div className="info-item">
              <h4>Email Address</h4>
              <p>shraddhason45@gmail.com</p>
            </div>

            <div className="info-item">
              <h4>Whatsapp</h4>
              <p><a>+91 9769388063</a></p>
            </div>

            <div className="info-item">
              <h4>Our Office</h4>
              <p>PHOENIX BEAUTY PARLOUR, Om Sai Complex, Shope no.12, B-wing, Shirgaon, Badlapur, Maharashtra 421503, India</p>
            </div>
          </div>

          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!4v1760520911701!6m8!1m7!1sPdYZUanL-9ZKkG5h7604JA!2m2!1d19.15954941286212!2d73.23174286799895!3f299.3099458191924!4f-1.948509689247686!5f0.7820865974627469"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Lower banner section */}
      <div className="cta-banner">
        <div className="cta-text">
          <h2>Basic to Advanced classes available for professional Bridal Makeup</h2>
           
        </div>
        <div >
          <p className="sub-head">Call or text us for more information</p>
        </div>
      </div>
    </section>
  );
};


