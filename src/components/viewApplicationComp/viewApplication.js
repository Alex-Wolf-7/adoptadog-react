import React, { Component } from 'react';
import './viewApplication.css';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header.js';
import { adminOnly } from "../authenticate.js"
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class viewApplicationComp extends Component {
  constructor(props) {
      super(props);
      this.loadOldInformation = this.loadOldInformation.bind(this);
  }

  componentWillMount () {
    adminOnly(this.props.clearance);
  }

  componentDidMount() {
    this.loadOldInformation();
  }

  loadOldInformation() {
    var dataOrder = ["name", "address", "housing", "email", "phone", "vetName",
    "vetEmail", "vetPhone", "dogName", "currPets", "dailySchedule"];

    if (this.props.inputs.name !== "") {
      document.getElementById(dataOrder[0]).textContent = this.props.inputs.name;
      document.getElementById(dataOrder[1]).textContent = this.props.inputs.address;
      document.getElementById(dataOrder[2]).textContent = this.props.inputs.housing;
      document.getElementById(dataOrder[3]).textContent = this.props.inputs.myEmail;
      document.getElementById(dataOrder[4]).textContent = this.props.inputs.phone;
      document.getElementById(dataOrder[5]).textContent = this.props.inputs.vetName;
      document.getElementById(dataOrder[6]).textContent = this.props.inputs.vetEmail;
      document.getElementById(dataOrder[7]).textContent = this.props.inputs.vetPhone;
      document.getElementById(dataOrder[8]).textContent = this.props.inputs.dogName;
      document.getElementById(dataOrder[9]).textContent = this.props.inputs.currPets;
      document.getElementById(dataOrder[10]).textContent = this.props.inputs.dailySchedule;
    }
  }

  render() {
    return (
      <div>
      <Header/>
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
                  <span id="dogName" >Not yet filled out</span>
              </div>

              <div className="view-spacer2">
                <h2 id="view-heading">Names and ages of all current pets:</h2>
                <span id="currPets" >Not yet filled out</span>
              </div>
          </div>

          <div className="view-row">
              <div className="view-spacer2">
                <h2 id="view-heading">Your Daily Scehdule:</h2>
                <span id="dailySchedule" >Not yet filled out</span>
              </div>
          </div>
      </div>
      </div>
    );
  }
}

viewApplicationComp.propTypes = {
  clearance: PropTypes.string,
};


function mapStateToProps(state) {
  return {
    clearance: state.clearance
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(viewApplicationComp));
