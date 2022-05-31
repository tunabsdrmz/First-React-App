import React from "react"

export default function Main(props){
    return (
        <main>
            <h1 id="title">Quizzical</h1>
            <h2 id="description">Some description if needed</h2>
            <button id="start-quiz" onClick={props.handleClick}>Start quiz</button>
        </main>
    )
        
}
