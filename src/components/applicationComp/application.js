import React, { Component } from 'react';
import './application.css';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header.js';
import { userOnly } from "../authenticate.js";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as applicationActions from '../../actions/applicationActions';

class applicationComp extends Component {
  constructor(props) {
      super(props);
      this.saveInfo = this.saveInfo.bind(this);
      this.loadOldInfo = this.loadOldInfo.bind(this);

      this.updateName = this.updateName.bind(this);
      this.updateAddress = this.updateAddress.bind(this);
      this.updateHousing = this.updateHousing.bind(this);
      this.updateMyEmail = this.updateMyEmail.bind(this);
      this.updatePhone = this.updatePhone.bind(this);
      this.updateVetName = this.updateVetName.bind(this);
      this.updateVetEmail = this.updateVetEmail.bind(this);
      this.updateVetPhone = this.updateVetPhone.bind(this);
      this.updateDogName = this.updateDogName.bind(this);
      this.updateCurrPets = this.updateCurrPets.bind(this);
      this.updateSchedule = this.updateSchedule.bind(this);

      this.state = {
        name: "",
        address: "",
        housing: "",
        myEmail: "",
        phone: "",
        vetName: "",
        vetEmail: "",
        vetPhone: "",
        dogName: "",
        currPets: "",
        dailySchedule: ""
      }
  }

  componentWillMount() {
    userOnly(this.props.clearance);
  }

  componentDidMount() {
    this.loadOldInfo();
  }

  updateName(e) {
    this.setState({name: e.target.value, address: this.props.inputs.address, housing: this.state.housing,
    myEmail: this.state.myEmail, phone: this.state.phone, vetName: this.state.vetName,
    vetEmail: this.state.vetEmail, vetPhone: this.state.vetPhone, dogName: this.state.dogName,
    currPets: this.state.currPets, dailySchedule: this.state.dailySchedule});
  }

  updateAddress(e) {
    this.setState({name: this.state.name, address: e.target.value, housing: this.state.housing,
    myEmail: this.state.myEmail, phone: this.state.phone, vetName: this.state.vetName,
    vetEmail: this.state.vetEmail, vetPhone: this.state.vetPhone, dogName: this.state.dogName,
    currPets: this.state.currPets, dailySchedule: this.state.dailySchedule});
  }

  updateHousing(e) {
    this.setState({name: this.state.name, address: this.state.address, housing: e.target.value,
    myEmail: this.state.myEmail, phone: this.state.phone, vetName: this.state.vetName,
    vetEmail: this.state.vetEmail, vetPhone: this.state.vetPhone, dogName: this.state.dogName,
    currPets: this.state.currPets, dailySchedule: this.state.dailySchedule});
  }

  updateMyEmail(e) {
    this.setState({name: this.state.name, address: this.state.address, housing: this.state.housing,
    myEmail: e.target.value, phone: this.state.phone, vetName: this.state.vetName,
    vetEmail: this.state.vetEmail, vetPhone: this.state.vetPhone, dogName: this.state.dogName,
    currPets: this.state.currPets, dailySchedule: this.state.dailySchedule});
  }

  updatePhone(e) {
    this.setState({name: this.state.name, address: this.state.address, housing: this.state.housing,
    myEmail: this.state.myEmail, phone: e.target.value, vetName: this.state.vetName,
    vetEmail: this.state.vetEmail, vetPhone: this.state.vetPhone, dogName: this.state.dogName,
    currPets: this.state.currPets, dailySchedule: this.state.dailySchedule});
  }

  updateVetName(e) {
    this.setState({name: this.state.name, address: this.state.address, housing: this.state.housing,
    myEmail: this.state.myEmail, phone: this.state.phone, vetName: e.target.value,
    vetEmail: this.state.vetEmail, vetPhone: this.state.vetPhone, dogName: this.state.dogName,
    currPets: this.state.currPets, dailySchedule: this.state.dailySchedule});
  }

  updateVetEmail(e) {
    this.setState({name: this.state.name, address: this.state.address, housing: this.state.housing,
    myEmail: this.state.myEmail, phone: this.state.phone, vetName: this.state.vetName,
    vetEmail: e.target.value, vetPhone: this.state.vetPhone, dogName: this.state.dogName,
    currPets: this.state.currPets, dailySchedule: this.state.dailySchedule});
  }

