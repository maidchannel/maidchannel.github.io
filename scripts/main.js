// Queries to get heading, regardless of default HTML setting
const myHeading = document.querySelector("h1");
myHeading.textContent = "Maid Channel";

// Creates event when clicking image (pop-up/prompt)
document.querySelector("html").addEventListener("click", () => {
    alert("Help, I can't draw maids!");
  });
