import React, { useEffect, useState } from 'react'
import './Counter.css';
import { CountBtn } from './CountBtn';
export const CounterDec = () => {
    const [count,setCount] = useState('0.0');
    const[disable,setDisable] = useState(false);

    const Inc = () => {
        setCount((prev) => (parseFloat(prev) + 0.1).toFixed(1));
    }
    const Dec = () => {
        setCount((prev) => (parseFloat(prev) - 0.1).toFixed(1));
    }
    const Reset = () => {
        setCount('0.0');
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
        let lastDigit = value.slice(-1); 

        if (!isNaN(lastDigit) && lastDigit !== ' ') {
            setCount(`0.${lastDigit}`);
        }
    };
    return (
        <div className='intMain'>
           <div className="counternameheading"><h2>Decimal Counter</h2></div>
            <div className='intcount'>
                <CountBtn name='+' func={Inc}  disable=''/>
                <div className="container" ><input className='valueplace' type='text' name='name' onChange={handleChange} value={count} /> </div>
                <CountBtn name='-' func={Dec}  disable={disable} />
            </div>
            <div className="resetBtn">
                <CountBtn name='Reset' func={Reset}   disable=''/>
            </div>
        </div>
    )
}
