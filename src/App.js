import React, { Component} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tasks from './components/tasks.jsx'
import Calendar from './components/calendar.jsx'
import Workouts from './components/workouts.jsx'

class App extends React.Component{

// You can think of these components as "pages"
// in your app.


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
          </ul>
        </nav>
        <hr />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/workouts">
            <Workouts />
          </Route>
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
