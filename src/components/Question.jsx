import React, { useState } from "react";
import RadioInput from "./RadioInput";
import questions from "../data/questions";

export default function Question({
  questionNumber,
  attempt,
  onSubmit,
  onNext,
}) {
  const [selected, setSelected] = useState(-1);
  const question = questions[questionNumber];
  const handleSelection = (e) => {
    if (attempt) {
      e.preventDefault();
    } else {
      setSelected(Number(e.target.value));
    }
  };

  return (
    <>
      <h4>
        Question {questionNumber + 1} of {questions.length}:
      </h4>
      <div style={{ textAlign: "left" }}>
        <fieldset className="form-group" onChange={handleSelection}>
          <legend>{question.question}</legend>
          {question.options.map((option, index) => (
            <RadioInput
              name={question.question}
              index={index}
              option={option}
              key={index}
              isCorrect={question.correctOption === index}
              isSelected={selected === index}
              attempt={attempt}
            />
          ))}
        </fieldset>
        <div className="row flex-edges flex-middle">
          <div className="sm-4 col">
            <span className="badge secondary">0:08</span>
          </div>
          <div className="sm-4 col">
            {!attempt ? (
              <button
                onClick={(e) => onSubmit(selected)}
                disabled={selected < 0}
              >
                Submit
              </button>
            ) : (
              <button onClick={() => onNext()}>Next</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
