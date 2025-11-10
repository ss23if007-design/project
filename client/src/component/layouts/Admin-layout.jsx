
import { NavLink, Outlet } from "react-router-dom"
import "./Admin-layout.css"


export const Adminlayout = () => {
    return <>
        
        
        <header>
            <nav className="side-nav">
                <ul>
                    <li> <NavLink to ="/admin/users"> Users </NavLink> </li>
                    <li> <NavLink to ="/admin/appointments"> Appointments </NavLink> </li>
                
                </ul>
            </nav>
        </header>
        <Outlet/>



    </>
}
