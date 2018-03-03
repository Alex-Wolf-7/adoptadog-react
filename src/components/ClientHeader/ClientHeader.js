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
          <a className="header-link hide-link" href="/userChecklist">
            <button className="header-button" type="button">Checklist</button>
          </a>
          <a className="dropdown-link hide-link" href="/">
            <button className="dropdown-button" onClick={logout}>Logout</button>
          </a>
            <div className="dropdown-holder" onClick={controlMenu}>
            <div className="dropdown-menu"></div>
            <div className="dropdown-menu"></div>
            <div className="dropdown-menu"></div>
          </div>
          <ul id="dropDown" style={dropDownStyle}>
            <a className="header-link hide-link" href="/home">
              <li className="header-button" type="button">Home</li>
            </a>
            <a className="header-link hide-link" href="/about">
              <li className="header-button" type="button">About Us</li>
            </a>
            <a className="header-link hide-link" href="/kennel">
              <li className="header-button" type="button">Kennel</li>
            </a>
            <a className="header-link hide-link" href="/userChecklist">
              <li className="header-button" type="button">Checklist</li>
            </a>
            <a className="dropdown-link hide-link" href="/">
              <li className="dropdown-button" onClick={logout}>Logout</li>
            </a>
          </ul>
        </div>
      </div>
    );

}

export default withRouter(Header);
