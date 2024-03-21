import React from "react";

export default function RadioInput({
  name,
  index,
  option,
  isCorrect,
  isSelected,
  attempt,
}) {
  console.log({ isSelected, isCorrect });
  let background = "";
  if (attempt) {
    if (isCorrect) {
      background = "background-success";
    } else if (isSelected) {
      background = "background-danger";
    }
  }

  return (
    <label htmlFor={option} className="paper-radio">
      <input
        type="radio"
        name={name}
        id={option}
        value={index}
        checked={isSelected}
      />
      <span className={background}>{option}</span>
    </label>
  );
}