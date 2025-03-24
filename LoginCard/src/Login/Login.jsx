import React from 'react';
import './Login.css';
import LoginButton from './LoginButton';
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Signup from './Singup';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/authSlice";
import { ToastContainer, toast } from 'react-toastify';
export const Login = () => {
  
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const[isValid,setIsValid]  = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const[passVisibleIcon,setPassVisibleIcon] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const user = useSelector((state) => state.auth.user);
  
  const handleCheckboxChange = () => {

    setIsChecked(!isChecked);
  };


  const handleChange =(e)=>{
    const { name, value } = e.target;
   
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
   
  };

  const validateForm = () => {
    let errors = {};
    let valid = true;

   

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
        errors.password ="Password must be at least 8 characters, include upper and lower case letters, a number and a special character.";
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

  const showPass = ()=>{
    console.log("working");
    setPassVisibleIcon(!passVisibleIcon);
    setShowPassword(!showPassword);
  }
  
  useEffect(() => {
    
  },[email,password,passVisibleIcon]);


  const handleSubmit = (e) => {
    e.preventDefault();
   
    setFormSubmitted(true);
    let isFormValid = false;
    if(email.length > 1 && password.length > 1){
       isFormValid = validateForm();
    }
    setIsValid(isFormValid); // Ensure the latest form state is valid
     
    if (user && user.email === email && user.password === password) {
      dispatch(login(user));
     
      navigate("/card"); // Redirect to Dashboard after login
      toast.success("Login successful!");
  } else {
    toast.error("Invalid credentials");
  }
};



  return (
    <div className='login'>
      <div className='heading'>
        <h4>Login your account</h4>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          
          <div className='name'><label ><b>E-mail Address</b><br></br> <input value={email} name='email' placeholder='Enter your mail' style={{ marginTop: "2em", border: "none", background: "transparent", outline: "none", color: "black", fontSize: "small" }} type='text' onChange={handleChange}></input></label><br></br></div>
          { errors.email && <p style={{ color: "red", fontSize: "12px",marginLeft:"0.3rem",marginBottom:"0.5rem" }}>{errors.email}</p>}
          <div className='name'><label><b>Password</b> <br></br> <input value={password} type={showPassword ?"text" : "password"}  name='password' placeholder='Enter your password' style={{ marginTop: "2em", border: "none", background: "transparent", outline: "none", color: "black", fontSize: "small" }}  onChange={handleChange}></input><span className='showIcon' onClick={showPass}>{!passVisibleIcon ? <i className="fa-regular fa-eye-slash"></i> :<i className="fa-regular fa-eye"></i>}</span></label><br></br></div>
          { errors.password && <p style={{ color: "red", fontSize: "10.5px",marginLeft:"0.3rem",marginBottom:"0.5rem" }}>{errors.password}</p>}  
          <div style={{display:"flex",alignItems:"center" }} >
            <input
              type="checkbox"
              id="terms"
              checked={isChecked}
              onChange={handleCheckboxChange}
              style={{ marginRight: "4px"}}
            />
            <label className="terms-label" htmlFor="terms" >By Login up I Agree with <a href='#' style={{textDecoration:"none" , color : "#0099ff"}}>Terms & Conditions</a> </label>
          </div>
          
          
          
        </form>
        <div className="btns">
          <LoginButton name="Log In" func={handleSubmit} disabled={!isChecked}  />
          
            <Signup name="SignUp" onClick={()=> navigate('/signup')}/>
          </div>
      </div>
    </div>
  )
}
