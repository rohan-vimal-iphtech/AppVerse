import React from "react";
import './BtnLog.css';
function LoginButton({name,func,disabled}) {
  
  return (
    
    <button 
     className='btnlog'
     onClick={func}
      disabled={disabled}
     
    >
      {name}
    </button>
  );
}

export default LoginButton;
