import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './Template.css';
//Import components as well
import loginComp from './components/login'

class Template extends Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route exact path='/' component={loginComp} />
        </Switch>
      </div>
    );
  }
}

export default Template;
