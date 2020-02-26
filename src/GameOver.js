import React from 'react';
import "./gameOver_css.css";

export default class GameOver extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const points = this.props.location.state.endPoints;
        return (
            <div className="container-fluid h-100" id="gameOver">
                <div className="row-align-items-start h-25">
                    <h3>Game Over!</h3>
                    <h4>Points: {points}</h4>
                </div>
            </div>
        );
    }
}