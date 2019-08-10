import React from "react";

//STATELESS FUNCTIONAL COMPONENT - sfc
// NOTE: Dont use "this.props" in sfc, use "props"
//       Dont use arrow functions use "function" to define functions
const Options = props => {
  function updateClassName(id) {
    props.onCheckAnswer(id)
      ? (document.getElementById(id).className =
          "p-4 border option correctOption")
      : (document.getElementById(id).className =
          "p-4 border option wrongOption");
  }

  function setClassName(id) {
    if (!props.isAnswered) {
      return "p-4 border option bg-info";
    } else {
      return document.getElementById(id).className;
    }
  }

  const { options } = props; //dont use "this.props" in sfc, use "props"

  return (
    <React-Fragment>
      <div className="flex-container d-flex flex-wrap bg-light text-white">
        <div
          id="0"
          className={setClassName(0)}
          onClick={() => {
            if (!props.isAnswered) {
              props.onClick(0);
              updateClassName(0);
            }
          }}
        >
          {options[0]}
        </div>
        <div
          id="1"
          onClick={() => {
            if (!props.isAnswered) {
              props.onClick(1);
              updateClassName(1);
            }
          }}
          className={setClassName(1)}
        >
          {options[1]}
        </div>
        <div
          id="2"
          onClick={() => {
            if (!props.isAnswered) {
              props.onClick(2);
              updateClassName(2);
            }
          }}
          className={setClassName(2)}
        >
          {options[2]}
        </div>
        <div
          id="3"
          onClick={() => {
            if (!props.isAnswered) {
              props.onClick(3);
              updateClassName(3);
            }
          }}
          className={setClassName(3)}
        >
          {options[3]}
        </div>
      </div>
    </React-Fragment>
  );
};

export default Options;
