function logout () {
  localStorage.setItem("clearance", "");
  window.location.href = "./login.html";
}
