import React, { useState } from "react";
import RadioInput from "./RadioInput";
import questions from "../data/questions";

export default function Question({
  questionNumber,
  attempt,
  onSelect,
  selected,
}) {
  const question = questions[questionNumber];
  const handleSelection = (e) => {
    if (attempt) {
      e.preventDefault();
    } else {
      onSelect(Number(e.target.value));
    }
  };

  return (
    <>
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
      </div>
    </>
  );
}
