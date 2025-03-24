import React from "react";
import './BtnSign.css';
function Signup({name , onClick }) {
  
  return (
    <button className="btnsign" onClick={onClick} >
      {name}
    </button>
  );
}

export default Signup;