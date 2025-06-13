import React from 'react'
import './changeState.css'

export default function AppState(){

    let [isImportant, setIsImportant]= React.useState("Yes")

    function handleClick(){
        return setIsImportant('Heck Yes')
    }
    return(
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button onClick={handleClick} className="value">{isImportant}</button>
        </main>
    )
}