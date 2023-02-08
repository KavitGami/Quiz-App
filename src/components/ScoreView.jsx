import React from 'react'
import "./ScoreView.css";
const ScoreView = ({handleReset,score,questions}) => {
  return (
    <div>
        <p>You scored {score} out of {questions.length}</p>
        <button onClick={handleReset}>Reset</button>
    </div>

  )
}

export default ScoreView