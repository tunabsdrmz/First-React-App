import React from "react"
import Main from "./components/Main"
import Game from "./components/Game"
import "./style.css"

export default function App(){
    const [AllQuestions , setAllQuestions] = React.useState()
    
    React.useEffect(()=>{  
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
        .then(res => res.json())
        .then(data => setAllQuestions(data.results))       
    },[])
    
    const [button , setButton] = React.useState(false)
    function mainButton(){
        setButton(prevButton => prevButton = true)
    }
    
    return(
        <div className="app-main-container">
            {button === false ? <Main handleClick={mainButton}/>: <Game 
            button={button}
            setButton={setButton}
            AllQuestions={AllQuestions}
            setAllQuestions={setAllQuestions}/>}
        </div>
    )
}
/*
Bu projeyi 5 sorunun da görüntülendiği ana şeklinde yap 
cevaplar için for loopunun içinde currquesi bastırmayı ve onun içinde de
for each metoduyla cevapları karıştırmayo dene sonra da 
mapleyerek soruları bastır bence iş yapar  
*/ 