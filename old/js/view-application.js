window.onload = function () {
  loadOldInfo();
}

function loadOldInfo() {
  var dataOrder = ["name", "address", "housing", "email", "phone", "vetName", "vetEmail", "vetPhone", "dogName", "currPets", "dailySchedule"];
  var data = JSON.parse(localStorage.getItem("applicationData"));

  console.log(data);
  for(var i in dataOrder) {
    document.getElementById(dataOrder[i]).innerHTML = data[i];
  }
}
