import React, { Component } from 'react';
import './adminHomeVisit.css';
import Header from '../Header/Header.js'
import { withRouter } from 'react-router-dom'
import { adminOnly } from "../authenticate.js"
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class adminHomeVisit extends Component {
  componentWillMount () {
    adminOnly(this.props.clearance);
  }

  render() {
    var date = document.getElementById("home-visit-datepicker");
    if (date === "") { date = "No date set" };
    var comments = document.getElementById("home-visit-comments");
    if (comments === "") { comments = "No comments" };
    var time = document.getElementById("home-visit-time");
    if (time === "") { time = "No time set" };

    return (
      <div>
        <Header/>
        <div className="home-visit-wrapper">
          <h2 className="home-visit-header">Planned Home Visit</h2>

          <p className="home-visit-text">Date Selected for the visit:</p>
          <h3 className="home-visit-date" id="home-visit-datepicker">{this.props.homeVisit.date}</h3>
          <p className="home-visit-text">Time selected for the visit:</p>
          <h3 className="home-visit-text" id="home-visit-time">{this.props.homeVisit.time}</h3>

          <p className="home-visit-text">Additional Comments:</p>
          <h5 className="home-visit-comments" id="home-visit-comments">{this.props.homeVisit.comments}</h5>
        </div>
      </div>
    );
  }
}

adminHomeVisit.propTypes = {
  clearance: PropTypes.string
};


function mapStateToProps(state) {
  return {
    clearance: state.clearance
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(adminHomeVisit));
