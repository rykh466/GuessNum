let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let lastGuess = null;

document.getElementById("guessInput")
  .addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      checkGuess();
    }
});

function checkGuess() {
  const input = document.getElementById("guessInput");
  const message = document.getElementById("message");
  const attemptsText = document.getElementById("attempts");

  let userGuess = Number(input.value);

  if (!userGuess) {
    message.textContent = "⚠️ Please enter a number!";
    return;
  }

  if (userGuess < 0 || userGuess > 100) {
    message.textContent = "⚠️ Enter a number between 0 and 100!";
    return;
  }

  if (userGuess === lastGuess) {
    return;
  }

  lastGuess = userGuess;
  attempts++;

  let difference = Math.abs(userGuess - randomNumber);

  if (userGuess === randomNumber) {
    message.textContent = "🎉 Correct! You guessed it!";
    input.disabled = true;
  } 
  else if (userGuess > randomNumber) {
    message.textContent = difference <= 20 ? "🔻 High" : "📉 Too high!";
  } 
  else {
    message.textContent = difference <= 20 ? "🔺 Low" : "📈 Too low!";
  }

  attemptsText.textContent = "Attempts: " + attempts;
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;

  const input = document.getElementById("guessInput");

  input.value = "";
  input.disabled = false; 

  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "Attempts: 0";
}