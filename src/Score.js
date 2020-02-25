import React from 'react'

export default class Score extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            points: props.points
        }
    }

    render() {
        return(
            <p id = "points">your points: {this.props.points}</p>
        );
    }
}