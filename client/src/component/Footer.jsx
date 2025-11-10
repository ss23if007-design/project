import React from 'react';
import { NavLink } from "react-router-dom";
import "./footer.css";
import { Panel } from './Panel';

export const Footer = () => {
    return (
<footer>
  <div className="footer-container">
     <div className="footer-section">
      <h3>Shop Open</h3>
      <p>Sun - Sat | 9:00am to 9:00pm</p>
      <Panel />  
    </div>
    <div className="footer-section">
      <h3>Stay Connected</h3>
      <p>Follow us on social media for the latest updates and offers!</p>
      <div className ="social-links">
        <a href="#">Facebook</a>
        <a href="https://www.instagram.com/_phoenix_beauty_05_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</a>
        <a href="https://wa.me/9769388063">Whatsapp</a>
      </div>
    </div>
   <div className="footer-section">
    <h3>Quick Links</h3>
   <ul>
        <li> <NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="/about">About</NavLink></li>
        <li> <NavLink to="/contact">Contact</NavLink></li>
        <li> <NavLink to="/services"> Service </NavLink></li>     
   </ul>
  </div>
  </div>
    <div className="footer-bottom">
        <p>&copy; 2025 Phoenix Beauty Salon. All rights reserved.</p>
    </div>
</footer>
        
    );
};