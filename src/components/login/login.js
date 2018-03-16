import React from 'react';
import './login.css';
import logo from '../Header/logo.jpg'; // relative path to image
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as loginActions from '../../actions/loginActions';

class loginComp extends React.Component {
  constructor(props) {
      super(props)
      this.loginFunction = this.loginFunction.bind(this);
      this.updateEmail = this.updateEmail.bind(this);
      this.updatePass = this.updatePass.bind(this);

      this.state = {
        email: "",
        password: ""
      }
    }

    loginFunction() {
       try {
           var emailInput = this.state.email;
           console.log("what");
           var passwordInput = this.state.password;

           if (emailInput.length > 0 && passwordInput.length > 0){
             var adopterInput = document.getElementById('adopter-radio');
             var adminInput = document.getElementById('admin-radio');

             if (adopterInput.checked) {
               this.props.loginActions.setClearance("user");
               this.props.history.push('/home');
             }
             else if (adminInput.checked){
               this.props.loginActions.setClearance("admin");
               this.props.history.push('/checklist');
             }
           }
         }
       catch(err) {}
     }
     updateEmail(e) {
       this.setState({email: e.target.value, password: this.state.password});
     }

     updatePass(e) {
       console.log("updating");

       this.setState({email: this.state.email, password: e.target.value});
     }

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

            <input type="text" id="emailInput" onChange={this.updateEmail} value={this.state.email}/>
          </div>
          <div className="row lessMargin">
            <div className="passwordHeader">
              <h2 className="h2">Password:</h2>
            </div>

            <input type="text" id="passwordInput" onChange={this.updatePass} value={this.state.password}/>
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

            <button onClick={this.loginFunction} type="button" id="login-button">Login</button>
        </div>
    </div>
    );
  }
}

loginComp.propTypes = {
  loginActions: PropTypes.object,
  clearance: PropTypes.string
};


function mapStateToProps(state) {
  return {
    chatLog: state.chatLog,
    clearance: state.clearance
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators(loginActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(loginComp));
