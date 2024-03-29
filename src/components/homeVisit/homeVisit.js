import React, { Component } from 'react';
import './homeVisit.css';
import Header from '../Header/Header.js';
import { withRouter } from 'react-router-dom';
import { userOnly } from "../authenticate.js"
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as homeVisitActions from '../../actions/homeVisitActions';
import * as checklistActions from '../../actions/checklistActions';

class homeVisitComp extends Component {
  constructor(props) {
      super(props);
      this.submitHomeVisit = this.submitHomeVisit.bind(this);
      this.readyHeader = this.readyHeader.bind(this);
  }

  render() {
    return (
      <div>
      <Header/>
      <div className="home-visit-wrapper">
          <h2 className="home-visit-header" id="home-visit-head">Schedule Home Visit</h2>
          <p className="home-visit-text">Work Hours: Monday - Friday, 9am - 5pm</p>
          <p className="home-visit-text home-visit-disclaimer">
              Schedule a home visit, where a knowledgeable volunteer will meet with all
              residents to identify any risks or items to monitor for when your new pet
              comes home
          </p>
          <p className="home-visit-text">Please select a date for the visit</p>
          <input className="home-visit-date" type="date" id="home-visit-datepicker"/>
          <p className="home-visit-text">Please select a time for the visit</p>
          <select className="home-visit-time" id="home-visit-time">
              <option value="9am">9:00am</option>
              <option value="10am">10:00am</option>
              <option value="11am">11:00am</option>
              <option value="12pm">12:00pm</option>
              <option value="1pm">1:00pm</option>
              <option value="2pm">2:00pm</option>
              <option value="3pm">3:00pm</option>
              <option value="4pm">4:00pm</option>
          </select>
          <textarea className="home-visit-comments" placeholder="Any extra comments you would like to add?" id="home-visit-comments"></textarea>
          <input type="submit" id="home-visit-submit"/>
      </div>
      </div>
    );
  }

  componentDidMount() {
    userOnly(this.props.clearance);
    document.getElementById("home-visit-submit").addEventListener("click", this.submitHomeVisit);
    this.readyHeader();
  }

  submitHomeVisit () {
    const date = document.getElementById("home-visit-datepicker");
    const comments = document.getElementById("home-visit-comments");
    const time = document.getElementById("home-visit-time");

    console.log(comments.value);
    if (date.value.length > 0 && comments.value.length > 0) {
      this.props.homeVisitActions.saveHomeVisit(date.value, time.value, comments.value);
      this.props.checklistActions.changeHomeCheckStatus("Submitted");
      
      document.getElementById("home-visit-head").innerHTML =
        "Schedule Home Visit (Submitted)";
    } else {
      document.getElementById("home-visit-head").innerHTML =
        "Schedule Home Visit (Incomplete)";
    }
  }

  readyHeader () {
    const done = this.props.statuses.homeCheckStatus;

    const date = document.getElementById("home-visit-datepicker");
    const comments = document.getElementById("home-visit-comments");
    const time = document.getElementById("home-visit-time");

    if (done === "notReady") {
      document.getElementById("home-visit-head").innerHTML =
        "Schedule Home Visit";
    } else if (done === "Submitted") {
      document.getElementById("home-visit-head").innerHTML =
        "Schedule Home Visit (Submitted)";
    } else if (done === "Completed") {
      document.getElementById("home-visit-head").innerHTML =
        "Schedule Home Visit (Completed)";
    }

    date.value = this.props.homeVisit.date;
    comments.value = this.props.homeVisit.comments;
    time.value = this.props.homeVisit.time;
  }
}


homeVisitComp.propTypes = {
  clearance: PropTypes.string
};


function mapStateToProps(state) {
  return {
    clearance: state.clearance,
    homeVisit: {
      date: state.homeVisit.date,
      time: state.homeVisit.time,
      comments: state.homeVisit.comments,
    },
    statuses: {
      homeCheckStatus: state.statuses.homeCheckStatus,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    homeVisitActions: bindActionCreators(homeVisitActions, dispatch),
    checklistActions: bindActionCreators(checklistActions, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(homeVisitComp));
