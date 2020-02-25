import React from 'react';

export default class Questions extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            example: props.example,
            tip: props.tip
        }
    }

    render() {
        return(
            <div>
            <h3>{this.props.example}</h3>
            <h4>{this.props.tip}</h4>
            </div>
        );
    }
}