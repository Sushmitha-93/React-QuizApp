import React, { Component } from "react";
//import "./App.css";
import data from "./data/quiz";
import Options from "./components/options";
import NextQuestion from "./components/nextQuestion";
import PopUpCard from "./components/popUpCard";

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

  //Gets question from json in quiz.js
  setNextQuesData = () => {
    let { qn } = this.state;
    qn++;
    if (qn < this.state.totalQues)
      this.setState({
        question: data[qn].question,
        options: [...data[qn].options],
        answer: data[qn].answer,
        qn: qn,
        isAnswered: false
      });
    else this.setState({ qn: qn });
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
    if (answer) this.increaseScore();
    this.setState({ isAnswered: true });
  };

  getPopUpText = () => {
    {
      const { qn, totalQues } = this.state;
      const popUpText = new Object();

      if (qn === totalQues) {
        popUpText.titleText = "Congratulations!";
        popUpText.bodyText =
          "You have completed the quiz. <br /><br />You got: " +
          this.state.score +
          " out of " +
          totalQues +
          " questions right.";
        popUpText.buttonText = "Restart";

        return popUpText;
      }
      popUpText.titleText = "Welcome to React Quiz";
      popUpText.bodyText =
        "This is a quiz application built using ReactJS. <br /><br /> It will dynamically load the question->answers pair and upload them into the components.";
      popUpText.buttonText = "START THE QUIZ";

      return popUpText;
    }
  };
  render() {
    const { qn, totalQues } = this.state;
    const popUpText = this.getPopUpText();
    return (
      <div className="container">
        {(qn === 0 || qn === totalQues) && (
          <PopUpCard
            titleText={popUpText.titleText}
            bodyText={popUpText.bodyText}
            buttonText={popUpText.buttonText}
          />
        )}

        <div className="card col-md-10 offset-md-1 vertical-center">
          <h4 className="card-header">
            {qn < totalQues ? qn + 1 : totalQues}. {this.state.question}
          </h4>
          <Options
            options={this.state.options}
            onClick={this.handleOnOptionClick}
            onCheckAnswer={this.checkAnswer}
            isAnswered={this.state.isAnswered}
          />
          {this.state.isAnswered && (
            <NextQuestion
              onClick={this.setNextQuesData}
              lastQues={qn + 1 >= totalQues}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
