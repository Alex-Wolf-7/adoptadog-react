import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './Template.css';
//Import components as well
import loginComp from './components/login';
import homeComp from './components/homeComp';
import kennelComp from './components/kennel';
import contactComp from './components/userContact';

class Template extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={loginComp} />
          <Route exact path='/home' component={homeComp}/>
          <Route exact path='/kennel' component={kennelComp}/>
          <Route exact path='/contact' component={contactComp}/>

        </Switch>
      </div>
    );
  }
}

export default Template;
