import  styles from './stateCount.module.css'
import React from "react"

export default function StateCount() {
    let [count, setCount] = React.useState(0)

    function add(){
        return(
            setCount(count+1)
        )
    }

    function minus(){
        return(
            setCount(prevCount=> count - 1)
        )
    }
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick={minus} className="minus" aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button onClick={add} className="plus" aria-label="Increase count">+</button>
            </div>
        </main>
    )
}