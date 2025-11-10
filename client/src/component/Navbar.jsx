import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar = () => {
    const { isLoggedIn } = useAuth();
    console.log("Navbar - login or not", isLoggedIn);

    return ( <>
        <header>
            <div className="allcontainer-nav">
                <div className="logo-brand">
                    <NavLink to="/">
                        <img 
                            src="/images/Logo.png"
                            alt="logo"
                            width="100px"
                            height="auto"  
                        />
                    </NavLink>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" >About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" >Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" >Service</NavLink>
                        </li>
                        {isLoggedIn ? (
                            <>  <li>
                                    <NavLink to="/user-profile" >Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/logout" >Logout</NavLink>
                                </li>
                                
                            </>
                        ) : (
                            <>
                                
                                <li>
                                    <NavLink to="/login" >Login</NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
        </>
    );
};