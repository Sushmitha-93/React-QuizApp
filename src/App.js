import React, { Component } from "react";
//import "./App.css";
import data from "./data/quiz";
import Options from "./components/options";
import NextQuestion from "./components/nextQuestion";

//replacing sfc with class component
class App extends Component {
  state = {
    question: "",
    options: [],
    answer: 0,
    totalQues: data.length,
    score: 0,
    qn: -1, //current question index
    isAnswered: false
  };

  setNextQuesData = () => {
    let { qn } = this.state;
    qn++;
    this.setState({
      question: data[qn].question,
      options: [...data[qn].options],
      answer: data[qn].answer,
      qn: qn,
      isAnswered: false
    });
  };

  componentDidMount() {
    this.setNextQuesData(this.state.qn);
  }

  increaseScore = () => {
    let score = this.state.score;
    score++;
    this.setState({ score });
    console.log("state score:", this.state.score); // shows score to be one less than actual score: need to research
  };

  checkAnswer = option => {
    const { qn } = this.state;
    return option === data[qn].answer ? true : false;
  };

  handleOnOptionClick = option => {
    const answer = this.checkAnswer(option);
    console.log(answer);
    if (!this.state.isAnswered) if (answer) this.increaseScore();
    this.setState({ isAnswered: true });
  };
  render() {
    return (
      <div className="container">
        <div className="card col-md-10 offset-md-1 vertical-center">
          <h5 className="card-header">
            {this.state.qn + 1}. {this.state.question}
          </h5>
          <Options
            options={this.state.options}
            onClick={this.handleOnOptionClick}
            onCheckAnswer={this.checkAnswer}
          />
          <NextQuestion
            onClick={this.setNextQuesData}
            collapse={this.state.isAnswered}
          />
        </div>
      </div>
    );
  }
}

export default App;
