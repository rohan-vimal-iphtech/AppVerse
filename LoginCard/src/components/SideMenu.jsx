import React, { useState } from 'react';
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/authSlice";
import ProfileSection from './ProfileSection';
import './component.css';
import { FaBars } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";
const SideMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };



    return (
        <>
            {/* Three-dot menu (Visible only on mobile) */}
            {!isOpen && <button className="menu-toggle" onClick={toggleSidebar}><FaBars /></button>}

            {/* Sidebar */}
            <div className={`side-menu-main ${isOpen ? 'active' : ''}`}>
                <span className="close-sidebar" onClick={closeSidebar}>&times;</span>

                <div className='profile-section'>
                    <ProfileSection />
                </div>

                <hr />

                <div className="side-menu-body">
                    <NavLink to="/card" className="side-menu-card" onClick={closeSidebar} end>
                    <span style={{display:'flex',flexDirection:'row',alignItems:'center' , gap:'0.3rem', marginLeft:'0.45rem'}}><MdOutlineDashboard size={18}/> Dashboard</span>
                    </NavLink>
                    <NavLink to="/card/countapp" className="side-menu-card" onClick={closeSidebar}><i className="fa-solid fa-plus-minus" style={{ fontSize: '16px', padding: '6px' }}></i>Counter App</NavLink>
                    <NavLink to="/card/todoapp" className="side-menu-card" onClick={closeSidebar}><i className="fa-solid fa-clipboard-list" style={{ fontSize: '16px', padding: '6px' }}></i>Todo List</NavLink>
                    <NavLink to="/card/movieapp" className="side-menu-card" onClick={closeSidebar}><i class="fa-solid fa-video" style={{ fontSize: '16px', padding: '6px' }}></i>Movie Search App</NavLink>
                    <NavLink to="/card/profile" className="side-menu-card" onClick={closeSidebar}>
                        <i className="fa-regular fa-circle-user" style={{ fontSize: '20px', padding: '6px' }}></i> Profile
                    </NavLink>
                </div>


            </div>
        </>
    );
};

export default SideMenu;
