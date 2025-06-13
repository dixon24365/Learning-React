import React from "react"

export default function AppTernary(){
    // const isGoingOut= true

   const [answer, setAnswer] = React.useState(true)

    function  handleClick(){
        return setAnswer(false)
    }

   
    return(
        <main>
            <h1 className="title">Do I feel like going out tonight</h1>
            <button onClick={handleClick} className="value">{answer?"yes":"no "}</button>
        </main>
    )
}