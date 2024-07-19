// Add event listeners to buttons
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      console.log("Button clicked!");
    });
  });
}); 
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', event => {
    const collapse = event.target.nextElementSibling;
    collapse.classList.toggle('show');
  });
});