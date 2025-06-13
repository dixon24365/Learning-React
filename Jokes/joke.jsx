import Setup from "./setup"

import jokesData from "../Jokes/jokesData"

export default function Joke(){
    const jokeElements = jokesData.map((joke)=>{
        return <Setup  setup={joke.setup}
        punchline={joke.punchline} />
    })
 
    return (
        <>
        {jokeElements}
        </>
    )

}

