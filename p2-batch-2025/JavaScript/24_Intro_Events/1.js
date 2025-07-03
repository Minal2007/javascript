 // 1. Select all <button> elements
const buttons = document.querySelectorAll('button');

// 2. Loop through each button
for (let i = 0; i < buttons.length; i++) {
  // 3. Add a click event listener
     buttons[i].addEventListener('click', function () {
  // 4. Log the button's text content
     console.log(this.textContent);
  });
}
 