import React, { useEffect, useState } from 'react'
import './Counter.css';
import { CountBtn } from './CountBtn';
export const CounterInt = () => {
    const[count,setCount] = useState(0);
    const[disable,setDisable] = useState(false);

    const Inc = () => {
        setCount(count+1);
    }

    const Dec = () => {
        setCount(count-1);
    }

    const Reset = () => {
        setCount(0);
    }

   useEffect(()=>{
     if(count<=0){
       setDisable(true);
     }else{
        setDisable(false);
     }
   },[count]);

    const handleChange = (e) => {
        const value = e.target.value;
        const formattedValue = value.replace(/[^0-9]/g, "");
        setCount(formattedValue ? Number(formattedValue) : "");
    };


  return (
    <div className='intMain'>
          <div className="counternameheading"><h2>Integer Counter</h2></div>
          <div className='intcount'>
               <CountBtn name='+' func={Inc} disable=''/>
               <div className="container" ><input type='number' className='valueplace' name='name' onChange={handleChange} value={count} /> </div>
               <CountBtn name='-' func={Dec} disable={disable}/>
          </div>
          <div className="resetBtn">
            <CountBtn name='Reset' func={Reset}  disable='' />
          </div>
    </div>
  )
}
