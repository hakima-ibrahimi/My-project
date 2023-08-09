import React, { useState, useEffect } from "react";
import { QuizData } from "./QuizData";
import QuizR from "./QuizR";

export default function Quiz() {
  const [cQuestion, setCQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickO, setClickO] = useState(0);
  const [showR, setShowR] = useState(false);
  const [showStartPage, setShowStartPage] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(10);

  const changeQuestion = () => {
    updateScore();
    if (cQuestion < QuizData.length - 1) {
      setCQuestion(cQuestion + 1);
      setClickO(0);
      setTimeRemaining(10);
    } else {
      setShowR(true);
    }
  };

  const updateScore = () => {
    if (clickO === QuizData[cQuestion].answer) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setShowR(false);
    setCQuestion(0);
    setClickO(0);
    setScore(0);
    setTimeRemaining(10);
  };

  useEffect(() => {
    let timer;
    if (timeRemaining > 0 && !showR) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0 && !showR) {
      changeQuestion();
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeRemaining, showR]);

  const handleStart = () => {
    
    setShowStartPage(false);
  };

  return (
    <div>
      <p className="heading-txt">Quiz App</p>
      <div className="container">
        {showStartPage ? (
          <div>
            <h2 className="start-page">Are you ready!</h2>
            <button onClick={handleStart} className="start">Start</button>
          </div>
        ) : showR ? (
          <QuizR score={score} totalScore={QuizData.length} tryAgain={resetAll} />
        ) : (
          <>
            <div className="question">
              <span id="question-number">{cQuestion + 1}.</span>
              <span id="question-txt">{QuizData[cQuestion].question}</span>
            </div>
            <div className="option-container">
              {QuizData[cQuestion].options.map((option, i) => {
                return (
                  <button
                    className={`option-btn ${clickO === i + 1 ? "checked" : null}`}
                    onClick={() => setClickO(i + 1)}
                    key={i}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <div>{timeRemaining}s</div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion} />
          </>
        )}
      </div>
    </div>
  );
}
