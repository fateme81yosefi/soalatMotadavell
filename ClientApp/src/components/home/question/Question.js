import React from "react";
import "./Question.css";
export default function Question(props) {
  return (
    <div className="item-question">
      <details>
        <summary>{props.question}</summary>
        <p>{props.response}</p>
      </details>
    </div>
  );
}
