import React from 'react'
import  './Counter.css';
export const CountBtn = ({name , func , disable}) => {
    
  return (
    <div>
        <div className="countbtn" >
            <button disabled={disable} className='counterbutton' onClick={func}>{name}</button>
        </div>
    </div>
  )
}
