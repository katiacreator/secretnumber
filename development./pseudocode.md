**SET DEFAULT VALUES**
ADD MIN MAX TO INPUT ELEMENT
SET INITIAL SCORE TO ZERO
SET INITIAL HIGH SCORE TO ZERO
*LOG NEW HIGH SCORE AFTER EACH ROUND
SET DEFAULT START MESSAGE

**GRABBING GUESS INPUT**
submitNumber function grabs input value
convert input value to Number using Number()

**COMPARING GUESS TO SECRET NUMBER**
compare guess to secretNumber
IF TOO LOW 
IF TOO HIGH
IF MATCHES
**DISPLAYING MESSAGES**
display msg if invalid number is entered
display message to start guessing
display message if number if too high
display msg if guess is too low
display msg when guess matches secret

**SCORING**
REVEAL SECRET NUMBER IN DIV
increment score on correct guess
total score after each round to get high score

