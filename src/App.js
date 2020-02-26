import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import Home from './Home'
  import Card from './Card'

  const questions = [
    { example: "Phone", tip: "show", minutes: 1, seconds: 40 },
    { example: "simply the best", tip: "sing", minutes: 1, seconds: 10 },
    { example: "headphones", tip: "show", minutes: 2, seconds: 30 },
    { example: "cat", tip: "show", minutes: 1, seconds: 23 },
  ];

  const questions2 = [
    { example: "Dog", tip: "show", minutes: 1, seconds: 40 },
    { example: "chair", tip: "sing", minutes: 1, seconds: 10 },
    { example: "TV", tip: "show", minutes: 2, seconds: 30 },
    { example: "notebook", tip: "show", minutes: 1, seconds: 23 },
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
                </Switch>
            
            </Router>

        )
    }
}