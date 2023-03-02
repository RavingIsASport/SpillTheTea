const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  const response = await fetch("/api/users/signup", {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};
document
  .querySelector("#signupForm")
  .addEventListener("submit", signupFormHandler);
