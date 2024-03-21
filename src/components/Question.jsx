import React, { useState } from "react";

import questions from "../data/questions";
import SingleCorrectQuestion from "./SingleCorrectQuestion";
import { QUESTION_TYPES } from "../data/questions";

export default function Question({
  questionNumber,
  attempt,
  onAnswer,
  answer,
}) {
  const question = questions[questionNumber];
  const handleSelection = (e) => {
    if (attempt) {
      e.preventDefault();
    } else {
      onAnswer(Number(e.target.value));
    }
  };

  return (
    <>
      <div style={{ textAlign: "left" }}>
        {(() => {
          switch (question.type) {
            case QUESTION_TYPES.SINGLE_CORRECT: {
              return (
                <SingleCorrectQuestion
                  question={question}
                  selected={answer}
                  attempt={attempt}
                  onSelect={handleSelection}
                />
              );
            }
          }
        })()}
      </div>
    </>
  );
}
