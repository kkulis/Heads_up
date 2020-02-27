import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./home_css.css";



export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container-fluid h-100" id = "Home_style">
                <div className = "row-align-items-start h-25">
                    <h3>Head's Up!</h3>
                    <h4>mobile</h4>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <button className="btn btn-link" id = "question">
                            <Link to="/Questions-1">Questions 1</Link>
                        </button>
                    </div>
                    <div className="col-md-4">
                        <button class="btn btn-link" id = "question">
                            <Link to="/Questions-2">Questions 2</Link>
                        </button>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-link" id = "question">
                            <Link to="/Questions-3">Questions 3</Link>
                        </button>
                    </div>
                </div>
            </div>

        );
    }
}