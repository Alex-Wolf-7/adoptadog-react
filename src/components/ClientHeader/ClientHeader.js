import React from 'react';
import "./ClientHeader.css";
import logo from "./logo.jpg";
import "../Header/noMargins.css";
import { withRouter } from 'react-router-dom';



const Header = () => {
  const clearance = localStorage.getItem("clearance");
  var dropDownStyle = { display: "none" };

  function logout() {
    localStorage.setItem("clearance", "");
    this.props.history.push('/');
  }

  function controlMenu() {
    if (document.getElementById("dropDown").style.display === "none") {
      document.getElementById("dropDown").style.display = "inline-block";
    }
    else {
      document.getElementById("dropDown").style.display = "none";
    }
  }

    return (
      <div className="header-wrapper">
        <img src={logo} id="logo" alt="logo" />
        <div className="nav-bar">
          <a className="header-link hide-link" href="/home">
            <button className="header-button" type="button">Home</button>
          </a>
          <a className="header-link hide-link" href="/about">
            <button className="header-button" type="button">About Us</button>
          </a>
          <a className="header-link hide-link" href="/kennel">
            <button className="header-button" type="button">Kennel</button>
          </a>
          <a className="header-link hide-link" href="./userChecklist">
            <button className="header-button" type="button">Adopter Checklist</button>
          </a>
          <button className="header-button" type="button" onClick={logout}>Logout</button>
          <div className="dropdown-holder" onClick={controlMenu}>
            <div className="dropdown-menu"></div>
            <div className="dropdown-menu"></div>
            <div className="dropdown-menu"></div>
          </div>
          <ul id="dropDown" style={dropDownStyle}>
            <a className="dropdown-link hide-link" href="kennel.html">
              <li className="dropdown-button">Kennel</li>
            </a>
            <a className="dropdown-link hide-link" href="admin-contact.html">
              <li className="dropdown-button">Contact Adopter</li>
            </a>
            <a className="dropdown-link hide-link" href="view-application.html">
              <li className="dropdown-button">View Application</li>
            </a>
            <a className="dropdown-link hide-link" href="checklist-admin.html">
              <li className="dropdown-button">Adopter Checklist</li>
            </a>
            <li className="dropdown-link hide-link dropdown-button" onClick={logout}>Logout</li>
          </ul>
        </div>
      </div>
    );

}

export default withRouter(Header);
