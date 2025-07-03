// Select all buttons
const buttons = document.querySelectorAll("button");

// Loop and attach event listeners
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const index = i + 1; // Index starting from 1
    const text = this.textContent;
    console.log(`You clicked button ${index}: ${text}`);
  });
}
