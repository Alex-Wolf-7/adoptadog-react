import React from 'react';
import "./Header.css";
import logo from "./logo.jpg";
import "./noMargins.css";
import { Link } from "react-router-dom"

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
            <button className="header-button" type="button" onClick={logout}>Logout</button>
          </Link>
          <div className="dropdown-holder" onClick={controlMenu}>
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
              <li className="dropdown-button" onClick={logout}>Logout</li>
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
            <button className="header-button" type="button" onClick={logout}>Logout</button>
          </Link>
          <div className="dropdown-holder" onClick={controlMenu}>
            <div className="dropdown-menu"></div>
            <div className="dropdown-menu"></div>
            <div className="dropdown-menu"></div>
          </div>
          <ul id="dropDown" style={dropDownStyle}>
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
              <li className="dropdown-button" onClick={logout}>Logout</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
