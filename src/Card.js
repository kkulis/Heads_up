import React from 'react';
import './card_css.css';
import Timer from './Timer';
import Question from './Question';
import YesButton from './YesButton';
import NoButton from './NoButton';
import Score from './Score';


{/*const questions = [
  { example: "Phone", tip: "show", minutes: 0, seconds: 40 },
  { example: "simply the best", tip: "sing", minutes: 1, seconds: 10 },
  { example: "headphones", tip: "show", minutes: 2, seconds: 30 },
  { example: "cat", tip: "show", minutes: 1, seconds: 23 },
];*/}



class Card extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          questions:props.questions,
          round: 0,
          example:'',
          tip: '',
          minutes: 0,
          seconds: 0,
          points: 0,
          message: '',
      }

  }

  onGameBegin = () => {
    console.log("on game begin");
    var question = this.state.questions[this.state.round];
    this.setState(({ round }) => ({
        seconds: question.seconds,
        minutes: question.minutes,
        example: question.example,
        tip: question.tip,
        round: round + 1
    }));
  }

  timerFinished = () =>{
      console.log("timer finished");
      var question = this.state.questions[this.state.round];
      this.setState(({ round }) => ({
          seconds: question.seconds,
          minutes: question.minutes,
          example: question.example,
          tip: question.tip,
          round: round + 1
      }));
  }
  onYesClick = () => {
    console.log("yes clicked");
    var question = this.state.questions[this.state.round];
    this.setState(({ round, points }) => ({
        seconds: question.seconds,
        minutes: question.minutes,
        example: question.example,
        tip: question.tip,
        round: round + 1,
        points: points + 1
    }));
  }
  onNoClick = () => {
    console.log("no clicked");
    var question = this.state.questions[this.state.round];
    this.setState(({ round}) => ({
        seconds: question.seconds,
        minutes: question.minutes,
        example: question.example,
        tip: question.tip,
        round: round + 1,
    }));
  }

  render() {
      return (

          <div className="container-fluid h-100" id="card_style">
              <div className="row-align-items-start h-25">
                  <Timer minutes={this.state.minutes} seconds={this.state.seconds} onTimerFinished={this.timerFinished} onGameBegin = {this.onGameBegin} />
              </div>
              <div className="row-align-items-center h-50">
                  <Question example = {this.state.example} tip = {this.state.tip}/>
              </div>
              <div className="row-align-items-end h-25">
                  <YesButton onYesClick = {this.onYesClick}/>
                  <NoButton onNoClick = {this.onNoClick}/>
                  <Score points = {this.state.points} />
              </div>
          </div>
      );
  }
}






// {/*<React.Fragment></React.Fragment>*/ }
export default Card;
