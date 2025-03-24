import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import PopUpModel from './PopUpModel';
import './component.css';
import { useNavigate } from 'react-router-dom';
import { logout } from "../Redux/authSlice";
const UserProfile = () => {
    const user = useSelector((state) => state.auth.user);
    const [isOpen, setIsOpen] = useState(false); // State to control modal visibility
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // Function to open modal
    const openModal = () => {
        setIsOpen(true);


    };

    // Function to close modal
    const closeModal = () => {
        setIsOpen(false);
    };

    const handleLogout = () => {
        console.log('work');
        navigate("/");
        
    };

    const handleDelete = () => {
        dispatch(logout(user));
        navigate('/');
       
    };
    return (
        <div className="userprofile">
            <div className="userprofile-inner">
                <div className="updatePencil">
                    <i className="fa-solid fa-pencil" onClick={openModal}></i>
                </div>

                <div className="update-user-profile">
                    <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                        alt="Profile"
                        style={{ width: '5rem', height: '5rem', borderRadius: '50%', cursor: 'pointer' }}

                    />
                    <h2 id='update-name'> {user?.username.toUpperCase()}</h2>

                </div>






                <p id='update-details'><b>Email</b> :&nbsp;&nbsp;{user?.email}</p>
                <p id='update-details'><b>DOB</b> :&nbsp;&nbsp;{user?.dob}</p>
                <p id='update-details'><b>Gender</b> :&nbsp;&nbsp;{user?.gender}</p>
                <div className="sidebar-btns">
                    <button  id='update-card-buttons' style={{ color: '#0B4FA4', border: '1px solid #0B4FA4', padding: '2px' }} onClick={handleLogout}>Logout</button>
                    <button  id='update-card-buttons' style={{ color: 'red', border: '1px solid red', padding: '2px' }} onClick={handleDelete}>Delete User</button>
                </div>
                {isOpen && <PopUpModel closeModal={closeModal} />}
            </div>
        </div>
    )
}

export default UserProfile