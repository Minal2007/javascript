const button = document.getElementById("countBtn");
const counterDisplay = document.getElementById("counter");
let count = 0;

// Listener 1: Increase counter
button.addEventListener("click", function () {
  count++;
  counterDisplay.textContent = count;
});

// Listener 2: Log event details
button.addEventListener("click", function (event) {
  console.log("Event Type:", event.type);
  console.log("Time Stamp:", event.timeStamp);
  console.log("Tag Name:", this.tagName); // 'this' is the button element
});
