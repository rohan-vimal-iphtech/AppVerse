import React from 'react'
import "./CardMain.css"
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export const Card = ({name , func}) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    
  return (
    <div className={`card ${isHovered ? "bgChange" : ""}`}
    onMouseEnter={() => {setIsHovered(true)}}
    onMouseLeave={() => {setIsHovered(false)}}
     
      onClick={func}
      
      
    >
      <h2 className='card-name'> {name}</h2>
    </div>

  )
}
