import React from "react";

export default function Home({ onQuizStart }) {
  return (
    <>
      <h3>Welcome to Qwiz</h3>
      <button className="btn-secondary-outline" onClick={onQuizStart}>
        Take a Quiz
      </button>
    </>
  );
}
