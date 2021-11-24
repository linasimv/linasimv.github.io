let displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
function checkPrime() {
  let isPrime = true;
  let num = +document.getElementById("enter").value;
  if (num < 0) {
    displayMessage("Error");
  }
  if (num === 0 || num === 1) {
    displayMessage("Number is not prime");
  }
  if (!Number.isInteger(num)) {
    displayMessage("Error (isInteger())");
  } else {
    for (let i = 1; i < num; i++) {
      if (num % i === 0 && i !== 1 && i !== num) {
        isPrime = false;
        displayMessage("Number is not prime");
      } else if (isPrime) {
        displayMessage ('Number is prime')
      }
    }
  }
}