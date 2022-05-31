import React from "react";

export default function Question({ AllQuestions,setAllQuestions,options,setOptions,currQues,setCurrQues, correct}){
    const [selected , setSelected] = React.useState("")
    const[score ,setScore] = React.useState(0)
    const[result,setResult]= React.useState(false)
    function handleSelect(i){
        if(selected === i && selected === correct){
            return "select"
        }else if(selected === i && selected !== correct){
            return "wrong"
        }else if(i === correct){
            return "select"
        }
    }
    function handleCheck(i){
        setSelected(i) 
        if (i===correct) setScore(score + 1)
    }
    function handleNextQuestion(){   
        setCurrQues(prevCurr => prevCurr + 1)
        setSelected()   
    }
    function handleButton(){
        setResult(prevRes => !prevRes)
    }
        
    
   
    return(
        <div className="question-div">
            <p className="question-num">question {currQues + 1}/5</p>
            <h1 className="question">{currQues + 1}: {AllQuestions[currQues].question}</h1>
            <div className="button-div">
            {options && options.map(i => <button
            onClick={() => handleCheck(i)}
             className={`buttons ${selected && handleSelect(i)}`}
             key={i}
             disabled={selected}
             >{i}</button>)}
             </div>
            <div className="next-button-div">
                 
            {currQues < 4 ?
                <button className="button" onClick={handleNextQuestion}>Next Question</button>
                :
                <button className="button" onClick={handleButton}> Result</button>}
                </div>
                <div className="result-p"> 
               {result && <p>You Have {score}/5 Correct Answers</p>}
                </div>           
           
        </div>
    )
}
