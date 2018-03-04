import React from 'react';
import "./Header.css";
import logo from "./logo.jpg";
import "./noMargins.css";

const Header = () => {
  const clearance = localStorage.getItem("clearance");
  var dropDownStyle = { display: "none" };
  if (clearance == "admin") {
    return (
      <div class="header-wrapper">
        <img src={logo} id="logo" alt="logo" />
        <div class="nav-bar">
          <a class="header-link hide-link" href="kennel">
            <button class="header-button" type="button">Kennel</button>
          </a>
          <a class="header-link hide-link" href="admin-contact">
            <button class="header-button" type="button">Contact Adopter</button>
          </a>
          <a class="header-link hide-link" href="view-application">
            <button class="header-button" type="button">View Application</button>
          </a>
          <a class="header-link hide-link" href="checklist-admin">
            <button class="header-button" type="button">Adopter Checklist</button>
          </a>
          <button class="header-button" type="button" onclick="logout()">Logout</button>
          <div class="dropdown-holder" onclick="controlMenu()">
            <div class="dropdown-menu"></div>
            <div class="dropdown-menu"></div>
            <div class="dropdown-menu"></div>
          </div>
          <ul id="dropDown" style={dropDownStyle}>
            <a class="dropdown-link hide-link" href="kennel">
              <li class="dropdown-button">Kennel</li>
            </a>
            <a class="dropdown-link hide-link" href="admin-contact">
              <li class="dropdown-button">Contact Adopter</li>
            </a>
            <a class="dropdown-link hide-link" href="view-application">
              <li class="dropdown-button">View Application</li>
            </a>
            <a class="dropdown-link hide-link" href="checklist-admin">
              <li class="dropdown-button">Adopter Checklist</li>
            </a>
            <li class="dropdown-link hide-link" onclick="logout()" class="dropdown-button">Logout</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div class="header-wrapper">
        <img src={logo} id="logo" alt="logo" />
        <div class="nav-bar">
          <a class="header-link hide-link" href="home">
            <button class="header-button" type="button">Home</button>
          </a>
          <a class="header-link hide-link" href="about-us">
            <button class="header-button" type="button">About Us</button>
          </a>
          <a class="header-link hide-link" href="kennel">
            <button class="header-button" type="button">Kennel</button>
          </a>
          <a class="header-link hide-link" href="checklist">
            <button class="header-button" type="button">Checklist</button>
          </a>
          <button class="header-button" type="button" onclick="logout()">Logout</button>
          <div class="dropdown-holder" onclick="controlMenu()">
            <div class="dropdown-menu"></div>
            <div class="dropdown-menu"></div>
            <div class="dropdown-menu"></div>
          </div>
          <ul id="dropDown" style={dropDownStyle}>
            <a class="dropdown-link hide-link" href="home">
              <li class="dropdown-button">Home</li>
            </a>
            <a class="dropdown-link hide-link" href="about-us">
              <li class="dropdown-button">About Us</li>
            </a>
            <a class="dropdown-link hide-link" href="kennel">
              <li class="dropdown-button">Kennel</li>
            </a>
            <a class="dropdown-link hide-link" href="checklist">
              <li class="dropdown-button">Checklist</li>
            </a>
            <li class="dropdown-link hide-link" onclick="logout()" class="dropdown-button">Logout</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
