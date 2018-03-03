import React from 'react';
import "./ClientHeader.css";
import logo from "./logo.jpg";
import "../Header/noMargins.css";

const Header = () => {
  const clearance = localStorage.getItem("clearance");
  var dropDownStyle = { display: "none" };

    return (
      <div class="header-wrapper">
        <img src={logo} id="logo" alt="logo" />
        <div class="nav-bar">
          <a class="header-link hide-link" href="/home">
            <button class="header-button" type="button">Home</button>
          </a>
          <a class="header-link hide-link" href="./about">
            <button class="header-button" type="button">About Us</button>
          </a>
          <a class="header-link hide-link" href="/kennel">
            <button class="header-button" type="button">Kennel</button>
          </a>
          <a class="header-link hide-link" href="./userChecklist">
            <button class="header-button" type="button">Adopter Checklist</button>
          </a>
          <button class="header-button" type="button" onClick="logout">Logout</button>
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
    function logout () {
      localStorage.setItem("clearance", "");
      window.location.href = "./login.html";
    }


}

export default Header;
