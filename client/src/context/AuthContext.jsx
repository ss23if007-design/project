import { createContext, useState, useEffect } from "react"; 

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token") || "");

    const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);  
  };

  let isLoggedIn = !!token;
  console.log("token, token)
  console.log("isLoggedIn",isLoggedIn);



  const LogoutUser = () => {

    setToken("");
    return localStorage.removeItem("token");
  };

  useEffect(() => {
    const userAuthentication = async () => {
      if (token) {
        try {
          const response = await fetch("http://localhost:5000/api/auth/user", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` }
          });
          if (response.ok) {
            const data = await response.json();
            setUser(data);
            storeTokenInLS(data.token)
          } 
        } catch (err) {
          console.error("Error fetching user:", err);
        }
      }
    }; 
    userAuthentication();
  }, [token]);


  return (
    <AuthContext.Provider value={{ user, token, storeTokenInLS, LogoutUser,isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};




