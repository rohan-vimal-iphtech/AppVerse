import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './component.css';
import { signUp } from "../Redux/authSlice";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const PopUpModel = ({ closeModal }) => {
    const user = useSelector((state) => state.auth.user); // Get user data from Redux
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [username, setUsername] = useState(user?.username || "");
    const [email, setEmail] = useState(user?.email || "");
    const [password, setPassword] = useState(user?.password || "");
    const [dob, setDob] = useState(user?.dob || "");
    const [gender, setGender] = useState(user?.gender || "");


    useEffect(() => {
        setUsername(user?.username || "");
        setEmail(user?.email || "");
        setPassword(user?.password || "");
        setDob(user?.dob || "");
        setGender(user?.gender || "");
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "username") setUsername(value);
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
        if (name === "dob") setDob(value);
        if (name === "gender") setGender(value);
    };

    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();


        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            return age - 1;
        }
        return age;
    };

    const handleUpdate = () => {

        if (calculateAge(dob) < 18) {
            toast.error("You must be at least 18 years old to update your DOB.");
            return;
        }

        const data = { username, email, password, dob, gender };
        dispatch(signUp(data));
        toast.success("Account Updated");
        closeModal();
    };



    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span style={{width:'70%'}}><h2>Update Profile</h2></span>
              <span className="close-button" onClick={closeModal}>&times;</span>
                
                <div className="content-updation">
                    <div className="input-group">
                        <label>Name:</label>
                        <input value={username} className="update-input" onChange={handleChange} name="username" />
                    </div>

                    <div className="input-group">
                        <label>Email:</label>
                        <input value={email} className="update-input" onChange={handleChange} name="email" />
                    </div>

                    <div className="input-group">
                        <label>Password:</label>
                        <input type="text" value={password} className="update-input" onChange={handleChange} name="password" />
                    </div>

                    <div className="input-group">
                        <label>DOB:</label>
                        <input type="date" value={dob} className="update-input" onChange={handleChange} name="dob" />
                    </div>

                    <div className="input-group">
                        <label>Gender:</label>
                        <select value={gender} onChange={handleChange} name="gender" className="update-input">
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="popup-update-button" style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
                    <button onClick={handleUpdate} style={{ color: 'green', border: '1px solid green', background: 'none', borderRadius: '3rem', width: '30%', padding: '0.4rem' }}>
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopUpModel;
