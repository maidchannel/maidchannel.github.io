// Queries to get heading, regardless of default HTML setting
const myHeading = document.querySelector("h1");
myHeading.textContent = "Maid Channel";

// Creates event when clicking anything (pop-up/prompt)
//document.querySelector("html").addEventListener("click", () => {
 //   alert("Help, I can't draw maids!");
//  });

  // Adds a button to click and returns response in text
  function createParagraph() {
    const para = document.createElement("p");
      para.textContent = "This button reserved for future use, don't touch me!"
      document.body.appendChild(para);
    }

  const buttons = document.querySelectorAll("button");

  for (const button of buttons) {
    button.addEventListener("click", createParagraph)
  }