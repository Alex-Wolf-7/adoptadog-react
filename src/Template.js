import React, { Component } from 'react';
import logo from './logo.svg';
import './Template.css';

class Template extends Component {
  render() {
    return (
      <div className="Template">
        <header className="Template-header">
          <img src={logo} className="Template-logo" alt="logo" />
          <h1 className="Template-title">Welcome to React</h1>
        </header>
        <p className="Template-intro">
          To get started, edit <code>src/Template.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Template;
