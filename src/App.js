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
    qn: -1 //current question index
  };

  setNextQuesData = () => {
    let { qn } = this.state;
    qn++;
    this.setState({
      question: data[qn].question,
      options: [...data[qn].options],
      answer: data[qn].answer,
      qn: qn
    });
  };

  componentDidMount() {
    this.setNextQuesData(this.state.qn);
  }

  increaseScore = () => {
    this.setState({ score: this.state.score + 1 });
    console.log("Score:", this.state.score);
  };

  checkAnswer = option => {
    const { qn } = this.state;
    return option === data[qn].answer ? true : false;
  };

  handleOnClick = option => {
    console.log(option);

    const answer = this.checkAnswer(option);
    console.log(answer);

    if (this.state.qn + 1 < this.state.totalQues) {
      if (answer) {
        this.increaseScore();
      }
      this.setNextQuesData();
    }
  };
  render() {
    return (
      <div className="container">
        <div className="card col-md-10 offset-md-1 vertical-center">
          <h5 className="card-header">
            {this.state.qn + 1}. {this.state.question}
          </h5>
          <Options options={this.state.options} onClick={this.handleOnClick} />
        </div>
      </div>
    );
  }
}

export default App;
