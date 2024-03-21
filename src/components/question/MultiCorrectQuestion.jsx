import React from "react";
import CheckboxInput from "../input/CheckboxInput";

export default function MultiCorrectQuestion({
  question,
  answer,
  attempt,
  onAnswer,
}) {
  const handleChange = (e) => {
    if (attempt) {
      e.preventDefault();
    } else {
      const index = Number(e.target.value);
      const isChecked = e.target.checked;
      if (answer === null && isChecked) {
        onAnswer([index]);
      } else {
        if (isChecked) {
          onAnswer([...answer, index]);
        } else {
          onAnswer(answer.filter((ans) => ans !== index));
        }
      }
    }
  };

  return (
    <div>
      <fieldset className="form-group">
        <legend>{question.question}</legend>
        {question.options.map((option, index) => (
          <CheckboxInput
            key={index}
            name={question.question}
            index={index}
            option={option}
            isCorrect={question.correctOptions.includes(index)}
            isChecked={answer === null ? false : answer.includes(index)}
            attempt={attempt}
            onChange={handleChange}
          />
        ))}
      </fieldset>
    </div>
  );
}
