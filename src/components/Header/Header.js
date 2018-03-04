import React from 'react';
import "./Header.css";
import logo from "./logo.jpg";
import "./noMargins.css";

const Header = () => {

  function logout() {
    localStorage.setItem("clearance", "");
  }

  var dropDownStyle = { display: "none" };
  function controlMenu() {
    if (document.getElementById("dropDown").style.display === "none") {
      document.getElementById("dropDown").style.display = "inline-block";
    }
    else {
      document.getElementById("dropDown").style.display = "none";
    }
  }

  const clearance = localStorage.getItem("clearance");

  if (clearance === "admin") {
    return (
      <div className="header-wrapper">
        <img src={logo} id="logo" alt="logo" />
        <div className="nav-bar">
          <a className="header-link hide-link" href="kennel">
            <button className="header-button" type="button">Kennel</button>
          </a>
          <a className="header-link hide-link" href="admin-contact">
            <button className="header-button" type="button">Contact Adopter</button>
          </a>
          <a className="header-link hide-link" href="viewApplication">
            <button className="header-button" type="button">View Application</button>
          </a>
          <a className="header-link hide-link" href="checklist">
            <button className="header-button" type="button">Adopter Checklist</button>
          </a>
          <a className="header-link hide-link" href="/">
            <button className="header-button" type="button" onClick={logout}>Logout</button>
          </a>
          <div className="dropdown-holder" onClick={controlMenu}>
            <div className="dropdown-menu"></div>
            <div className="dropdown-menu"></div>
            <div className="dropdown-menu"></div>
          </div>
          <ul id="dropDown" style={dropDownStyle}>
            <a className="dropdown-link hide-link" href="kennel">
              <li className="dropdown-button">Kennel</li>
            </a>
            <a className="dropdown-link hide-link" href="admin-contact">
              <li className="dropdown-button">Contact Adopter</li>
            </a>
            <a className="dropdown-link hide-link" href="view-application">
              <li className="dropdown-button">View Application</li>
            </a>
            <a className="dropdown-link hide-link" href="checklist">
              <li className="dropdown-button">Adopter Checklist</li>
            </a>
            <a className="dropdown-link hide-link" href="/">
              <li className="dropdown-button" onClick={logout}>Logout</li>
            </a>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="header-wrapper">
        <img src={logo} id="logo" alt="logo" />
        <div className="nav-bar">
          <a className="header-link hide-link" href="home">
            <button className="header-button" type="button">Home</button>
          </a>
          <a className="header-link hide-link" href="about-us">
            <button className="header-button" type="button">About Us</button>
          </a>
          <a className="header-link hide-link" href="kennel">
            <button className="header-button" type="button">Kennel</button>
          </a>
          <a className="header-link hide-link" href="checklist">
            <button className="header-button" type="button">Checklist</button>
          </a>
          <a className="header-link hide-link" href="/">
            <button className="header-button" type="button" onClick={logout}>Logout</button>
          </a>
          <div className="dropdown-holder" onClick={controlMenu}>
            <div className="dropdown-menu"></div>
            <div className="dropdown-menu"></div>
            <div className="dropdown-menu"></div>
          </div>
          <ul id="dropDown" style={dropDownStyle}>
            <a className="dropdown-link hide-link" href="home">
              <li className="dropdown-button">Home</li>
            </a>
            <a className="dropdown-link hide-link" href="about-us">
              <li className="dropdown-button">About Us</li>
            </a>
            <a className="dropdown-link hide-link" href="kennel">
              <li className="dropdown-button">Kennel</li>
            </a>
            <a className="dropdown-link hide-link" href="checklist">
              <li className="dropdown-button">Checklist</li>
            </a>
            <a className="dropdown-link hide-link" href="/">
              <li className="dropdown-button" onClick={logout}>Logout</li>
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
