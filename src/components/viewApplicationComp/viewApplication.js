import React, { Component } from 'react';
import './viewApplication.css';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header.js';
import { adminOnly } from "../authenticate.js"

class viewApplicationComp extends Component {
  render() {
    return (
      <div>
      <Header></Header>
      <div className="form-view-wrapper view-bordered">
          <div className="view-header">
              <h2 id="view-heading">Dog Application Form</h2>
          </div>

          <div className="view-row">
              <div className="view-spacer2">
                <h2 id="view-heading">Name:</h2>
                <span id="name">Not yet filled out</span>
              </div>

              <div className="view-spacer2">
                  <h2 id="view-heading">Email:</h2>
                  <span id="email">Not yet filled out</span>
              </div>
          </div>

          <div className="view-row">
              <div className="view-spacer2">
                  <h2 id="view-heading">Address:</h2>
                  <span id="address">Not yet filled out</span>
              </div>
          </div>

          <div className="view-row">
              <div className="view-spacer2">
                  <h2 id="view-heading">Housing Type:</h2>
                  <span id="housing">Not yet filled out</span>
              </div>

              <div className="view-spacer2">
                  <h2 id="view-heading">Phone #:</h2>
                  <span id="phone">Not yet filled out</span>
              </div>
          </div>

          <div className="view-row">
              <div className="view-spacer2">
                  <h2 id="view-heading">Veterinarian Information:</h2>
              </div>
          </div>

          <div className="view-row">
              <div className="view-spacer2">
                <h2 id="view-heading">Name:</h2>
                  <span id="vetName">Not yet filled out</span>
              </div>

              <div className="view-spacer2">
                  <h2 id="view-heading">Email:</h2>
                  <span id="vetEmail">Not yet filled out</span>
              </div>
          </div>

          <div className="view-row">
              <div className="view-spacer2">
                  <h2 id="view-heading">Phone #:</h2>
                  <span id="vetPhone">Not yet filled out</span>
              </div>
          </div>

          <div className="view-row">
              <div className="view-spacer2">
                  <h2 id="view-heading">Dog You Want to Adopt (Name):</h2>
                  <span id="dogName">Not yet filled out</span>
              </div>

              <div className="view-spacer2">
                <h2 id="view-heading">Names and ages of all current pets:</h2>
                <span id="currPets">Not yet filled out</span>
              </div>
          </div>

          <div className="view-row">
              <div className="view-spacer2">
                <h2 id="view-heading">Your Daily Scehdule:</h2>
                <span id="dailySchedule">Not yet filled out</span>
              </div>
          </div>
      </div>
      </div>
    );
  }

  componentWillMount () {
    adminOnly();
  }

  componentDidMount() {
    this.loadOldInfo();
  }

  loadOldInfo() {
    var dataOrder = ["name", "address", "housing", "email", "phone", "vetName", "vetEmail", "vetPhone", "dogName", "currPets", "dailySchedule"];
    var data = JSON.parse(localStorage.getItem("applicationData"));

    console.log(data);
    for(var i in dataOrder) {
      document.getElementById(dataOrder[i]).innerHTML = data[i];
    }
  }
}

export default withRouter(viewApplicationComp);
