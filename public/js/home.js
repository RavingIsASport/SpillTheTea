const toggleBtn = document.querySelector("#toggle-btn");
let navDiv = document.querySelector("#navDiv");

function showNav() {
  if (navDiv.classList.contains("-right-24")) {
    navDiv.classList.remove("-right-24");
    navDiv.classList.add("right-0");
  } else {
    navDiv.classList.add("-right-24");
    navDiv.classList.remove("right-0");
  }
}

const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

toggleBtn.addEventListener("click", showNav);
document.querySelector("#logout").addEventListener("click", logout);
