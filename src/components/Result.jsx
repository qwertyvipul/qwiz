import React from "react";
import questions from "../data/questions";

export default function Result({ answers, onReset }) {
  let score = 0;
  answers.forEach((answer, index) => {
    if (questions[index].correctOption === answer) {
      score++;
    }
  });
  return (
    <div>
      <h3>Result:</h3>
      <p>
        {score} of {questions.length}
      </p>
      <h3>Time spent:</h3>
      <p>4:!4</p>
      <button onClick={() => onReset()}>Try Again</button>
    </div>
  );
}
