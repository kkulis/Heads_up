import React from 'react'


export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            minutes: props.minutes,
            seconds: props.seconds,
        }

        this.onTimerFinished = props.onTimerFinished;
        this.onGameBegin = props.onGameBegin;
        this.componentDidUpdate = this.componentDidUpdate.bind(this)
    }
    componentDidMount() {

        this.timerID = setInterval(
            () => this.tick(),
            100
        );
        this.onGameBegin();
    }

    componentDidUpdate(prevProps){
        if(prevProps.seconds !== this.props.seconds){
            this.setState({
                seconds: this.props.seconds
            })
        }
        if(prevProps.minutes !== this.props.minutes){
            this.setState({
                minutes: this.props.minutes
            })
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick = () => {
        if (this.state.seconds > 0) {
            this.setState(({ seconds }) => ({
                seconds: seconds - 1
            }))
        }

        else if (this.state.seconds === 0 && this.state.minutes === 0) {
            this.onTimerFinished();
        }


        else if (this.state.seconds === 0) {
            this.setState(({ minutes }) => ({
                seconds: 59,
                minutes: minutes - 1
            }))
        }



    }

    render(){
        return(
            <div>
                <h3>{this.state.minutes}:{this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds}</h3>
            </div>
        );
    }
}
