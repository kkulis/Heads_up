import React from 'react';

export default class YesButton extends React.Component {
    constructor(props){
        super(props);
        
        this.onYesClick = props.onYesClick;

    }

    render(){
        return(
            <button className = "btn btn-primary" onClick={this.onYesClick}>YES</button>
        );
    }

}