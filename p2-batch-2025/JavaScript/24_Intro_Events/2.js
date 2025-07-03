// Select all <button> elements
const buttons = document.querySelectorAll('button');

// Loop through the buttons
for (let i = 0; i < buttons.length; i++) {
  // Add click event listener to each button
  buttons[i].addEventListener('click', function () {
    // Log the button's index (starting from 1) and text
    console.log(`You clicked button ${i + 1}: ${this.textContent}`);
  });
}
