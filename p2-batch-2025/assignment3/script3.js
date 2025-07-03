const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Arrow Function:");
    console.log(this); // 'this' does NOT refer to the button!
  });
});


// buttons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     console.log("Normal Function:");
//     console.log(this); // 'this' refers to the clicked button
//   });
// });
