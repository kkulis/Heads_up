import { Redirect } from 'react-router'
import React from 'react';
import './card_css.css';
import Timer from './Timer';
import Question from './Question';
import YesButton from './YesButton';
import NoButton from './NoButton';
import Score from './Score';


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
          redirect: false
      }
  }

  endingCheck = () => {
      if (this.state.round === this.state.questions.length) {
          console.log("endgame");
          this.setState({redirect: true})
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
    this.endingCheck();
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
    this.endingCheck();
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
    this.endingCheck();
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
      const {redirect} = this.state;
      const {points} = this.state;
      if (redirect) {
          return <Redirect to  = {{
              pathname: "/GameOver",
              state: {
                  endPoints: points
              }
          }}
          />
      }
      return (

          <div className="container-fluid h-100" id="card_style">
              <div className="row-align-items-start h-25">
                  <Timer minutes={this.state.minutes} seconds={this.state.seconds} onTimerFinished={this.timerFinished} onGameBegin = {this.onGameBegin} />
              </div>
              <div className="row-align-items-center h-50">
                  <Question example = {this.state.example} tip = {this.state.tip}/>
              </div>
              <div className="row-align-items-end h-25 col-sm">
                <div className="center-block text-center">   
                  <YesButton onYesClick = {this.onYesClick}/>
                  <NoButton onNoClick = {this.onNoClick}/>
                </div>
                  <Score points = {this.state.points} />
              </div>
          </div>
      );
  }
}



export default Card;
