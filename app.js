'use strict'

//* Constants */
const secret = Math.trunc(Math.random() * 100) + 1
// console.log("🚀 ~ file: app.js ~ line 4 ~ secret", secret)
const guessDiv = document.querySelector('.guess')//grab .value to get number-will be a string so have to convert
// console.log("🚀 ~ file: app.js ~ line 7 ~ guessDiv:", guessDiv)
const secretDiv = document.querySelector('#secret')
// console.log("🚀 ~ file: app.js ~ line 9 ~ secretDiv:", secretDiv)
const displayDiv = document.querySelector('#display')
// console.log("🚀 ~ file: app.js ~ line 11 ~ displayDiv", displayDiv)
const scoreDiv = document.querySelector('.score')
const highscoreDiv = document.querySelector('.high-score')

//* Local Variables that will change throughout game */
let displayText = displayDiv.textContent
// console.log("🚀 ~ file: app.js ~ line 20 ~ displayText", displayText)
let secretDivText = secretDiv.textContent
// console.log("🚀 ~ file: app.js ~ line 22 ~ secretDivText", secretDivText)
let score = Number(scoreDiv.textContent)
// console.log("🚀 ~ file: app.js ~ line 17 ~ score", score)
let highScore = Number(highscoreDiv.textContent)
// console.log("🚀 ~ file: app.js ~ line 19 ~ highScore", highScore)


//* Cached Element References */
const btns = document.querySelectorAll('.btns')//Nodelist reference for game reset
const submit = document.querySelector('#submit')
const start = document.querySelector('#start')//hide and/or disable once clicked, show at beginning of the game
const reset = document.querySelector('#reset')//show at end of game, disable and hide once clicked

//* Functions */
