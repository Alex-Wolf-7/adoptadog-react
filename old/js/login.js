
function loginFunction(){
  var emailInput = document.getElementById('email-input').value;
  var passwordInput = document.getElementById('password-input').value;

  if (emailInput.length > 0 && passwordInput.length > 0){
    var adopterInput = document.getElementById('adopter-radio');
    var adminInput = document.getElementById('admin-radio');

    if (adopterInput.checked){
      window.location.replace("checklist.html");
      if (typeof(Storage) !== "undefined"){
        localStorage.setItem("clearance", "user");
      }
      else {
        // Sorry! No Web Storage support..
      }
    }
    else if (adminInput.checked){
      window.location.replace("checklist-admin.html");
      if (typeof(Storage) !== "undefined"){
        localStorage.setItem("clearance", "admin");
      }
      else {
        // Sorry! No Web Storage support..
      }
    }
  }
}
