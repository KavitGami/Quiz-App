import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react'
import "./QuizView.css";
const QuizView = ({questions,currentQuestion,handleAnswerClick,changeColor,reverseColor}) => {
  return (
    <>
    <div className="question">
        <div className="question-number">
            <span>
                Question {currentQuestion+1} / {questions.length}
            </span>
        </div>
        <div className="question-text">
            {questions[currentQuestion].question}
        </div>
    </div>

    <div className="answer">
        {questions[currentQuestion].answers.map(({text, isCorrect}) => (
            <button onMouseOver={changeColor} onMouseLeave = {reverseColor} key={text} onClick ={()=>handleAnswerClick(isCorrect)}>{text}</button>

        ))}
    
    </div>
    </>
  )
}

export default QuizView