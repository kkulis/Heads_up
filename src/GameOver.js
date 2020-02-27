import React from 'react';
import "./gameOver_css.css";
import { Redirect } from 'react-router-dom';

export default class GameOver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    restart = () => {
        console.log("restart click")
        this.setState({
            redirect: true
        })
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/' />
        }
        const points = this.props.location.state.endPoints;
        return (
            <div className="container-fluid h-100" id="gameOver">
                <div className="row-align-items-start h-25">
                    <h3>Game Over!</h3>
                </div>
                <div className="row-align-items-center h-50">
                    <h4>Points: {points}</h4>
                </div>
                <div className="row-align-items-end h-25 col-sm">
                    <button className="btn btn-primary" onClick={this.restart} id="restartButton">Restart</button>
                </div>
            </div>

        );
    }
}