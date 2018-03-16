import React, { Component } from 'react';
import './about.css';
import Header from '../Header/Header.js'
import { withRouter } from 'react-router-dom'
import shelterPic from "./ucsd-rescue-shelter.jpg"
import { adminOrUser } from "../authenticate.js"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

class aboutUs extends Component {
  componentWillMount () {
    adminOrUser(this.props.clearance);
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="about-us-wrapper">
          <h2 className="about-us-header">About Us:</h2>
          <img src={shelterPic} alt="Us at UCSD Rescue Shelter" id="about-us-picture"/>

          <p className="about-us-info">
            We are all about dogs at <b>UCSD Rescue Shelter</b>, and about finding great homes for those
            dogs. Our team has worked with animals for many years, and helped hundreds of dogs to find
            safe, loving homes where they can live long, happy lives. Helping dogs is not just a job to us,
            or even a hobby: it's a passion that every one of us at <b>UCSD Rescue Shelter</b> shares. We
            hope that we can be of help when it comes time for you to adopt a new family member!
          </p>
        </div>
      </div>
    );
  }
}
aboutUs.propTypes = {
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(aboutUs));
