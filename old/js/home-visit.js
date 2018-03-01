function submitHomeVisit () {
  const date = document.getElementById("home-visit-datepicker");
  const comments = document.getElementById("home-visit-comments");
  const time = document.getElementById("home-visit-time");

  console.log(comments.value);
  if (date.value.length > 0 && comments.value.length > 0) {
    localStorage.setItem("visitDate", date.value);
    localStorage.setItem("visitComments", comments.value);
    localStorage.setItem("visitTime", time.value);

    localStorage.setItem("homeCheckStatus", "Submitted");
    document.getElementById("home-visit-head").innerHTML =
      "Schedule Home Visit (Submitted)";
  } else {
    document.getElementById("home-visit-head").innerHTML =
      "Schedule Home Visit (Incomplete)";
  }
}

function readyHeader () {
  const done = localStorage.getItem("homeCheckStatus");

  const date = document.getElementById("home-visit-datepicker");
  const comments = document.getElementById("home-visit-comments");
  const time = document.getElementById("home-visit-time");

  if (done == "notReady") {
    document.getElementById("home-visit-head").innerHTML =
      "Schedule Home Visit";
  } else if (done == "Submitted") {
    document.getElementById("home-visit-head").innerHTML =
      "Schedule Home Visit (Submitted)";
  } else if (done == "Completed") {
    document.getElementById("home-visit-head").innerHTML =
      "Schedule Home Visit (Completed)";
  }

  date.value = localStorage.getItem("visitDate");
  comments.value = localStorage.getItem("visitComments");
  time.value = localStorage.getItem("visitTime");
}

