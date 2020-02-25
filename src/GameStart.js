import React from 'react';
import {Link} from 'react-router-dom';


export default class GameStart extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Link to='/Card'>Game StASDASDASart</Link>
            </div>
        )
    }
}