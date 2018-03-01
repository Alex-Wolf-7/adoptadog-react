function ready() {

  const date = document.getElementById("home-visit-datepicker");
  console.log(date);
  const comments = document.getElementById("home-visit-comments");
  const time = document.getElementById("home-visit-time");


  date.innerHTML = localStorage.getItem("visitDate");
  comments.innerHTML = localStorage.getItem("visitComments");
  time.innerHTML = localStorage.getItem("visitTime");
}