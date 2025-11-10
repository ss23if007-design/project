import React from "react";
import { Services_section_makeup } from "../component/Services_section_makeup";
import { Panel } from "../component/Panel";
import "./Service.css";
import {NavLink} from "react-router-dom";


export const Service = () => {
    
    
    return <>
    <section className = "Big-section">
        <div className = "containerrr">
            <h2 className = "main-heading"> Our Services </h2>
            <p className = "main-para"> We proivide all the service ensuring the luxury experience. You may book appointement with the help of button on the the footer.</p>
            
            
        </div>
    </section>  
        <div className = "container-grid-grid-three-cols">
            <Services_section_makeup />
        </div>
    {/* </main> */}
    
    
    </>
};