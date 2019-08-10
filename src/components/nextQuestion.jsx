import React from "react";

const NextQuestion = props => {
  return (
    <button
      onClick={() => {
        props.onClick();
      }}
      type="button"
      className={"btn btn-dark btn-lg"}
    >
      Next Question
    </button>
  );
};

export default NextQuestion;
