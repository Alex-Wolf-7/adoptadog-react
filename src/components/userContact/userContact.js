import React from 'react';
import './userContact.css';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as chatActions from '../../actions/chatActions';

class userContact extends React.Component {

  constructor(props) {
      super(props);
      this.sendMessage = this.sendMessage.bind(this);
      this.loadMessageLogs = this.loadMessageLogs.bind(this);

      this.state = {
        userClearance: this.props.clearance,
        chatLog: [{message:"", sender:""}]

      }
    }

  render() {
    return (
      <div>
      <Header/>

      <div className="form-wrapper bordered">
        <div className="header">
            <h2>Contact Dog Animal Rescue Adoption Coordinator</h2>
        </div>

        <div className="hours">
            <h3>Work Hour: Monday - Friday</h3>
        </div>

        <div className="moreMargin">
            <h2>Message Me</h2>
        </div>

        <form className="spacer1Contact bordered">
            <ul className="chat-log">
                <div className="flex-container">
                        <ul id="internal-list">
                        </ul>
                </div>
            </ul>
            <div className="chat-input">
                <input type="text" id="input-field" />
                <button type="submit" id="submit-button">Submit</button>
            </div>
        </form>
    </div>
    </div>


    );
  }
    componentWillMount() {

    }

    componentDidMount() {
      document.getElementById("submit-button").addEventListener("click", this.sendMessage, false);
      var promise = new Promise((resolve, reject) => {
        resolve();
      });

      promise.then(() => {
        this.loadMessageLogs();
      });
    }

  sendMessage(e) {
    e.preventDefault();
    var msg = document.getElementById("input-field").value;
    if (msg.length > 0) {
      //if the message has length then create a li element and prepend it to the chat log.
      var chatbox = document.getElementById("internal-list");
      var newMessage = document.createElement("li");
      newMessage.innerHTML = msg;
      newMessage.classList.add("userMsg");
      chatbox.appendChild(newMessage);
      document.getElementById("input-field").value = "";

      //Turn this into a mock api call?
      this.props.chatActions.sendMessage(msg, this.props.clearance);

    }
  }

  loadMessageLogs() {
    console.log(this.props);
    if (this.props.chatLog !== []) {
      for (var i = 0; i < this.props.chatLog.length; i++) {
        var msg = this.props.chatLog[i].message;
        var sender = this.props.chatLog[i].sender;
        var chatbox = document.getElementById("internal-list");
        var newMessage = document.createElement("li");
        newMessage.innerHTML = msg;

        if (sender === "user") {
          if (this.state.userClearance === sender) {
            newMessage.classList.add("userMsg");
          }
          else {
            newMessage.classList.add("otherMsg");
          }
          chatbox.appendChild(newMessage);
        }
        else {
          if (this.state.userClearance === "user") {
            newMessage.classList.add("otherMsg");
          }
          else {
            newMessage.classList.add("userMsg");
          }
          chatbox.appendChild(newMessage);
        }
      }
    }
  }

}

userContact.propTypes = {
  chatActions: PropTypes.object,
  chatLog: PropTypes.array
};


function mapStateToProps(state) {
  return {
    chatLog: state.chatLog
  };
}

function mapDispatchToProps(dispatch) {
  return {
    chatActions: bindActionCreators(chatActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(userContact));
