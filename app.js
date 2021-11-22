'use strict'
/* Constants */
const secret = Math.trunc(Math.random() * 100) + 1
console.log(secret)
const secretDiv = document.querySelector('#secret')
// console.log("🚀 ~ file: app.js ~ line 7 ~ secretDiv", secretDiv)
const displayDiv = document.querySelector('#display')
const scoreDiv = document.querySelector('.score')
const scoreSpan = document.querySelector('#score')
// console.log("🚀 ~ file: app.js ~ line 9 ~ scoreSpan", scoreSpan)


/* Global Variables */
let score = 0;
// console.log("🚀 ~ file: app.js ~ line 8 ~ score", score)
let highScore;
let guess;


/* Cached Element References */
const submit = document.querySelector('#submit')
// console.log("🚀 ~ file: app.js ~ line 13 ~ submit", submit)
const start = document.querySelector('#start')
const reset = document.querySelector('#reset')
const btns = document.querySelectorAll('.btns')


/* Functions */
submit.addEventListener('click', function(){
  guess = Number(document.querySelector('.guess').value)
  console.log("🚀 ~ file: app.js ~ line 21 ~ submit.addEventListener ~ guess", guess)
  compareGuess()
})

const compareGuess = function(){
  if (guess < secret) {
    displayDiv.textContent = `${guess} is too low`
  } else if(guess > secret) {
    displayDiv.textContent = `${guess} is too high`
  } else {
    displayScore()
  }
}
const displayScore = function (){
  displayDiv.textContent = `${guess} is the secret number!`
  secretDiv.textContent = `${secret}`
  score++
  console.log(score)
  scoreSpan.textContent = score
}
