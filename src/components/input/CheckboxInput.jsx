import React from "react";

export default function CheckboxInput({
  name,
  index,
  option,
  isCorrect,
  isChecked,
  attempt,
  onChange,
}) {
  let background = "";
  if (attempt) {
    if (isCorrect) {
      background = "background-success";
    } else if (isChecked) {
      background = "background-danger";
    }
  }
  return (
    <div>
      <label htmlFor={option} className="paper-check">
        <input
          type="checkbox"
          name={name}
          id={option}
          value={index}
          checked={isChecked}
          onChange={onChange}
        />{" "}
        <span className={background}>{option}</span>
      </label>
    </div>
  );
}
