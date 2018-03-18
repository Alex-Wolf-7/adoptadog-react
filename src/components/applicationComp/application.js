import React, { Component } from 'react';
import './application.css';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header.js';
import { userOnly } from "../authenticate.js";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class applicationComp extends Component {
  constructor(props) {
      super(props);
      this.saveInfo = this.saveInfo.bind(this);
  }

  render() {
    return (
      <div>
      <Header/>
      <div className="form-app-wrapper app-bordered">
          <div className="app-header">
              <h2 id="heading">Dog Application Form</h2>
          </div>

          <div className="app-row">
              <div className="app-spacer2">
                <h2 id="app-heading">Name:</h2>
                <input type="app-text" id="name"/>
              </div>

              <div className="app-spacer2">
                  <h2 id="app-heading">Email:</h2>
                  <input type="app-text" id="email"/>
              </div>
          </div>

          <div className="app-row">
              <div className="app-spacer2">
                  <h2 id="app-heading">Address:</h2>
                  <input type="app-text" id="address"/>
              </div>
          </div>

          <div className="app-row">
              <div className="app-spacer2">
                  <h2 id="app-heading">Housing Type:</h2>
                  <input type="app-text" id="housing"/>
              </div>

              <div className="app-spacer2">
                  <h2 id="app-heading">Phone #:</h2>
                  <input type="app-text" id="phone"/>
              </div>
          </div>

          <div className="app-row">
              <div className="app-spacer2">
                  <h2 id="app-heading">Veterinarian Information:</h2>
              </div>
          </div>

          <div className="app-row">
              <div className="app-spacer2">
                <h2 id="app-heading">Name:</h2>
                <input type="app-text" id="vetName"/>
              </div>

              <div className="app-spacer2">
                  <h2 id="app-heading">Email:</h2>
                  <input type="app-text" id="vetEmail"/>
              </div>
          </div>

          <div className="app-row">
              <div className="app-spacer2">
                  <h2 id="app-heading">Phone #:</h2>
                  <input type="app-text" id="vetPhone"/>
              </div>
          </div>

          <div className="app-row">
              <div className="app-spacer2">
                <h2 id="app-heading">Dog You Want to Adopt (Name): </h2>
                <input type="app-text" id="dogName"/>
              </div>

              <div className="app-spacer2">
                <h2 id="app-heading">Names and ages of all current pets: </h2>
                <input type="app-text" id="currPets"/>
              </div>
          </div>

          <div className="app-row">
              <div className="app-spacer2">
                <h2 id="app-heading">Your Daily Scehdule:</h2>
                <textarea id="dailySchedule"></textarea>
              </div>
          </div>

          <div className="app-center">
              <button type="button" id="submit-button">Submit</button>
          </div>
        </div>
        </div>
    );
  }

  componentWillMount() {
    userOnly(this.props.clearance);

    if(localStorage.getItem("applicationStatus") === null) {
      localStorage.setItem({appStatus: "notReady"});
    }
  }

  componentDidMount() {
    document.getElementById("submit-button").addEventListener("click", this.saveInfo);
    this.loadOldInfo();
  }

  loadOldInfo() {
    var dataOrder = ["name", "address", "housing", "email", "phone", "vetName", "vetEmail", "vetPhone", "dogName", "currPets", "dailySchedule"];
    var data = JSON.parse(localStorage.getItem("applicationData"));

    if (localStorage.getItem("applicationStatus") === "Completed") {
      document.getElementById("heading").innerHTML = "Dog Application Form (Approved)";
    }
    else if( localStorage.getItem("applicationStatus") === "Submitted") {
      document.getElementById("heading").innerHTML = "Dog Application Form (Pending Approval)";
    }
    else {
      document.getElementById("heading").innerHTML = "Dog Application Form";
    }

    for(var i in dataOrder) {
      if (data === null){
        break;
      }
      document.getElementById(dataOrder[i]).value = data[i];
    }
  }

  saveInfo() {
    var name = document.getElementById("name");
    var address = document.getElementById("address");
    var housing = document.getElementById("housing");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var vetName = document.getElementById("vetName");
    var vetEmail = document.getElementById("vetEmail");
    var vetPhone = document.getElementById("vetPhone");
    var dogName = document.getElementById("dogName");
    var currPets = document.getElementById("currPets");
    var dailySchedule = document.getElementById("dailySchedule");

    var allElements = [];
    allElements.push(name.value);
    allElements.push(address.value);
    allElements.push(housing.value);
    allElements.push(email.value);
    allElements.push(phone.value);
    allElements.push(vetName.value);
    allElements.push(vetEmail.value);
    allElements.push(vetPhone.value);
    allElements.push(dogName.value);
    allElements.push(currPets.value);
    allElements.push(dailySchedule.value);

    localStorage.setItem("applicationData", JSON.stringify(allElements));

    for(var i in allElements) {
      if (allElements[i].length < 1) {
        document.getElementById("heading").innerHTML = "Dog Application Form (Incomplete)";
        localStorage.setItem("applicationStatus", "notReady");
        break;
      }
      else {
        document.getElementById("heading").innerHTML = "Dog Application Form (Pending Approval)";
        localStorage.setItem("applicationStatus", "Submitted");
      }
    }
  }
}

applicationComp.propTypes = {
  clearance: PropTypes.string
};


function mapStateToProps(state) {
  return {
    clearance: state.clearance
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(applicationComp));
