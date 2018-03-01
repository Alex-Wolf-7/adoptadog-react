window.onload = function () {
  updateSteps ();
  document.getElementById("next-task-button").addEventListener("click", updateNextPage);
}

function updateSteps () {
  var appStatus = localStorage.getItem("applicationStatus");
  var discussStatus = localStorage.getItem("discussionStatus");
  var homeCheckStatus = localStorage.getItem("homeCheckStatus");
  var finalStatus = localStorage.getItem("finalStatus");
  var todoTask = document.getElementById("todo-tasks");

  if (appStatus === "notReady" || appStatus === "Submitted") {
    todoTask.innerHTML = "Step #1 - Fill Out The Adoption Form";
  }
  else if (appStatus === "Completed" && (discussStatus === "notReady" || discussStatus === "Submitted")) {
    todoTask.innerHTML = "Step #2 - Contact Dog Animal Rescue Adoption Coordinator";
  }
  else if (discussStatus === "Completed" && (homeCheckStatus === "notReady" || homeCheckStatus === "Submitted")) {
    todoTask.innerHTML = "Step #3 - Schedule Your Home Check";
  }
  else if (homeCheckStatus === "Completed") {
    todoTask.innerHTML = "Go Get Your New Dog Friend!";
  }
  else if (finalStatus === "Completed") {
    todoTask.innerHTML = "Go Get Your New Dog Friend!";
  }
}

function updateNextPage () {
  var appStatus = localStorage.getItem("applicationStatus");
  var discussStatus = localStorage.getItem("discussionStatus");
  var homeCheckStatus = localStorage.getItem("homeCheckStatus");
  var finalStatus = localStorage.getItem("finalStatus");

  if (appStatus === "notReady" || appStatus === "Submitted") {
    window.location = 'application-form.html';
  }
  else if (appStatus === "Completed" && (discussStatus === "notReady" || discussStatus === "Submitted")) {
    window.location = 'contact-page.html';
  }
  else if (discussStatus === "Completed" && (homeCheckStatus === "notReady" || homeCheckStatus === "Submitted")) {
    window.location = 'home-visit.html';
  }
  else if (homeCheckStatus === "Completed") {
    window.location = 'all-done.html';
  }
  else if (finalStatus === "Completed") {
    window.location = 'all-done.html';
  }
}
