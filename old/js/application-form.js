window.onload = function () {

  document.getElementById("submit-button").addEventListener("click", saveInfo);

  loadOldInfo();
}

function loadOldInfo() {
  var dataOrder = ["name", "address", "housing", "email", "phone", "vetName", "vetEmail", "vetPhone", "dogName", "currPets", "dailySchedule"];
  var data = JSON.parse(localStorage.getItem("applicationData"));

  if (localStorage.getItem("applicationStatus") === "Completed") {
    document.getElementById("heading").innerHTML = "Dog Application Form (Approved)";
  }
  else if( localStorage.getItem("applicationStatus") === "Submitted") {
    document.getElementById("heading").innerHTML = "Dog Application Form (Pending Approval)";
  }
  else {
    document.getElementById("heading").innerHTML = "Dog Application Form";
  }

  for(var i in dataOrder) {
    if (data[i] === null){
      break;
    }
    document.getElementById(dataOrder[i]).value = data[i];
  }
}

function saveInfo() {
  var completed = false;

  var name = document.getElementById("name");
  var address = document.getElementById("address");
  var housing = document.getElementById("housing");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var vetName = document.getElementById("vetName");
  var vetEmail = document.getElementById("vetEmail");
  var vetPhone = document.getElementById("vetPhone");
  var dogName = document.getElementById("dogName");
  var currPets = document.getElementById("currPets");
  var dailySchedule = document.getElementById("dailySchedule");

  var allElements = [];
  allElements.push(name.value);
  allElements.push(address.value);
  allElements.push(housing.value);
  allElements.push(email.value);
  allElements.push(phone.value);
  allElements.push(vetName.value);
  allElements.push(vetEmail.value);
  allElements.push(vetPhone.value);
  allElements.push(dogName.value);
  allElements.push(currPets.value);
  allElements.push(dailySchedule.value);

  localStorage.setItem("applicationData", JSON.stringify(allElements));

  for(i in allElements) {
    if (allElements[i].length < 1) {
      document.getElementById("heading").innerHTML = "Dog Application Form (Incomplete)";

      break;
    }
    document.getElementById("heading").innerHTML = "Dog Application Form (Pending Approval)";
    localStorage.setItem("applicationStatus", "Submitted");

  }
}
