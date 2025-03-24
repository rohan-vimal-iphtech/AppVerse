import React from 'react'
import { Login } from './Login'
import "./Front.css";

export const Front = () => {
  return (
    <div className='bg'>
      <div className='left-half'>
        <div className="left">
          <h1>Welcome To </h1>
          <div className='logo'>
            <img id='logo' src="./assets/logo.png" alt='logo'></img><br></br>
            <h3>Spacer</h3>
          </div>
          <div className='para'>
            <p id='para'>I am developing a website that showcases my demo projects. The site features card components that will display details about each project. These cards will serve as a clickable interface to explore more about each project.</p>
          </div>
        </div>
      </div>



      <div className='right-half'>
        <div className="right">
          <Login />
        </div>
      </div>
    </div>
  )
}
