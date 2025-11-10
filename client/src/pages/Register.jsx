import { useState } from "react";
import { useAuth } from "../store/auth";
import { useNavigate} from "react-router-dom";
import "./Register.css";

export const Register = () => {
    const [user, setUser ] = useState({  //
        username: "",
        email: "",
        phone: "",
        password: ""
    });

    const navigate = useNavigate();

    const { storeTokenInLS } = useAuth();

    // handling the input values 
    const handleInput = (e) => {   //
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
             ...user,
             [name] : value ,  
        });
    };

    // handling the form submit
    const handleSubmit = async (e) => {   //
        e.preventDefault();
        console.log(user);
        
        try{
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        console.log("Response:", response);   //


        if(response.ok){
            const res_data = await response.json(); 
            alert("User registered successfully");  
            console.log("Response Data:", res_data);  
            // store data in local host storage
            storeTokenInLS(res_data.token);  //------------
            setUser({                 
                username: "",
                email: "",
                phone: "",
                password: ""
            });
            navigate("/login"); // Redirect to login page
        } else {    
            alert("User registration failed");
        }
    } catch (error) {
        console.log("register", error);

    }
    };

    return <>
    
    
        <main className="register">
           <div className ="section-registration"> 
            <div className ="container grid grid-two-cols">
                <div className ="registration-image">
                    <img 
                    src="/images/registration.jpg" 
                    alt="pink aesthetic registration img"
                    width="500" 
                    height="500" 
                    /> 
                </div>

                <div className ="registration-form" >
                    <h1 className = "main-heading-mb-3"> Register </h1>
                    <br />

                    <form onSubmit={handleSubmit} > 
                        <div className="Label">
                            <label htmlFor = "username"> Username </label>
                            <input 
                                type="text" 
                                name ="username"
                                placeholder = "Enter your username" 
                                id= "username"
                                required 
                                autoComplete = "off"
                                value={user.username}
                                onChange={handleInput}
                            />
                        </div>
                        
                        <div className="Label"> 
                            <label htmlFor = "email"> Email </label>
                            <input 
                                type="email" 
                                name ="email"
                                placeholder = "Enter your email" 
                                id= "email"
                                required 
                                autoComplete = "off"
                                value={user.email}
                                onChange={handleInput}
                            />
                        </div>

                        <div className="Label">
                            <label htmlFor = "phone"> Phone </label>
                            <input 
                                type="number" 
                                name ="phone"
                                placeholder = "Enter your phone" 
                                id= "phone"
                                required 
                                autoComplete = "off"
                                value={user.phone}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="Label">
                            <label htmlFor = "password"> Password </label>
                            <input 
                                type="password" 
                                name ="password"
                                placeholder = "Enter your password" 
                                id= "password"
                                required 
                                autoComplete = "off"
                                value={user.password}
                                onChange={handleInput}
                            />
                        </div>
                        <br />
                        <button type = "submit" className="btn btn-submit"> Register Now </button>
                        <p> Already have an account? <a href="/login"> Login </a> </p>
                    </form>
                </div>
            </div>
           </div>
        </main>

    
</>;

};