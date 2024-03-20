import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h3>Welcome to Qwiz</h3>
      <Link to="/quiz">
        <button>Take a Quiz</button>
      </Link>
    </>
  );
}
