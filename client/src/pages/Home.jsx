import React from 'react';
import { NavLink }   from 'react-router-dom';
import {Feedback_section} from '../component/Feedback_section';
import { Home_service_section } from '../component/Home_service_card';
import { Banner } from '../component/Banner';
import { Panel } from '../component/Panel';
import "../index.css";




export const Home = () => {

    return <>
        

        
         <div>
    {/* Hero Section */}
    <Banner/>

    
  

    {/* Services Preview */}
    <section>
      <div className='head'>
      <div className='line'width="10px"> </div>
      <p className="Our-services"> Services</p>
      <div className='line' width="30px"> </div>
      </div>
      <div className="Home_service-section">
        <Home_service_section />
      </div>
      <div className="big">  <NavLink to = "/services"> <button className='Button'>Explore </button> </NavLink>   </div>
    </section>

    

    {/* Feedback/Testimonials */}
    <section className='Feedback-section'>
      <h2 style={{textAlign: "center", padding:"2rem" }}>What Our Clients Say</h2>
      <Feedback_section />
    </section>
  </div>

    
    </>;

};
