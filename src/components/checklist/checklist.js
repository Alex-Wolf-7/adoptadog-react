import React, { Component } from 'react';
import './checklist.css';
import Header from '../Header/Header.js'
import { withRouter, Link } from 'react-router-dom'
import { adminOrUser } from "../authenticate.js"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
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
          <div className="checklist-wrapper">
            <h2 className="checklist-header">Adopter's To-Do:</h2>
            <table className="checklist">
              <tbody>
                <tr className="list-item">
                  <td className="list-item-left">
                    Fill out application form:
                  </td>
                  <td className="list-item-right">
                    <select defaultValue={appForm} className="checklist-select" id="application-form">
                      <option value="Not Complete">Not Complete</option>
                      <option value="Submitted">Submitted</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                </tr>
                <tr className="list-item">
                  <td className="list-item-left">
                    Discuss Application:
                  </td>
                  <td className="list-item-right">
                    <select defaultValue={discussForm} className="checklist-select" id="discuss">
                      <option value="Not Complete">Not Complete</option>
                      <option value="Submitted">Submitted</option>
                      <option value="Completed">Completed</option>
                     </select>
                  </td>
                </tr>
                <tr className="list-item">
                  <td className="list-item-left">
                    <Link to="admin-home-visit">Shedule Home Check:</Link>
                  </td>
                  <td className="list-item-right">
                    <select defaultValue={homeForm} className="checklist-select" id="home-form">
                      <option value="Not Complete">Not Complete</option>
                      <option value="Submitted">Submitted</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                </tr>
                <tr className="list-item">
                  <td className="list-item-left">
                    Go Get Your New Friend:
                  </td>
                  <td className="list-item-right">
                    <select defaultValue={finalForm} className="checklist-select" id="final-form">
                      <option value="Not Complete">Not Complete</option>
                      <option value="Submitted">Submitted</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>

            <input className="submit-checklist" id="submitBtn" type="submit" onClick={this.submit}/>
          </div>
        </div>
      );

    // User version
    } else {
      return (
        <div>
          <Header/>
          <div className="checklist-wrapper">
            <h2 className="checklist-header">Adopter's To-Do:</h2>
            <table className="checklist">
              <tbody>
                <tr className="list-item">
                  <td className="list-item-left">
                    <Link to="application">Fill out application form:</Link>
                  </td>
                  <td className="list-item-right">
                    <div id="application-form">{appForm}</div>
                  </td>
                </tr>
                <tr className="list-item">
                  <td className="list-item-left">
                    <Link to="contact">Discuss Application:</Link>
                  </td>
                  <td className="list-item-right">
                    <div id="discuss">{discussForm}</div>
                  </td>
                </tr>
                <tr className="list-item">
                  <td className="list-item-left">
                    <Link to="homeVisit">Shedule Home Check:</Link>
                  </td>
                  <td className="list-item-right">
                    <div id="home-form">{homeForm}</div>
                  </td>
                </tr>
                <tr className="list-item">
                  <td className="list-item-left">
                    <Link to="all-done">Go Get Your New Friend:</Link>
                  </td>
                  <td className="list-item-right">
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
