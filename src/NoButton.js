import React from 'react';

export default class NoButton extends React.Component {
    constructor(props){
        super(props);
        
        this.onNoClick = props.onNoClick;

    }

    render(){
        return(
            <button onClick={this.onNoClick}>NO</button>
        );
    }

}