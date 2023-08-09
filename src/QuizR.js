import React from 'react'

export default function QuizR(props) {
  return (
    <>
    <div className="show-score">
   Your Score: {props.score} <br/>
    Total Score: {props.totalScore}
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}
