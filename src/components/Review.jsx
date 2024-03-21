import React from "react";
import Question from "./Question";
import questions from "../data/questions";

export default function Review({ answers }) {
  return (
    <div>
      {answers.map((answer, index) => {
        return (
          <>
            <Question
              key={index}
              questionNumber={index}
              attempt={true}
              onSelect={() => {}}
              selected={answer}
            />
          </>
        );
      })}
    </div>
  );
}
