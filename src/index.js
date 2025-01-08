// Get the button and output div elements
const button = document.getElementById('helloButton');
const output = document.getElementById('output');

// Add an event listener to the button
button.addEventListener('click', () => {
  // When clicked, set the output div's text content to "Hello"
  output.textContent = 'Hello';
});