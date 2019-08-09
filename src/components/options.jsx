import React from "react";

const Options = props => {
  const { options } = props; //dont use "this.props" in functions, use "props"

  return (
    <React-Fragment>
      <div className="flex-container d-flex flex-wrap bg-light text-white">
        <div
          onClick={() => {
            props.onClick(0);
          }}
          className={setClassName()}
        >
          {options[0]}
        </div>
        <div
          onClick={() => {
            props.onClick(1);
          }}
          className={setClassName()}
        >
          {options[1]}
        </div>
        <div
          onClick={() => {
            props.onClick(2);
          }}
          className={setClassName()}
        >
          {options[2]}
        </div>
        <div
          onClick={() => {
            props.onClick(3);
          }}
          className={setClassName()}
        >
          {options[3]}
        </div>
      </div>
    </React-Fragment>
  );
};

function setClassName() {
  return "p-4 bg-info border option";
}

export default Options;
