import React from 'react';
import "./Header.css";
import logo from "./logo.jpg";

const Header = () => {
  const clearance = localStorage.getItem("clearance");
  var dropDownStyle = { display: "none" };

    return (
      <div class="header-wrapper">
        <img src={logo} id="logo" alt="logo" />
        <div class="nav-bar">
          <a class="header-link hide-link" href="./kennel.html">
            <button class="header-button" type="button">Kennel</button>
          </a>
          <a class="header-link hide-link" href="./admin-contact.html">
            <button class="header-button" type="button">Contact Adopter</button>
          </a>
          <a class="header-link hide-link" href="./view-application.html">
            <button class="header-button" type="button">View Application</button>
          </a>
          <a class="header-link hide-link" href="./checklist-admin.html">
            <button class="header-button" type="button">Adopter Checklist</button>
          </a>
          <button class="header-button" type="button" onclick="logout()">Logout</button>
          <div class="dropdown-holder" onclick="controlMenu()">
            <div class="dropdown-menu"></div>
            <div class="dropdown-menu"></div>
            <div class="dropdown-menu"></div>
          </div>
          <ul id="dropDown" style={dropDownStyle}>
            <a class="dropdown-link hide-link" href="kennel.html">
              <li class="dropdown-button">Kennel</li>
            </a>
            <a class="dropdown-link hide-link" href="admin-contact.html">
              <li class="dropdown-button">Contact Adopter</li>
            </a>
            <a class="dropdown-link hide-link" href="view-application.html">
              <li class="dropdown-button">View Application</li>
            </a>
            <a class="dropdown-link hide-link" href="checklist-admin.html">
              <li class="dropdown-button">Adopter Checklist</li>
            </a>
            <li class="dropdown-link hide-link" onclick="logout()" class="dropdown-button">Logout</li>
          </ul>
        </div>
      </div> 
    );

}

export default Header;
