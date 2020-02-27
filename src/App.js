import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import Home from './Home';
  import Card from './Card';
  import GameOver from './GameOver';

  const questions = [
    { example: "Phone", tip: "show", minutes: 0, seconds: 20 },
    { example: "simply the best", tip: "sing", minutes: 1, seconds: 10 },
    { example: "headphones", tip: "show", minutes: 2, seconds: 30 },
    { example: "cat", tip: "show", minutes: 1, seconds: 23 },
    { example: "", tip: "", minutes: 0, seconds: 0 },
  ];

  const questions2 = [
    { example: "Dog", tip: "show", minutes: 0, seconds: 40 },
    { example: "chair", tip: "sing", minutes: 1, seconds: 10 },
    { example: "TV", tip: "show", minutes: 2, seconds: 30 },
    { example: "notebook", tip: "show", minutes: 1, seconds: 23 },
    { example: "", tip: "", minutes: 0, seconds: 0 },
  ];

  const questions3 = [
    { example: "fish", tip: "show", minutes: 0, seconds: 30 },
    { example: "water", tip: "sing", minutes: 1, seconds: 10 },
    { example: "keys", tip: "show", minutes: 2, seconds: 30 },
    { example: "lamp", tip: "show", minutes: 1, seconds: 23 },
    { example: "", tip: "", minutes: 0, seconds: 0 },
  ];
  
export default class App extends React.Component{
    render(){
        return(
            <Router>
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                <Route exact path ="/"component={Home}/>
                <Route path="/Questions-1"
                render={(props) => <Card {...props} questions={questions} />}/>  
                <Route path="/Questions-2"
                render={(props) => <Card {...props} questions={questions2} />}/>
                <Route path="/Questions-3"
                render={(props) => <Card {...props} questions={questions3} />}/>
                <Route exact path = "/GameOver" component = {GameOver} />                     
                </Switch>           
            </Router>

        )
    }
}