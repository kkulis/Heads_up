import React from 'react';

export default class YesButton extends React.Component {
    constructor(props){
        super(props);
        
        this.onYesClick = props.onYesClick;

    }

    render(){
        return(
            <button onClick={this.onYesClick}>YES</button>
        );
    }

}