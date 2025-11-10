import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import "./LogIn.css";

export const LogIn = () => {

   
    const [user, setUser ] = useState({
        email: "",
        password: ""
    });
    const {storeTokenInLS} = useAuth();
    const navigate = useNavigate();


    // handling the input values
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        //convert into an object 
        setUser({
            ...user,
            [name] : value ,
        });
    };

    //handling the form submit 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
        
            const data = await response.json(); // Only call this ONCE
            
            if (response.ok) {
                
                alert("Login successful!");
                console.log("Response Data:", data);
                storeTokenInLS(data.token);
                setUser({email:"", password: ""});
                navigate("/"); // Redirect if needed
            } else {
                alert(data.message || "Login failed!");
            }
        }catch (error) {
            console.error("Login error:", error);
            alert("Network error. Please try again.");
        }
        
        
    };

    return <>
    <section className = "login">
        <main>
            <div className = "section-login">
                <div className = "container grid grid-two-cols">
                    <div className = "login-form">
                        <h1 className = "main-heading"> Log In </h1>
                        <br />

                        <form onSubmit = {handleSubmit} >
                            <div>
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email"
                                    name="email"
                                    placeholder="Enter your Email"
                                    id="email"
                                    required
                                    autoComplete="off"
                                    value={user.email}
                                    onChange={handleInput}
                                />

                            </div>

                            <div>
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    id="password"
                                    required
                                    autoComplete="off"
                                    value={user.password}
                                    onChange={handleInput}
                                /> 
                            </div>
                            <br/>
                            <button type="submit" className="btn btn-primary"> Log In </button>
                            <p> Don't have an Account? <a href="/register"> Register </a> </p>
                        </form>
                    </div>
                    <div className = "login-Image" >
                        <img 
                            src = "/images/login.jpg" 
                            alt = "blue aesthetic login img"
                            width = "500"
                            height = "500"
                        />
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>

};