import React, { useState } from "react"
import  './stateCount.css'
import Count from "./Count"

export default function StateCount() {

    const [countt, setCountt] = React.useState(0)

    function handleMinus(){
         setCountt(countt-1)
    }
    
    function handlePlus(){
         setCountt(countt + 1)
    }
    

    return (
        <main className="container">
            <h1>How may times will Dickson say "Hi" in this section</h1>
                <div className="counter">
                    <button onClick={handleMinus} className='minus'>-</button>
                   <Count number ={countt}/>
                    <button onClick={handlePlus} className='plus'>+</button>
                </div>
        </main>
    )
}