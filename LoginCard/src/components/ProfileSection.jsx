import React,{useState} from 'react'
import './component.css'
import { useDispatch, useSelector } from "react-redux";
import PopUpModel from './PopUpModel';
const ProfileSection = () => {
    const user = useSelector((state) => state.auth.user);
   
  return (
    <div className='profile-content'>
          <div className="profile-pic" >
            <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png' alt='img' id='profile-pic' />
          </div>
          <div className="profile-name">
            <h2>{user.username.toUpperCase()}</h2>
          </div>
          
    </div>
  )
}

export default ProfileSection