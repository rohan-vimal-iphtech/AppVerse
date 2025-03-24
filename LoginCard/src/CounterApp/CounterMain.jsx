import React from 'react'
import './Counter.css';
import { CounterInt } from './CounterInt';
import { CounterDec } from './CounterDec';
import BackBtn from '../Card/BackBtn,';
export const CounterMain = () => {
  return (
    <div >
       <div className="backBtn">
                    <BackBtn />
        </div>
        <div className="countHeading">
            <h2>Counter App</h2>
        </div>
          <div className="counterapps">
              <div className="incFunc">
                  <CounterInt />
              </div>
              <div className="incFunc">
                  <CounterDec />
              </div>
          </div>
    </div>
  )
}
