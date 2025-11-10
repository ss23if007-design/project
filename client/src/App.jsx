import {BrowserRouter, Routes, Route}  from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Service } from "./pages/Service";
import { Register } from "./pages/Register";
import { LogIn } from "./pages/LogIn";
import { Contact } from "./pages/Contact";  
import { Not_found } from "./pages/Not_found"; 
import { Profile } from "./pages/Profile";
import { MyAppointments } from "./pages/MyAppointments";
import { Logout } from "./pages/Logout";
//componenents
import { Navbar } from "./component/Navbar";
import { Footer } from "./component/Footer";
import { Services_section_hair, Services_section_skin, Services_section_makeup} from "./component/Services_section_makeup";
import { Panel } from "./component/Panel";
//admin 
import {AdminUsers} from "./component/layouts/Admin-users";
import { Adminlayout } from "./component/layouts/Admin-layout";
import {AdminAppointments} from "./component/layouts/Admin-appointments";

export const App = () => {
  return (
  <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Service/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element= {<LogIn/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Not_found/>} />
        <Route path="/user-profile" element={<Profile/>} />
        <Route path="/user-profile/my-appointments" element={<MyAppointments/>} />
        <Route path="/user-profile/booking" element={<Panel/>} />

        <Route path="logout" element={<Logout/>} />
        
        {/* Nested route */}
        <Route path="/admin" element={<Adminlayout/>} >
          <Route path="users" element={<AdminUsers/>} />
          <Route path="appointments" element={<AdminAppointments/>} />
        </Route>

      </Routes>
      <Footer />
    </BrowserRouter>  
  </>
 );
};

export default App;


