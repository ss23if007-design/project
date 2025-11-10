import React from "react"
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import {Panel} from "./Panel";
import "./Banner.css"

export const Banner = () => {
   const { isLoggedIn  } = useAuth();

    return <>
    <head> <style>
@import url('https://fonts.googleapis.com/css2?family=Imperial+Script&family=Mukta:wght@200;300;400;500;600;700;800&family=WindSong:wght@400;500&family=Yatra+One&display=swap');
</style> </head>
    
    <div className="Banner">
    <section className="Text-section">
    <div className="Salon-Name"> 
        <h5 className="Phoenix "> PHOENIX </h5>
        <h2 className="beauty-salon"> Beauty Salon </h2>
    </div>

    <div>
        <h3 className="Description"> 
            {isLoggedIn ? "Welcome back!" : "Welcome!"} we redefine your shine with expert touch and luxury care 
            your rebirth of beauty   
        </h3>
        
        <div className="book"> <Panel /></div>
        
    </div>
    </section>

    <section className = "imgs-section ">
    <img src="/images/Home_img.jpg" alt=""/>
    <img src="/images/Goldenspiral.png" alt=""/>
    </section>
    </div>
    </>

};