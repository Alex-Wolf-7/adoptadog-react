import React, { Component } from 'react';
import './allDone.css';
import Header from '../Header/Header.js'
import { withRouter } from 'react-router-dom'
import allDoneDog from "./all-done-dog.jpg"
import { userOnly } from "../authenticate.js"

class allDone extends Component {
  componentWillMount () {
    userOnly();
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="all-done-wrapper">
          <h2 className="all-done-header">You're all Done!</h2>
          <img src={allDoneDog} alt="Your new dog" className="all-done-picture"/>

          <p className="all-done-info">
              <b>Rex</b> is ready and waiting to be picked up at <b>UCSD Rescue Shelter</b>!
              please come pick him up within 48 hours, and pay the <b>$180</b> rescue fee.
              Thank you for helping us to rehome this fabulous dog!
          </p>
        </div>
      </div>
    );
  }
}
export default withRouter(allDone);
