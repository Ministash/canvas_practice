import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from './components/mainPage/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" render={() => <MainPage />} />
        </Router>
      </div>
    );
  }
}

export default App;
