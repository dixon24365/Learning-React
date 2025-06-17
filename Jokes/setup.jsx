import React from "react"

function Setup(props){
    const [isShown, setIsShown] = React.useState(false)

    function handleClick(){

        setIsShown(prevShown => !prevShown)
    console.log(isShown)}


    return(
        <>
        <h2>{props.setup}</h2>
       {isShown && <h4>{props.punchline}</h4>} 
        <button onClick={handleClick}>Show punchline</button>
        </>
    )
}

export default Setup