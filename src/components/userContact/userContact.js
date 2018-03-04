import React from 'react';
import './userContact.css';
import { withRouter } from 'react-router-dom';
import ClientHeader from '../ClientHeader/ClientHeader.js';


class userContact extends React.Component {

  constructor(props) {
      super(props);
      this.sendMessage = this.sendMessage.bind(this);
      this.loadMessageLogs = this.loadMessageLogs.bind(this);

      this.state = {
        userClearance: localStorage.getItem("clearance"),
        chatLog: [{message:"", sender:""}]

      }
    }

  render() {
    return (
      <div>
      <ClientHeader></ClientHeader>

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
      //set any stateful info from the localStorage
      if(JSON.parse(localStorage.getItem("chatLog")) !== null) {
        this.setState({chatLog: JSON.parse(localStorage.getItem("chatLog"))});
          
        console.log(this.state.chatLog);

      }
    }

    componentDidMount() {
      document.getElementById("submit-button").addEventListener("click", this.sendMessage, false);
      // localStorage.removeItem("chatLog");
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

      if(typeof(Storage) !== "undefined") {
        //store the message into the storage space
        this.state.chatLog.push({message: msg, sender: localStorage.getItem("clearance")});
        localStorage.setItem("chatLog", JSON.stringify(this.state.chatLog));
      } else {
        //do nothing, there is no storage on this browser
      }
    }
  }

  loadMessageLogs() {
    if (this.state.chatLog !== null) {
      for (var i = 0; i < this.state.chatLog.length; i++) {
        var msg = this.state.chatLog[i].message;
        var sender = this.state.chatLog[i].sender;
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
export default withRouter(userContact);
