
import { useState } from 'react';
import './App.css';
import QuizView from './components/QuizView';
import ScoreView from './components/ScoreView';

function App() {
  const questions = [
    {
      question: "Which one of the below is not divide and conquer approach?",
      answers: [{ text: "Insertion Sort" }, { text: "Merge Sort", isCorrect:true }, { text: "Shell Sort"},{ text: "Heap Sort"}],
    },
    {
      question: "Which of the following has search effeciency of Ο(1) ",
      answers: [
        { text: "Tree" },
        { text: "Heap" },
        { text: "Hash Table",isCorrect:true },
        { text: "Linked List" },
      ],
    },
    {
      question: "Project scheduling is an example of",
      answers: [
        { text: "Greedy Programming" },
        { text: "Dynamic Programming", isCorrect:true },
        { text: "Divide and conquer" },
        { text: "None of the Above" },
      ],
    },
    {
      question: "A circular linked list can be used for?",
      answers: [
        { text: "Stack" },
        { text: "Queue" },
        { text: "Both",isCorrect:true },
        { text: "Neither" },
      ],
    },
    {
      question: "An Array is what kind of data structure",
      answers: [
        { text: "Linear", isCorrect: true },
        { text: "Non-Linear" },
        { text: "Complex" },
        { text: "None" },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score,setScore] = useState(0);
  const [isQuizOver,setiSQuizOver] = useState(false);
  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) setScore(score+1);
    const next = currentQuestion+1;
    
    if (next <questions.length){
      setCurrentQuestion(next);
    
    }
    else setiSQuizOver(true);
  };
  const handleReset = ()=>{
    setCurrentQuestion(0);
    setiSQuizOver(false);
    setScore(0);
  }
  return (
    <div className="App">
      {isQuizOver ? (<ScoreView handleReset = {handleReset} score = {score} questions = {questions} />) : (<QuizView questions={questions} currentQuestion={currentQuestion} handleAnswerClick = {handleAnswerClick}/>)}
      
    </div>
  );
}

export default App;
