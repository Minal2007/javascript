// Select all buttons
const buttons = document.querySelectorAll("button");

// Loop through each button and attach a click event listener
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    console.log(this.textContent);
  });
}
