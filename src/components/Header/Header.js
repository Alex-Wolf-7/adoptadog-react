import React, { Component } from 'react';
import "./Header.css";
import logo from "./logo.jpg";
import "./noMargins.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as loginActions from "../../actions/loginActions.js" 
import {bindActionCreators} from 'redux';

class Header extends Component {
  constructor (props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  
  logout() {
    this.props.loginActions.setClearance("");
  }

  controlMenu() {
    if (document.getElementById("dropDown").style.display === "none") {
      document.getElementById("dropDown").style.display = "inline-block";
    }
    else {
      document.getElementById("dropDown").style.display = "none";
    }
  }

  render () {
    var dropDownStyle = { display: "none" };
    const clearance = this.props.clearance;

    if (clearance === "admin") {
      return (
        <div className="header-wrapper">
          <img src={logo} id="logo" alt="logo" />
          <div className="nav-bar">
            <Link className="header-link hide-link" to="/kennel">
              <button className="header-button" type="button">Kennel</button>
            </Link>
            <Link className="header-link hide-link" to="/contact">
              <button className="header-button" type="button">Contact Adopter</button>
            </Link>
            <Link className="header-link hide-link" to="/viewApplication">
              <button className="header-button" type="button">View Application</button>
            </Link>
            <Link className="header-link hide-link" to="/checklist">
              <button className="header-button" type="button">Adopter Checklist</button>
            </Link>
            <Link className="header-link hide-link" to="/">
              <button className="header-button" type="button" onClick={this.logout}>Logout</button>
            </Link>
            <div className="dropdown-holder" onClick={this.controlMenu}>
              <div className="dropdown-menu"></div>
              <div className="dropdown-menu"></div>
              <div className="dropdown-menu"></div>
            </div>
            <ul id="dropDown" style={dropDownStyle}>
              <Link className="dropdown-link hide-link" to="/kennel">
                <li className="dropdown-button">Kennel</li>
              </Link>
              <Link className="dropdown-link hide-link" to="/admin">
                <li className="dropdown-button">Contact Adopter</li>
              </Link>
              <Link className="dropdown-link hide-link" to="/view-application">
                <li className="dropdown-button">View Application</li>
              </Link>
              <Link className="dropdown-link hide-link" to="/checklist">
                <li className="dropdown-button">Adopter Checklist</li>
              </Link>
              <Link className="dropdown-link hide-link" to="/">
                <li className="dropdown-button" onClick={this.logout}>Logout</li>
              </Link>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="header-wrapper">
          <img src={logo} id="logo" alt="logo" />
          <div className="nav-bar">
            <Link className="header-link hide-link" to="home">
              <button className="header-button" type="button">Home</button>
            </Link>
            <Link className="header-link hide-link" to="about-us">
              <button className="header-button" type="button">About Us</button>
            </Link>
            <Link className="header-link hide-link" to="kennel">
              <button className="header-button" type="button">Kennel</button>
            </Link>
            <Link className="header-link hide-link" to="checklist">
              <button className="header-button" type="button">Checklist</button>
            </Link>
            <Link className="header-link hide-link" to="/">
              <button className="header-button" type="button" onClick={this.logout}>Logout</button>
            </Link>
            <div className="dropdown-holder" onClick={this.controlMenu}>
              <div className="dropdown-menu"></div>
              <div className="dropdown-menu"></div>
              <div className="dropdown-menu"></div>
            </div>
            <ul id="dropDown" style={this.dropDownStyle}>
              <Link className="dropdown-link hide-link" to="home">
                <li className="dropdown-button">Home</li>
              </Link>
              <Link className="dropdown-link hide-link" to="about-us">
                <li className="dropdown-button">About Us</li>
              </Link>
              <Link className="dropdown-link hide-link" to="kennel">
                <li className="dropdown-button">Kennel</li>
              </Link>
              <Link className="dropdown-link hide-link" to="checklist">
                <li className="dropdown-button">Checklist</li>
              </Link>
              <Link className="dropdown-link hide-link" to="/">
                <li className="dropdown-button" onClick={this.logout}>Logout</li>
              </Link>
            </ul>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    clearance: state.clearance,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators(loginActions, dispatch), 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
