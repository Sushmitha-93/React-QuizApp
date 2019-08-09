import React, { Component } from "react";

class Options extends Component {
  state = {
    optionClassName: "p-4 bg-info border option"
  };
  setClassName = id => {
    this.props.onCheckAnswer(id)
      ? (document.getElementById(id).className += " correctOption")
      : (document.getElementById(id).className += " wrongOption");
  };

  render() {
    const { options } = this.props; //dont use "this.props" in functions, use "props"
    const { optionClassName } = this.state;

    return (
      <React-Fragment>
        <div className="flex-container d-flex flex-wrap bg-light text-white">
          <div
            id="0"
            onClick={() => {
              this.props.onClick(0);
              this.setClassName(0);
            }}
            className={optionClassName}
          >
            {options[0]}
          </div>
          <div
            id="1"
            onClick={() => {
              this.props.onClick(1);
              this.setClassName(1);
            }}
            className={optionClassName}
          >
            {options[1]}
          </div>
          <div
            id="2"
            onClick={() => {
              this.props.onClick(2);
              this.setClassName(2);
            }}
            className={optionClassName}
          >
            {options[2]}
          </div>
          <div
            id="3"
            onClick={() => {
              this.props.onClick(3);
              this.setClassName(3);
            }}
            className={optionClassName}
          >
            {options[3]}
          </div>
        </div>
      </React-Fragment>
    );
  }
}

export default Options;
