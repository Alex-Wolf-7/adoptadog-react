function fillChecklist() {
  var appStatus = localStorage.getItem("applicationStatus");

  var appForm = document.getElementById('application-form');
  if(appStatus === "Completed") {
    appForm.innerHTML = "Completed";
  }
  else if(appStatus === "Submitted") {
    appForm.innerHTML = "Submitted";
  }
  else {
    appForm.innerHTML = "Not Complete";
  }

  var discussStatus = localStorage.getItem("discussionStatus");
  var discussForm = document.getElementById('discuss');
  if(discussStatus === "Completed") {
    discussForm.innerHTML = "Completed";
  }
  else if(discussStatus === "Submitted") {
    discussForm.innerHTML = "Submitted";
  }
  else {
    discussForm.innerHTML = "Not Complete";
  }

  var homeCheckStatus = localStorage.getItem("homeCheckStatus");
  var homeForm = document.getElementById('home-form');
  if(homeCheckStatus === "Completed") {
    homeForm.innerHTML = "Completed";
  }
  else if(homeCheckStatus === "Submitted") {
    homeForm.innerHTML = "Submitted";
  }
  else {
    homeForm.innerHTML = "Not Complete";
  }

  var finalStatus = localStorage.getItem("finalStatus");
  var finalForm = document.getElementById('final-form');
  if(finalStatus === "Completed") {
    finalForm.innerHTML = "Completed";
  }
  else if(finalStatus === "Submitted") {
    finalForm.innerHTML = "Submitted";
  }
  else {
    finalForm.innerHTML = "Not Complete";
  }
}
