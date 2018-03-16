// Boots to login page if not admin
function adminOnly(clearance) {
  if (clearance !== "admin") {
    window.location.replace("/");
  }
}

// Boots to login page if not logged in as "user" (admins not allowed either)
function userOnly(clearance) {
  if (clearance !== "user") {
    window.location.replace("/");
  }
}

// Boots user to login page if they are not logged in
function adminOrUser(clearance) {
  if (clearance !== "user" && clearance !== "admin") {
    window.location.replace("/");
  }
}

export {adminOnly, userOnly, adminOrUser};
