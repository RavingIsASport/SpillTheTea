const newPostForm = async (event) => {
  event.preventDefault();

  const main = document.querySelector("#post-desc").value.trim();

  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({ main }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to create project");
  }
};

document.querySelector("#postForm").addEventListener("submit", newPostForm);
