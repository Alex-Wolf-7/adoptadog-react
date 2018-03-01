// Returns clearance string
function loginCheck() {
  return localStorage.getItem("clearance");
}

// Boots to login page if not admin
function adminOnly() {
  if (loginCheck() != "admin") {
    window.location.replace("./login.html");
  }
}

// Boots to login page if not logged in as "user" (admins not allowed either)
function userOnly() {
  if (loginCheck() != "user") {
    window.location.replace("./login.html");
  }
}

// Boots user to login page if they are not logged in
function adminOrUser() {
  const clearance = loginCheck();
  if (clearance != "user" && clearance != "admin") {
    window.location.replace("./login.html");
  }
}

// Automatically sets header to the admin header if needed
function autoHeader() {
  if (loginCheck() == "admin") {
    const headerLinks = document.getElementsByClassName("header-link");
    headerLinks[0].href = "./kennel.html"
    headerLinks[1].href = "./admin-contact.html"
    headerLinks[2].href = "./view-application.html"
    headerLinks[3].href = "./checklist-admin.html"

    const headerButtons = document.getElementsByClassName("header-button");
    headerButtons[0].innerHTML = "Kennel"
    headerButtons[1].innerHTML = "Contact Adopter"
    headerButtons[2].innerHTML = "View Application"
    headerButtons[3].innerHTML = "Adopter Checklist"

    const dropdownLinks = document.getElementsByClassName("dropdown-link");
    dropdownLinks[0].href = "./kennel.html"
    dropdownLinks[1].href = "./admin-contact.html"
    dropdownLinks[2].href = "./view-application.html"
    dropdownLinks[3].href = "./checklist-admin.html"

    const dropdownButtons = document.getElementsByClassName("dropdown-button");
    dropdownButtons[0].innerHTML = "Kennel"
    dropdownButtons[1].innerHTML = "Contact Adopter"
    dropdownButtons[2].innerHTML = "View Application"
    dropdownButtons[3].innerHTML = "Adopter Checklist"
  }
}
