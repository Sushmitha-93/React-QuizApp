import React from "react";

const NextQuestion = props => {
  return (
    <button
      onClick={() => {
        props.onClick();
      }}
      type="button"
      className={
        props.collapse ? "btn btn-dark btn-lg" : "btn btn-dark btn-lg collapse"
      }
    >
      Next Question
    </button>
  );
};

export default NextQuestion;
