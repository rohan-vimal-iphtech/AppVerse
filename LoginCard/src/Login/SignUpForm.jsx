import React from 'react';
import './Login.css';
import LoginButton from './LoginButton';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Signup from './Singup';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { subYears } from "date-fns";
import { useDispatch } from "react-redux";
import { signUp } from "../Redux/authSlice";
import { ToastContainer, toast } from 'react-toastify';
export const SignUpForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [passVisibleIcon, setPassVisibleIcon] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [dob, setDob] = useState(null);
    const [gender, setGender] = useState("");


    const today = new Date();
    const minDate = subYears(today, 100); // At most 100 years old
    const maxDate = subYears(today, 18);
    const handleCheckboxChange = () => {

        setIsChecked(!isChecked);
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
         
            if (name === "username") {
                if (username.length < 20) setUsername(value);
                else setUsername(username.slice(0,username.length-1));
            }
        
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);

    };

    const validateForm = () => {
        let errors = {};
        let valid = true;

        if (!username) {
            errors.username = "Name is required";
            valid = false;
        }
        if (!dob) {
            errors.dob = 'Date of Birth is Required';
            valid = false;
        }
        if (!gender) {
            errors.gender = 'Please select Gender';
            valid = false;
        }

        if (!email) {
            errors.email = "Email is required";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Invalid email format";
            valid = false;
        }


        if (!password) {
            errors.password = "Password is required";
            valid = false;
        } else {
            if (password.length < 8) {
                errors.password = "Password must be at least 8 characters, include upper and lower case letters, a number and a special character.";
                valid = false;
            }
            if (!/[A-Z]/.test(password)) {
                errors.password = "Password must be at least 8 characters, include upper and lower case letters, a number and a special character.";
                valid = false;
            }
            if (!/[a-z]/.test(password)) {
                errors.password = "Password must be at least 8 characters, include upper and lower case letters, a number and a special character.";
            }
            if (!/[0-9]/.test(password)) {
                errors.password = "Password must be at least 8 characters, include upper and lower case letters, a number and a special character.";
                valid = false;
            }
            if (!/[!@#$%^&*]/.test(password)) {
                errors.password = "Password must be at least 8 characters, include upper and lower case letters, a number and a special character.";
                valid = false;
            }
        }

        setErrors(errors);
        return valid;

    };

    const showPass = () => {
        
        setPassVisibleIcon(!passVisibleIcon);
        setShowPassword(!showPassword);
    }

    useEffect(() => {

    }, [username, email, password, passVisibleIcon]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedDob = dob.toISOString().split("T")[0];
        const userData = { username, email, password, dob: formattedDob, gender };
        setFormSubmitted(true);
        let isFormValid = false;
        if (username.length > 1 && email.length > 1 && password.length > 1) {
            isFormValid = validateForm();
        }
        setIsValid(isFormValid); // Ensure the latest form state is valid

        if (isFormValid && isChecked) {
            dispatch(signUp(userData));
            navigate("/Card");
            toast.success("Account Created");
        }
    };



    return (
        <div className='login'>
            <div className='heading'>
                <h4>Create your account</h4>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit} >
                    <div className='name'>
                        <label><b>Name</b> <br></br> <input value={username} name='username' placeholder='Enter your name' style={{ marginTop: "2em", border: "none", background: "transparent", outline: "none", color: "black", fontSize: "small" }} type='text' onChange={handleChange} ></input></label><br></br>

                    </div>
                    {errors.username && <p style={{ color: "red", fontSize: "12px", marginLeft: "0.3rem", marginBottom: "0.5rem" }}>{errors.username}</p>}
                    <div className='name'><label ><b>E-mail Address</b><br></br> <input value={email} name='email' placeholder='Enter your mail' style={{ marginTop: "2em", border: "none", background: "transparent", outline: "none", color: "black", fontSize: "small" }} type='text' onChange={handleChange}></input></label><br></br></div>
                    {errors.email && <p style={{ color: "red", fontSize: "12px", marginLeft: "0.3rem", marginBottom: "0.5rem" }}>{errors.email}</p>}
                    <div className='name'><label><b>Password</b> <br></br> <input value={password} type={showPassword ? "text" : "password"} name='password' placeholder='Enter your password' style={{ marginTop: "2em", border: "none", background: "transparent", outline: "none", color: "black", fontSize: "small" }} onChange={handleChange}></input><span className='showIcon' onClick={showPass}>{!passVisibleIcon ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}</span></label><br></br></div>
                    {errors.password && <p style={{ color: "red", fontSize: "10.5px", marginLeft: "0.3rem", marginBottom: "0.5rem" }}>{errors.password}</p>}
                    <div className="dobAndGender">
                        <div style={{width: '15rem',borderBottom: '4px solid #87c1d4',marginBottom:'0.5rem'}} >
                            <label>
                                <b>Date Of Birth</b><br></br>
                                <DatePicker selected={dob} onChange={(date) => setDob(date)} dateFormat="dd-MM-yyyy" showYearDropdown scrollableYearDropdown
                                    yearDropdownItemNumber={100}
                                    maxDate={maxDate} // Prevent future dates
                                    minDate={minDate}
                                    className="dob"
                                    placeholderText="dd-mm-yyyy"
                                    name='dob'
                                    
                                />
                            </label>
                        </div>
                        {errors.dob && <p style={{ color: "red", fontSize: "12px", marginLeft: "0.3rem" }}>{errors.dob}</p>}
                        <div style={{width: '15rem',borderBottom: '4px solid #87c1d4', marginBottom: "0.5rem"}}>
                            <b>Gender</b><br></br>
                            <select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="gender"
                                name='gender'

                            >
                                <option value="" disabled >Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        {errors.gender && <p style={{ color: "red", fontSize: "12px", marginLeft: "0.3rem", marginBottom: "0.5rem" }}>{errors.gender}</p>}
                    </div>
                    <div style={{ display: "flex", alignItems: "center" ,marginBottom:'0.5rem'}} >
                        <input
                            type="checkbox"
                            id="terms"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            style={{ marginRight: "4px" }}
                        />
                        <label className="terms-label" htmlFor="terms" >By Login up I Agree with <a href='#' style={{ textDecoration: "none", color: "#0099ff" }}>Terms & Conditions</a> </label>
                    </div>




                </form>
                <div className="btns">
                    <LoginButton name="Create" func={handleSubmit} disabled={!isChecked} />

                    <Signup name="Login" onClick={() => navigate('/')} />
                </div>
            </div >
        </div >
    )
}
