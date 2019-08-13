import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Animation from './components/animations/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" render={() => <Animation />} />
        </Router>
      </div>
    );
  }
}

export default App;
