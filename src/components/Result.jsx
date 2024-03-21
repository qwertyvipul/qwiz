import React from "react";
import questions from "../data/questions";
import { Link } from "react-router-dom";
import { QUESTION_TYPES } from "../data/questions";

export default function Result({ answers, onReset, timeString }) {
  let score = 0;
  answers.forEach((answer, index) => {
    const question = questions[index];
    switch (question.type) {
      case QUESTION_TYPES.SINGLE_CORRECT: {
        if (questions[index].correctOption === answer) {
          score++;
        }
        break;
      }
      case QUESTION_TYPES.MULTI_CORRECT: {
        let correct = answer?.length === question.correctOptions.length;
        const correctOptions = new Set(question.correctOptions);
        for (const ans of answer) {
          correct &= correctOptions.has(ans);
        }
        if (correct) {
          score++;
        }
        break;
      }
      default: {
      }
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
        <Link to="/quiz">
          <button className="btn-secondary-outline" onClick={() => onReset()}>
            Try Again
          </button>
        </Link>
      </div>
    </div>
  );
}
