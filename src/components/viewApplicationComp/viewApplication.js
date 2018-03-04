import React, { Component } from 'react';
import './viewApplication.css';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header.js';

class viewApplicationComp extends Component {
  render() {
    return (
      <div>
      <Header></Header>
      <div className="form-wrapper bordered">
          <div className="header">
              <h2>Dog Application Form</h2>
          </div>

          <div className="row">
              <div className="spacer2">
                <h2>Name:</h2>
                <span id="name">Not yet filled out</span>
              </div>

              <div className="spacer2">
                  <h2>Email:</h2>
                  <span id="email">Not yet filled out</span>
              </div>
          </div>

          <div className="row">
              <div className="spacer2">
                  <h2>Address:</h2>
                  <span id="address">Not yet filled out</span>
              </div>
          </div>

          <div className="row">
              <div className="spacer2">
                  <h2>Housing Type:</h2>
                  <span id="housing">Not yet filled out</span>
              </div>

              <div className="spacer2">
                  <h2>Phone #:</h2>
                  <span id="phone">Not yet filled out</span>
              </div>
          </div>

          <div className="row">
              <div className="spacer2">
                  <h2>Veterinarian Information:</h2>
              </div>
          </div>

          <div className="row">
              <div class="spacer2">
                <h2>Name:</h2>
                  <span id="vetName">Not yet filled out</span>
              </div>

              <div className="spacer2">
                  <h2>Email:</h2>
                  <span id="vetEmail">Not yet filled out</span>
              </div>
          </div>

          <div className="row">
              <div className="spacer2">
                  <h2>Phone #:</h2>
                  <span id="vetPhone">Not yet filled out</span>
              </div>
          </div>

          <div className="row">
              <div className="spacer2">
                  <h2>Dog You Want to Adopt (Name):</h2>
                  <span id="dogName">Not yet filled out</span>
              </div>

              <div className="spacer2">
                <h2>Names and ages of all current pets:</h2>
                <span id="currPets">Not yet filled out</span>
              </div>
          </div>

          <div className="row">
              <div className="spacer2">
                <h2>Your Daily Scehdule:</h2>
                <span id="dailySchedule">Not yet filled out</span>
              </div>
          </div>
      </div>
      </div>
    );
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
