import React, { useState } from "react";
import questions from "../data/questions";
import Question from "./Question";
import Timer from "./Timer";

export default function QuizProgress({
  answers,
  addAnswer,
  onQuizEnd,
  onTick,
}) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answer, setAnswer] = useState(null);

  const onNext = () => {
    const nextQuestionNumber = questionNumber + 1;
    if (nextQuestionNumber === questions.length) {
      onQuizEnd();
    } else {
      setQuestionNumber(nextQuestionNumber);
      setAnswer(null);
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
        onAnswer={(answer) => setAnswer(answer)}
        answer={answer}
      />
      <div className="row flex-edges flex-middle">
        <div className="sm-4 col">
          <Timer onTick={onTick} />
        </div>
        <div className="sm-4 col">
          {!attempt ? (
            <button
              onClick={() => addAnswer(answer)}
              disabled={answer === null}
            >
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
