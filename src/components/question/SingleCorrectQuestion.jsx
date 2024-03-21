import React from "react";
import RadioInput from "../input/RadioInput";

export default function SingleCorrectQuestion({
  question,
  answer,
  attempt,
  onAnswer,
}) {
  const handleChange = (e) => {
    if (!attempt) {
      onAnswer(Number(e.target.value));
    } else {
      e.preventDefault();
    }
  };

  return (
    <div>
      <fieldset className="form-group">
        <legend>{question.question}</legend>
        {question.options.map((option, index) => (
          <RadioInput
            name={question.question}
            index={index}
            option={option}
            key={index}
            isCorrect={question.correctOption === index}
            isSelected={answer === index}
            attempt={attempt}
            onChange={handleChange}
          />
        ))}
      </fieldset>
    </div>
  );
}
