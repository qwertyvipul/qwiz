import React from "react";
import RadioInput from "./RadioInput";

export default function SingleCorrectQuestion({
  question,
  selected,
  attempt,
  onSelect,
}) {
  return (
    <div>
      <fieldset className="form-group" onChange={onSelect}>
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
  );
}
