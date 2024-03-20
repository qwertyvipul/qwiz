import React from "react";

export default function RadioInput({
  name,
  index,
  option,
  isCorrect,
  isSelected,
  attempt,
}) {
  let background = "";
  if (attempt) {
    if (isCorrect) {
      background = "background-success";
    } else if (isSelected) {
      background = "background-danger";
    }
  }

  console.log({ background });

  return (
    <label htmlFor={option} className="paper-radio">
      <input type="radio" name={name} id={option} value={index} />
      <span className={background}>{option}</span>
    </label>
  );
}
