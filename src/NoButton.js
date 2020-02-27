import React from 'react';

export default class NoButton extends React.Component {
    constructor(props){
        super(props);
        
        this.onNoClick = props.onNoClick;

    }

    render(){
        return(
            <button className = "btn btn-primary" onClick={this.onNoClick}>NO</button>
        );
    }

}