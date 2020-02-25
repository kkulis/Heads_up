import React from 'react';
import './card_css.css';
import Timer from './Timer';
import Question from './Question';
import YesButton from './YesButton';


const questions = [
  { example: "Phone", tip: "show", minutes: 0, seconds: 40 },
  { example: "simply the best", tip: "sing", minutes: 1, seconds: 10 },
  { example: "headphones", tip: "show", minutes: 2, seconds: 30 },
  { example: "cat", tip: "show", minutes: 1, seconds: 23 },
  { example: '', tip: '', minutes: 0, seconds: 0 }
];

{/*var question = questions[Math.floor(Math.random() * questions.length)];*/ }

class Card extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          example: '',
          tip: '',
          minutes: 2,
          seconds: 10,
          points: 0,
          message: '',
          endTime: false,
          round: 0
      }
      /*this.handleYesClick = this.handleYesClick.bind(this);*/
      this.handleNoClick = this.handleNoClick.bind(this);
  }

  /*handleYesClick() {
      console.log("click");
      var question = questions[this.state.round];
      this.setState(({ points, round }) => ({
          points: points + 1,
          minutes: question.minutes,
          seconds: question.seconds,
          example: question.example,
          tip: question.tip,
          message: '',
          round: round + 1
      }));
  }*/
  handleNoClick() {
      console.log("click2");
      var question = questions[this.state.round];
      this.setState(({ round }) => ({
          minutes: question.minutes,
          seconds: question.seconds,
          example: question.example,
          tip: question.tip,
          message: '',
          round: round + 1
      }));
  }

  // componentDidMount() {
  //     this.timerID = setInterval(
  //         () => this.tick(),
  //         100
  //     );
  // }

  // componentWillUnmount() {
  //     clearInterval(this.timerID);
  // }

  // tick() {
      // if (this.state.seconds == 0 && this.state.minutes == 0 && this.state.round === questions.length) {
      //     this.setState({
      //         seconds: 0,
      //         minutes: 0,
      //         message: "Game over",
      //         example: '',
      //         tip: '',
      //         round: 0,

      //     })
      // }
      // else if (this.state.round === questions.length) {
      //     this.setState({
      //         seconds: 0,
      //         minutes: 0,
      //         message: "Game over",
      //         example: '',
      //         tip: '',
      //         round: 0
      //     })
      // }
      // else if (this.state.seconds > 0) {
      //     this.setState(({ seconds }) => ({
      //         seconds: seconds - 1
      //     }))
      // }
      // else if (this.state.seconds == 0 && this.state.minutes == 0 && this.state.round != questions.length) {
      //     var question = questions[this.state.round];
      //     this.setState(({ round }) => ({
      //         minutes: question.minutes,
      //         seconds: question.seconds,
      //         example: question.example,
      //         tip: question.tip,
      //         message: '',
      //         round: round + 1
      //     }));


      // }
      // else if (this.state.seconds === 0) {
      //     this.setState(({ minutes }) => ({
      //         seconds: 59,
      //         minutes: minutes - 1
      //     }))
      // }

  // }

  timerFinished = () =>{
      console.log("timer finished");
      var question = questions[this.state.round];
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
  }

  render() {
      return (
          <div className="container-fluid h-100" id="card_style">
              <div className="row-align-items-start h-25">
                  <Timer minutes={this.state.minutes} seconds={this.state.seconds} onTimerFinished={this.timerFinished} />
              </div>
              <div className="row-align-items-center h-50">
                  <Question example = {this.state.example} tip = {this.state.tip}/>
              </div>
              <div className="row-align-items-end h-25">
                  <YesButton onYesClick = {this.onYesClick}/>
                  <button onClick={this.handleNoClick}>NO</button>
                  <p id="points">your points: {this.state.points}</p>
              </div>
          </div>
      );
  }
}




// {/*<React.Fragment></React.Fragment>*/ }
export default Card;
