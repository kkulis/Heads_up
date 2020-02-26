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
            <div className="container- h-100" id = "Home_style">
                <div className="row">
                    <div className="col-sm">
                        <button className="btn btn-link">
                            <Link to="/Questions-1">Questions 1</Link>
                        </button>
                    </div>
                    <div className="col-sm">
                        <button class="btn btn-link">
                            <Link to="/Questions-2">Questions 2</Link>
                        </button>
                    </div>
                    <div className="col-sm">
                        <button className="btn btn-link">
                            <Link to="/Questions-3">Questions 3</Link>
                        </button>
                    </div>
                </div>




            </div>

        );
    }
}