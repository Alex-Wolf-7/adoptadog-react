import React, { Component } from 'react';
import './checklist.css';
import checklistModule from './checklistModule.css';
import Header from '../Header/Header.js'
import { withRouter, Link } from 'react-router-dom'
import { adminOrUser } from "../authenticate.js"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as checklistActions from '../../actions/checklistActions'

class checklist extends Component {
  componentWillMount () {
    console.log(this.props.clearance);
    adminOrUser(this.props.clearance);
  }

  constructor (props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit() {
    var appVal = document.getElementById('application-form').value;
    var discussVal = document.getElementById('discuss').value;
    var homeVal = document.getElementById('home-form').value;
    var finalVal = document.getElementById('final-form').value;

    this.props.checklistActions.saveChecklist(appVal, discussVal, homeVal, finalVal);
    alert("Checklist saved");
  }
      

  render() {
    const appStatus = this.props.statuses.applicationStatus;
    var appForm;
    if(appStatus === "Completed") {
      appForm = "Completed";
    }
    else if(appStatus === "Submitted") {
      appForm = "Submitted";
    }
    else {
      appForm = "Not Complete";
    }

    const discussStatus = this.props.statuses.discussStatus;
    var discussForm;
    if(discussStatus === "Completed") {
      discussForm = "Completed";
    }
    else if(discussStatus === "Submitted") {
      discussForm = "Submitted";
    }
    else {
      discussForm = "Not Complete";
    }

    const homeCheckStatus = this.props.statuses.homeCheckStatus;
    var homeForm;
    if(homeCheckStatus === "Completed") {
      homeForm = "Completed";
    }
    else if(homeCheckStatus === "Submitted") {
      homeForm = "Submitted";
    }
    else {
      homeForm = "Not Complete";
    }

    const finalStatus = this.props.statuses.finalStatus;
    var finalForm;
    if(finalStatus === "Completed") {
      finalForm = "Completed";
    }
    else if(finalStatus === "Submitted") {
      finalForm = "Submitted";
    }
    else {
      finalForm = "Not Complete";
    }

    if (this.props.clearance === "admin") {
      return (
        <div>
          <Header/>
          <div style={checklistModule.wrapper} className="checklist-wrapper">
            <h2 style={checklistModule.header}>Adopter's To-Do:</h2>
            <table style={checklistModule.checklist}>
              <tbody>
                <tr className="list-item">
                  <td style={checklistModule.listItemLeft}>
                    Fill out application form:
                  </td>
                  <td style={checklistModule.listItemRight}>
                    <select defaultValue={appForm} style={checklistModule.select} id="application-form">
                      <option value="Not Complete">Not Complete</option>
                      <option value="Submitted">Submitted</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                </tr>
                <tr className="list-item">
                  <td style={checklistModule.listItemLeft}>
                    Discuss Application:
                  </td>
                  <td style={checklistModule.listItemRight}>
                    <select defaultValue={discussForm} style={checklistModule.select} id="discuss">
                      <option value="Not Complete">Not Complete</option>
                      <option value="Submitted">Submitted</option>
                      <option value="Completed">Completed</option>
                     </select>
                  </td>
                </tr>
                <tr className="list-item">
                  <td style={checklistModule.listItemLeft}>
                    <Link to="admin-home-visit">Shedule Home Check:</Link>
                  </td>
                  <td style={checklistModule.listItemRight}>
                    <select defaultValue={homeForm} style={checklistModule.select} id="home-form">
                      <option value="Not Complete">Not Complete</option>
                      <option value="Submitted">Submitted</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                </tr>
                <tr className="list-item">
                  <td style={checklistModule.listItemLeft}>
                    Go Get Your New Friend:
                  </td>
                  <td style={checklistModule.listItemRight}>
                    <select defaultValue={finalForm} style={checklistModule.select} id="final-form">
                      <option value="Not Complete">Not Complete</option>
                      <option value="Submitted">Submitted</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>

            <input style={checklistModule.submit} id="submitBtn" type="submit" onClick={this.submit}/>
          </div>
        </div>
      );

    // User version
    } else {
      return (
        <div>
          <Header/>
          <div style={checklistModule.wrapper} className="checklist-wrapper">
            <h2 style={checklistModule.header}>Adopter's To-Do:</h2>
            <table style={checklistModule.checklist}>
              <tbody>
                <tr className="list-item">
                  <td style={checklistModule.listItemLeft}>
                    <Link to="application">Fill out application form:</Link>
                  </td>
                  <td style={checklistModule.listItemRight}>
                    <div id="application-form">{appForm}</div>
                  </td>
                </tr>
                <tr className="list-item">
                  <td style={checklistModule.listItemLeft}>
                    <Link to="contact">Discuss Application:</Link>
                  </td>
                  <td style={checklistModule.listItemRight}>
                    <div id="discuss">{discussForm}</div>
                  </td>
                </tr>
                <tr className="list-item">
                  <td style={checklistModule.listItemLeft}>
                    <Link to="homeVisit">Shedule Home Check:</Link>
                  </td>
                  <td style={checklistModule.listItemRight}>
                    <div id="home-form">{homeForm}</div>
                  </td>
                </tr>
                <tr className="list-item">
                  <td style={checklistModule.listItemLeft}>
                    <Link to="all-done">Go Get Your New Friend:</Link>
                  </td>
                  <td style={checklistModule.listItemRight}>
                    <div id="final-form">{finalForm}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    clearance: state.clearance,
    statuses: {
      applicationStatus: state.statuses.applicationStatus,
      discussStatus: state.statuses.discussStatus,
      homeCheckStatus: state.statuses.homeCheckStatus,
      finalStatus: state.statuses.finalStatus,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    checklistActions: bindActionCreators(checklistActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(checklist));
