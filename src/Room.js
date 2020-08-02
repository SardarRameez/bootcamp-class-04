import React, { useState } from 'react'
import './App.css'

export const Room = () => {
    let [isLit, setLit]=useState(true);
    let [temp, setTemp]=useState(23);
    return (
        <div className={"grid " + (isLit?"On":"Off")}>
            <div className="roomLit">
                <h3>Room light is {isLit?"On":"Off"}</h3>
                <button className="btn" onClick={()=>setLit(true)}>Light On</button>
                <button className="btn" onClick={()=>setLit(false)}>Light Off</button>
            </div>
            <div className="roomTemp">
                <h3>Room Temprature is {temp} &#8451;</h3>
                <button className="btn" onClick={()=>setTemp(temp+=1)}>+</button>
                <button className="btn" onClick={()=>setTemp(temp-=1)}>-</button>
            </div>
        </div>
    )
}
