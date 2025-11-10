import { NavLink } from "react-router-dom";

export const Not_found = () => {
    return <>
    <h2> 404 Error </h2>
    <h3> Page Not Found </h3>
    <p> The page you are looking for does not exist. Please check the URL or go back to the homepage. </p>
    <NavLink to = "/"> Go to Homepage </NavLink>
    </>
    
};