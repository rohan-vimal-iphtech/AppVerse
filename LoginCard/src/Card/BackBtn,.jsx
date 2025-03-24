import React from 'react'
import { useNavigate } from 'react-router-dom'
const BackBtn = () => {
    const navigate = useNavigate();

    const back = ()=>{
        navigate(-1);  // Navigate to the previous page
    }
  return (
    <div className='backbtn' >
        <button onClick={back}  style={{background:'none' , border:'none' , color:' hsl(213, 87%, 34%)' , fontSize:'1.2rem'}}><i className="fa-solid fa-chevron-left"></i>Back</button>
    </div>
  )
}

export default BackBtn