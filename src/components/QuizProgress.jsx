import React, { useState } from "react";
import questions from "../data/questions";
import Question from "./Question";
import Timer from "./Timer";

export default function QuizProgress({ answers, onAnswer, onQuizEnd, onTick }) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selected, setSelected] = useState(-1);

  const onNext = () => {
    const nextQuestionNumber = questionNumber + 1;
    if (nextQuestionNumber === questions.length) {
      onQuizEnd();
    } else {
      setQuestionNumber(nextQuestionNumber);
    }
  };

  const attempt = questionNumber + 1 === answers.length;
  return (
    <div>
      <h4>
        Question {questionNumber + 1} of {questions.length}:
      </h4>
      <Question
        key={questionNumber}
        questionNumber={questionNumber}
        attempt={attempt}
        onSelect={(selected) => setSelected(selected)}
        selected={selected}
      />
      <div className="row flex-edges flex-middle">
        <div className="sm-4 col">
          <Timer onTick={onTick} />
        </div>
        <div className="sm-4 col">
          {!attempt ? (
            <button onClick={(e) => onAnswer(selected)} disabled={selected < 0}>
              Submit
            </button>
          ) : (
            <button className="btn-secondary-outline" onClick={() => onNext()}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
