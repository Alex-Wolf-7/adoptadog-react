import React, { Component } from 'react';
import './kennel.css';
import logo from '../Header/logo.jpg' // relative path to image
import { withRouter } from 'react-router-dom'

export default class loginPage extends Component {

  render() {
    return (
      <div className="formWrapper bordered">
        <div className="row">
            <img src={logo} alt="" className="bordered img" />

            <div className="signinHeader">
                <h2 className="h2">Adopt A Dog Sign-In Portal</h2>
            </div>
            <span className="spacer1"></span>
        </div>
        <div className="row lessMargin">
            <div className="emailHeader">
                <h2 className="h2">Email:&nbsp;&nbsp;&nbsp;&nbsp;</h2>

            </div>

            <input type="text" id="emailInput"/>
        </div>
        <div className="row lessMargin">
            <div className="passwordHeader">
                <h2 className="h2">Password:</h2>
            </div>

            <input type="text" id="passwordInput"/>
        </div>

        <div className="row lessMargin">
            <form className="radioSection" action="">
                <div>
                    <input type="radio" id="adopter-radio" name="login-radio" value="adopter"/>
                    <span>Adopter</span>
                </div>

                <div>
                    <input type="radio" id="admin-radio" name="login-radio" value="admin"/>
                    <span> Admin </span>
                </div>
            </form>

            <button onClick={loginFunction} type="button" id="login-button">Login</button>
        </div>
    </div>


    )

    function loginFunction() {

        try {
            var emailInput = document.getElementById('emailInput').value;
            var passwordInput = document.getElementById('passwordInput').value;
            if (emailInput.length > 0 && passwordInput.length > 0){

                  var adopterInput = document.getElementById('adopter-radio');
                  var adminInput = document.getElementById('admin-radio');

                  if (adopterInput.checked){
                    withRouter(({history}) => {
                      history.push('/home');
                    });

                    if (typeof(Storage) !== "undefined"){
                      localStorage.setItem("clearance", "user");
                    }
                    else {
                        // Sorry! No Web Storage support..
                        }
                    }
                    else if (adminInput.checked){
                      window.location.replace("checklist-admin.html");
                      if (typeof(Storage) !== "undefined"){
                        localStorage.setItem("clearance", "admin");
                      }
                      else {
                        // Sorry! No Web Storage support..
                      }
                    }
                }
            }
            catch(err) {}
        }
    }
}
