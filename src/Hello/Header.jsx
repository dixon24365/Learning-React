import './index.css'
import React from "react"
import avatar from "./icons/user.png"

export default function Header(props) {

    return (
        <header>
            <img src={avatar} />
            <p>{props.name}</p>
        </header>
    )
}