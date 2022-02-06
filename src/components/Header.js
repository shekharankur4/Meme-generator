import React from "react"
import face from "../images/troll-face.png"
export default function Header(){
    return(
        <header className="header">
            <img src={face} className="header--image"/>
            <h2 className="header--title">MemeGenerator</h2>
            <h4 className="header--project">Create your desirable meme</h4>
        </header>
    )
}