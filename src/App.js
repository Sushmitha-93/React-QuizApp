import React, { Component } from "react";
//import "./App.css";
import data from "./data/quiz";
import Options from "./components/options";

//replacing sfc with class component
class App extends Component {
  state = {
    question: "",
    options: [],
    answer: 0,
    totalQues: data.length,
    score: 0,
    qn: 0 //current question number
  };

  setNextQuesData() {
    const { qn } = this.state;
    this.setState({
      question: data[qn].question,
      options: [...data[qn].options],
      answer: data[qn].answer,
      qn: qn + 1
    });
  }

  componentDidMount() {
    this.setNextQuesData(this.state.qn);
  }

  increaseScore() {
    this.setState({ score: this.state.score + 1 });
  }

  handleOnClick(option) {
    console.log(option);
  }
  render() {
    return (
      <div className="container">
        <div className="card col-md-10 offset-md-1 vertical-center">
          <h5 className="card-header">
            {this.state.qn}. {this.state.question}
          </h5>
          <Options options={this.state.options} onClick={this.handleOnClick} />
        </div>
      </div>
    );
  }
}

export default App;
