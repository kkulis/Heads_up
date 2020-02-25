import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import GameStart from './GameStart';
  import Card from './Card'
  
export default class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <nav>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Card">Card</Link>
                        </li>
                    </ul>
                    </nav>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                <Route path="/Card">
                    <Card />
                <Route path="/">
                    <GameStart />
                </Route>
                </Route>
                </Switch>
            </div>
            </Router>

        )
    }
}