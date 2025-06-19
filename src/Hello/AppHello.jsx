import React from "react"
import Header from "./Header"
import Body from "./Body"


export default function AppHello(){
     const [userName, setUserName] = React.useState("Dixon")

    return(
          <main>
            <Header name={userName}/>
            <Body name={userName}/>
        </main>
    )
}