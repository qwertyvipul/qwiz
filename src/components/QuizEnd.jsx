import React, { useState } from "react";
import Result from "./Result";
import Review from "./Review";

export default function QuizEnd({ answers, handleReset, timeString }) {
  const [showResult, setShowResult] = useState(true);
  return (
    <>
      <div className="row flex-spaces">
        <button
          className={showResult ? "btn-secondary" : ""}
          onClick={() => setShowResult(true)}
        >
          Result
        </button>
        <button
          className={!showResult ? "btn-secondary" : ""}
          onClick={() => setShowResult(false)}
        >
          Review
        </button>
      </div>
      <div>
        <div style={showResult ? {} : { display: "none" }}>
          <Result
            answers={answers}
            onReset={handleReset}
            timeString={timeString}
          />
        </div>
        <di style={!showResult ? {} : { display: "none" }}>
          <Review />
        </di>
      </div>
    </>
  );
}