  updateVetPhone(e) {
    this.setState({name: this.state.name, address: this.state.address, housing: this.state.housing,
    myEmail: this.state.myEmail, phone: this.state.phone, vetName: this.state.vetName,
    vetEmail: this.state.vetEmail, vetPhone: e.target.value, dogName: this.state.dogName,
    currPets: this.state.currPets, dailySchedule: this.state.dailySchedule});
  }

  updateDogName(e) {
    this.setState({name: this.state.name, address: this.state.address, housing: this.state.housing,
    myEmail: this.state.myEmail, phone: this.state.phone, vetName: this.state.vetName,
    vetEmail: this.state.vetEmail, vetPhone: this.state.vetPhone, dogName: e.target.value,
    currPets: this.state.currPets, dailySchedule: this.state.dailySchedule});
  }

  updateCurrPets(e) {
    this.setState({name: this.state.name, address: this.state.address, housing: this.state.housing,
    myEmail: this.state.myEmail, phone: this.state.phone, vetName: this.state.vetName,
    vetEmail: this.state.vetEmail, vetPhone: this.state.vetPhone, dogName: this.state.dogName,
    currPets: e.target.value, dailySchedule: this.state.dailySchedule});
  }

  updateSchedule(e) {
    this.setState({name: this.state.name, address: this.state.address, housing: this.state.housing,
    myEmail: this.state.myEmail, phone: this.state.phone, vetName: this.state.vetName,
    vetEmail: this.state.vetEmail, vetPhone: this.state.vetPhone, dogName: this.state.dogName,
    currPets: this.state.currPets, dailySchedule: e.target.value});
  }


  loadOldInfo() {
    var dataOrder = ["name", "address", "housing", "email", "phone", "vetName",
    "vetEmail", "vetPhone", "dogName", "currPets", "dailySchedule"];

    if (this.props.statuses.applicationStatus === "Completed") {
      document.getElementById("heading").innerHTML = "Dog Application Form (Approved)";
    }
    else if (this.props.statuses.applicationStatus === "Submitted") {
      document.getElementById("heading").innerHTML = "Dog Application Form (Pending Approval)";
    }
    else {
      document.getElementById("heading").innerHTML = "Dog Application Form";
    }

    document.getElementById(dataOrder[0]).value = this.props.inputs.name;
    document.getElementById(dataOrder[1]).value = this.props.inputs.address;
    document.getElementById(dataOrder[2]).value = this.props.inputs.housing;
    document.getElementById(dataOrder[3]).value = this.props.inputs.myEmail;
    document.getElementById(dataOrder[4]).value = this.props.inputs.phone;
    document.getElementById(dataOrder[5]).value = this.props.inputs.vetName;
    document.getElementById(dataOrder[6]).value = this.props.inputs.vetEmail;
    document.getElementById(dataOrder[7]).value = this.props.inputs.vetPhone;
    document.getElementById(dataOrder[8]).value = this.props.inputs.dogName;
    document.getElementById(dataOrder[9]).value = this.props.inputs.currPets;
    document.getElementById(dataOrder[10]).value = this.props.inputs.dailySchedule;
  }

