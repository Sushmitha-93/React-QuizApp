import React, { Component } from "react";
//import "./App.css";
import data from "./data/quiz";

//replacing sfc with class component
class App extends Component {
  state = {
    question: "",
    options: [],
    answer: 0,
    qn: 0 //current question number
  };

  componentDidMount() {
    const { qn } = this.state;
    this.setState({
      question: data[qn].question,
      options: [...data[qn].options],
      answer: data[qn].answer
    });
  }
  render() {
    return (
      <div className="container">
        <div className="card col-md-10 offset-md-1 vertical-center">
          <h5 className="card-header">
            {this.state.qn + 1}. {this.state.question}
          </h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewher
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
