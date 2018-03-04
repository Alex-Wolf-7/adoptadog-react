import React, { Component } from 'react';
import './checklist.css';
import Header from '../Header/Header.js'
import { withRouter } from 'react-router-dom'
import { adminOrUser } from "../authenticate.js"

class checklist extends Component {
  componentWillMount () {
    adminOrUser();
  }

  render() {
    const appStatus = localStorage.getItem("applicationStatus");
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

    const discussStatus = localStorage.getItem("discussionStatus");
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

    const homeCheckStatus = localStorage.getItem("homeCheckStatus");
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

    const finalStatus = localStorage.getItem("finalStatus");
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

    if (localStorage.getItem("clearance") === "admin") {
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
                    <a href="admin-home-visit">Shedule Home Check:</a>
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

            <input className="submit-checklist" id="submitBtn" type="submit" onClick={submit}/>
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
                    <a href="application">Fill out application form:</a>
                  </td>
                  <td className="list-item-right">
                    <div id="application-form">{appForm}</div>
                  </td>
                </tr>
                <tr className="list-item">
                  <td className="list-item-left">
                    <a href="contact">Discuss Application:</a>
                  </td>
                  <td className="list-item-right">
                    <div id="discuss">{discussForm}</div>
                  </td>
                </tr>
                <tr className="list-item">
                  <td className="list-item-left">
                    <a href="homeVisit">Shedule Home Check:</a>
                  </td>
                  <td className="list-item-right">
                    <div id="home-form">{homeForm}</div>
                  </td>
                </tr>
                <tr className="list-item">
                  <td className="list-item-left">
                    <a href="all-done">Go Get Your New Friend:</a>
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

function submit() {
  var appVal = document.getElementById('application-form').value;
  var discussVal = document.getElementById('discuss').value;
  var homeVal = document.getElementById('home-form').value;
  var finalVal = document.getElementById('final-form').value;

  localStorage.setItem("applicationStatus", appVal);
  localStorage.setItem("discussionStatus", discussVal);
  localStorage.setItem("homeCheckStatus", homeVal);
  localStorage.setItem("finalStatus", finalVal);

  alert("Checklist saved");
}

export default withRouter(checklist);
