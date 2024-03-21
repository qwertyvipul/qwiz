import React from "react";
import Question from "./Question";
import questions from "../data/questions";

export default function Review({ answers }) {
  return (
    <div>
      {answers.map((answer, index) => {
        return (
          <>
            <h4>
              Question {index + 1} of {questions.length}:
            </h4>
            <Question
              key={index}
              questionNumber={index}
              attempt={true}
              onSelect={() => {}}
              answer={answer}
            />
          </>
        );
      })}
    </div>
  );
}
