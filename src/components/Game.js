import React, { useEffect,useState } from "react";
import Question from "./Question";

export default function Game({AllQuestions,setAllQuestions,button,setButton}){
    const [options , setOptions] = useState()
    const[currQues, setCurrQues] = useState(0)
    useEffect(()=>{    
        setOptions(AllQuestions && handleShuffle([
            AllQuestions[currQues]?.correct_answer,
            ...AllQuestions[currQues]?.incorrect_answers
        ]))
    },[AllQuestions, currQues])
    const handleShuffle = (optionss)=>{
        return optionss.sort(() => Math.random() - 0.5)
    }
   
    
 
    return(
        <div className="game-container">
            <Question 
            AllQuestions={AllQuestions}
            setAllQuestions={setAllQuestions}
            options={options}
            setOptions={setOptions}
            currQues={currQues}
            setCurrQues={setCurrQues}
            correct={AllQuestions[currQues]?.correct_answer}
            />
            
        </div>
    )
}
/*YARIN ÇIKAN SORU VE CEVAPLARDA NEDEN KELİME ANLAŞILMAMAZLIĞI
 OLUYOR ÖĞREN VE DÜZELT ARTI OLARAK SORUNUN CEVABI HEP AYNI 
 ŞIKTA ONU DÜZELT ARTI OLARAK DOĞRU VE YANLIŞ RENKLERİNİ EKLE
 FOOTERDAKİ 3/5 KISMINI DÜZELT VE YİNE FOOTERDA BUTONA 
 TIKLANDIĞINDA NE OLUCAĞINI HALLET*/