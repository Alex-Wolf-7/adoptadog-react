function prepareChecklist() {
  var appStatus = localStorage.getItem("applicationStatus");

  var appStatus = localStorage.getItem("applicationStatus");
  var appForm = document.getElementById('application-form');
  if(appStatus === "Completed") {
    appForm.value = "Completed";
  }
  else if(appStatus === "Submitted") {
    appForm.value = "Submitted";
  }
  else {
    appForm.value = "notReady";
  }

  var discussStatus = localStorage.getItem("discussionStatus");
  var discussForm = document.getElementById('discuss');
  if(discussStatus === "Completed") {
    discussForm.value = "Completed";
  }
  else if(discussStatus === "Submitted") {
    discussForm.value = "Submitted";
  }
  else {
    discussForm.value = "notReady";
  }

  var homeCheckStatus = localStorage.getItem("homeCheckStatus");
  var homeForm = document.getElementById('home-form');
  if(homeCheckStatus === "Completed") {
    homeForm.value = "Completed";
  }
  else if(homeCheckStatus === "Submitted") {
    homeForm.value = "Submitted";
  }
  else {
    homeForm.value = "notReady";
  }

  var finalStatus = localStorage.getItem("finalStatus");
  var finalForm = document.getElementById('final-form');
  if(finalStatus === "Completed") {
    finalForm.value = "Completed";
  }
  else if(finalStatus === "Submitted") {
    finalForm.value = "Submitted";
  }
  else {
    finalForm.value = "notReady";
  }
}

function submit() {
  var appVal = document.getElementById('application-form').value;
  var discussVal = document.getElementById('discuss').value;
  var homeVal = document.getElementById('home-form').value;
  var finalVal = document.getElementById('final-form').value;

  localStorage.setItem("applicationStatus", appVal);
  localStorage.setItem("discussionStatus", discussVal);
  localStorage.setItem("homeCheckStatus", homeVal);
  localStorage.setItem("finalStatus", finalVal);

  alert("Checklist saved");
}
