import React from "react";

export default function LandingPage(props) {
  return (
    <div className="flex-wrapper">
      <div className="content">
        <h1>React Quiz App</h1>
        <p>
          {" "}
          Test your knowledge! When you start the quiz, you will have to answer
          5 random questions. Good luck!
        </p>
        <button className="quizzical-button" onClick={props.onStart}>
          {" "}
          Start quiz!
        </button>
      </div>
    </div>
  );
}
