import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tasks from './components/tasks'
import Calendar from './components/calendar'
import Workouts from './components/workouts'

class App extends React.Component{
    
  constructor(props) {
    super(props);
    this.state = {
      taskList: ['yoga', 'kung fu', 'chops'],
      workouts: {
        "workout_1": [
          {
            excersice: "incline press",
            sets: 4,
            reps: 8,
            rest_period_minuets: 2
          },
          {
            excersice: "bench press",
            sets: 4,
            reps: 8,
            rest_period_minuets: 2
          },
        ],
        "workout_2": [
          {
            excersice: "sholder press",
            sets: 4,
            reps: 8,
            rest_period_minuets: 2
          },
          {
            excersice: "bicept curl",
            sets: 4,
            reps: 8,
            rest_period_minuets: 2
          },
        ]
      }
    }
  }
  render(){
    return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
            <li>
              <Link to="/workouts">Workouts</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <hr />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/tasks"> <Tasks tasks={this.state.taskList} /> </Route>
          <Route path="/calendar"> <Calendar /> </Route>
          <Route path="/workouts" workouts={this.state.workouts}> <Workouts /> </Route>
          <Route path="/"> <Home /> </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default App;
