import React from "react";
import questions from "../data/questions";
import { Link } from "react-router-dom";

export default function Result({ answers, onReset, timeString }) {
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
      <p>{timeString}</p>

      <div>
        <Link to="/">
          <button className="btn-secondary-outline" onClick={() => onReset()}>
            Go To Home
          </button>
        </Link>
      </div>

      <div>
        <Link to="/quiz">
          <button className="btn-secondary-outline" onClick={() => onReset()}>
            Try Again
          </button>
        </Link>
      </div>
    </div>
  );
}
