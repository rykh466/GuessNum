# GuessNum
An interactive and responsive number guessing game built using HTML, CSS, and JavaScript.
The player tries to guess a randomly generated number between 1 and 100 with helpful feedback after each attempt.

# Features 
1. Random number generation (1–100)
2. User input field for guesses
3. Submit and Restart buttons
4. Attempt counter
5. Smart feedback system:
   * Too High / Too Low
   * High / Low (when close to the answer)
6. Prevents duplicate consecutive guesses from increasing attempts
7. Fully responsive design
8. Playful animated gradient background

# Game Logic 

* A random number is generated at the start of the game
* User enters a guess and clicks Submit
* Feedback is provided based on how close the guess is:
  - Within ±20 → “High” / “Low”
  - Outside range → “Too High” / “Too Low”
* Attempts are counted only for unique consecutive guesses
* Game ends when the correct number is guessed
* Input is disabled after winning
* Restart button resets the entire game

# Project Structure
number-guessing-game/
│
├── index.html
├── styles.css
├── script.js
└── README.md

# 💻 Technologies Used
- HTML5
- CSS3 
- JavaScript

# 🚀 Live Demo

🔗 https://findnumgame.netlify.app/

# How to Run

1. Clone the repository:
   git clone https://github.com/rykh466/GuessNum.git
2. Open the project folder
3. Run index.html in your browser

# Author

GitHub: https://github.com/rykh466
