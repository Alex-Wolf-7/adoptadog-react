// Returns clearance string
function loginCheck() {
  return localStorage.getItem("clearance");
}

// Boots to login page if not admin
function adminOnly() {
  if (loginCheck() !== "admin") {
    window.location.replace("/");
  }
}

// Boots to login page if not logged in as "user" (admins not allowed either)
function userOnly() {
  if (loginCheck() !== "user") {
    window.location.replace("/");
  }
}

// Boots user to login page if they are not logged in
function adminOrUser() {
  const clearance = loginCheck();
  if (clearance !== "user" && clearance !== "admin") {
    window.location.replace("/");
  }
}

export {loginCheck, adminOnly, userOnly, adminOrUser}; 
