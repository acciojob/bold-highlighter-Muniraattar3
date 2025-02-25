function highlight() {
  // Select all <strong> elements on the page.
  const strongElements = document.querySelectorAll('strong');
  // Loop through each element and change its text color to green.
  strongElements.forEach(element => {
    element.style.color = "rgb(0, 128, 0)";
  });
}

function return_normal() {
  // Select all <strong> elements on the page.
  const strongElements = document.querySelectorAll('strong');
  // Loop through each element and revert its text color to black.
  strongElements.forEach(element => {
    element.style.color = "rgb(0, 0, 0)";
  });
}