  saveInfo() {
    var nameInput = this.state.name;
    var addressInput = this.state.address;
    var housingInput = this.state.housing;
    var myEmailInput = this.state.myEmail;
    var phoneInput = this.state.phone;
    var vetNameInput = this.state.vetName;
    var vetEmailInput = this.state.vetEmail;
    var vetPhoneInput = this.state.vetPhone;
    var dogNameInput = this.state.dogName;
    var currPetsInput = this.state.currPets;
    var dailyScheduleInput = this.state.dailySchedule;

    var allElements = [];
    allElements.push(this.state.name);
    allElements.push(this.state.address);
    allElements.push(this.state.housing);
    allElements.push(this.state.myEmail);
    allElements.push(this.state.phone);
    allElements.push(this.state.vetName);
    allElements.push(this.state.vetEmail);
    allElements.push(this.state.vetPhone);
    allElements.push(this.state.dogName);
    allElements.push(this.state.currPets);
    allElements.push(this.state.dailySchedule);

    for(var i in allElements) {
      if (allElements[i] === "") {
        document.getElementById("heading").innerHTML = "Dog Application Form (Incomplete)";
        this.props.statuses.applicationStatus = "Not Complete";
        break;
      }
      else {
        document.getElementById("heading").innerHTML = "Dog Application Form (Pending Approval)";
        this.props.statuses.applicationStatus = "Submitted";
      }
    }

    this.props.applicationActions.saveApplication(nameInput, addressInput, housingInput,
      myEmailInput, phoneInput, vetNameInput, vetEmailInput, vetPhoneInput, dogNameInput,
      currPetsInput, dailyScheduleInput);

    alert("Application saved");
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
                <input type="app-text" id="name" onChange={this.updateName} value={this.state.name}/>
              </div>

              <div className="app-spacer2">
                  <h2 id="app-heading">Email:</h2>
                  <input type="app-text" id="email" onChange={this.updateMyEmail} value={this.state.myEmail}/>
              </div>
          </div>

          <div className="app-row">
              <div className="app-spacer2">
                  <h2 id="app-heading">Address:</h2>
                  <input type="app-text" id="address" onChange={this.updateAddress} value={this.state.address}/>
              </div>
          </div>

          <div className="app-row">
              <div className="app-spacer2">
                  <h2 id="app-heading">Housing Type:</h2>
                  <input type="app-text" id="housing" onChange={this.updateHousing} value={this.state.housing}/>
              </div>

              <div className="app-spacer2">
                  <h2 id="app-heading">Phone #:</h2>
                  <input type="app-text" id="phone" onChange={this.updatePhone} value={this.state.phone}/>
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
                <input type="app-text" id="vetName" onChange={this.updateVetName} value={this.state.vetName}/>
              </div>

              <div className="app-spacer2">
                  <h2 id="app-heading">Email:</h2>
                  <input type="app-text" id="vetEmail" onChange={this.updateVetEmail} value={this.state.vetEmail}/>
              </div>
          </div>

          <div className="app-row">
              <div className="app-spacer2">
                  <h2 id="app-heading">Phone #:</h2>
                  <input type="app-text" id="vetPhone" onChange={this.updateVetPhone} value={this.state.vetPhone}/>
              </div>
          </div>

          <div className="app-row">
              <div className="app-spacer2">
                <h2 id="app-heading">Dog You Want to Adopt (Name): </h2>
                <input type="app-text" id="dogName" onChange={this.updateDogName} value={this.state.dogName}/>
              </div>

              <div className="app-spacer2">
                <h2 id="app-heading">Names and ages of all current pets: </h2>
                <input type="app-text" id="currPets" onChange={this.updateCurrPets} value={this.state.currPets}/>
              </div>
          </div>

          <div className="app-row">
              <div className="app-spacer2">
                <h2 id="app-heading">Your Daily Scehdule:</h2>
                <textarea id="dailySchedule" onChange={this.updateSchedule} value={this.state.dailySchedule}></textarea>
              </div>
          </div>

          <div className="app-center">
              <button onClick={this.saveInfo} type="button" id="submit-button">Submit</button>
          </div>
        </div>
        </div>
    );
  }
}

applicationComp.propTypes = {
  applicationActions: PropTypes.object,
  inputs: PropTypes.object,
  clearance: PropTypes.string
};


function mapStateToProps(state) {
  return {
    clearance: state.clearance,
    inputs: {
      name: state.inputs.name,
      address: state.inputs.address,
      housing: state.inputs.housing,
      myEmail: state.inputs.myEmail,
      phone: state.inputs.phone,
      vetName: state.inputs.vetName,
      vetEmail: state.inputs.vetEmail,
      vetPhone: state.inputs.vetPhone,
      dogName: state.inputs.dogName,
      currPets: state.inputs.currPets,
      dailySchedule: state.inputs.dailySchedule
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    applicationActions: bindActionCreators(applicationActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(applicationComp));
