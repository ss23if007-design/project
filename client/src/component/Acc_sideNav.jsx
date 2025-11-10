import React from "react";
import { NavLink } from "react-router-dom";
import "./Acc_sideNav.css";

export const Acc_sideNav = () => {
    return (
        <div className="Container">
            
            <nav className="side-nav">
                <ul>
                    <li> <NavLink to ="/user-profile"> My Profile </NavLink> </li>
                    <li> <NavLink to ="/user-profile/my-appointments"> Appointment </NavLink> </li>
                
                </ul>
            </nav>
        </div>
    );
};