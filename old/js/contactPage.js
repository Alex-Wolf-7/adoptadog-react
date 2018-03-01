var chatLog = JSON.parse(localStorage.getItem("chatLog"));

window.onload = function() {
  document.getElementById("submit-button").addEventListener("click", sendMessage);
  // localStorage.removeItem("chatLog");
  var promise = new Promise((resolve, reject) => {
    resolve();
  }); 

  promise.then(() => {
    loadMessageLogs();
  });
}


function loadMessageLogs() {
  if (chatLog !== null) {
    console.log(chatLog);
    for (var i = 0; i < chatLog.length; i++) {
      var msg = chatLog[i].message;
      var sender = chatLog[i].sender;
      var chatbox = document.getElementById("internal-list");
      var newMessage = document.createElement("li");
      var userClearance = localStorage.getItem("clearance");
      newMessage.innerHTML = msg;

      if (sender === "user") {
        if (userClearance === sender) {
          newMessage.classList.add("userMsg");
        }
        else {
          newMessage.classList.add("otherMsg");
        }
        chatbox.appendChild(newMessage);
      }
      else {
        if (userClearance === "user") {
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

function sendMessage() {
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
      if (chatLog === null) {
        //create Chatlog
        var list1 = [];
        list1.push({message: msg, sender: localStorage.getItem("clearance")});
        chatLog = list1;
        //store the message
        localStorage.setItem("chatLog", JSON.stringify(chatLog));
      }
      else {
        chatLog.push({message: msg, sender: localStorage.getItem("clearance")});
        localStorage.setItem("chatLog", JSON.stringify(chatLog));
      }
    } else {
      //do nothing, there is no storage on this browser
    }
  }
}
