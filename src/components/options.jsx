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
          className="p-4 bg-info border option"
        >
          {options[0]}
        </div>
        <div
          onClick={() => {
            props.onClick(1);
          }}
          className="p-4 bg-info border option"
        >
          {options[1]}
        </div>
        <div
          onClick={() => {
            props.onClick(2);
          }}
          className="p-4 bg-info border option"
        >
          {options[2]}
        </div>
        <div
          onClick={() => {
            props.onClick(3);
          }}
          className="p-4 bg-info border option"
        >
          {options[3]}
        </div>
      </div>
    </React-Fragment>
  );
};

export default Options;
