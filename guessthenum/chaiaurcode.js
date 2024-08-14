console.log("mike testing");

let randomnum = Math.round(Math.random() * 100 + 1)
// console.log(randomnum);


const enteredvalue = document.querySelector('.guessField')
const sumbit = document.querySelector("#subt")

const previousguess = document.querySelector('.guesses')
const remainingguess = document.querySelector('.lastResult')

const hint = document.querySelector('.lowOrHi')

const startover = document.querySelector('.resultParas')

let p = document.createElement("p")

let playgame = true


prevguess = []
numofguesses = 1


//FUNCTIONS
if (playgame) {
    sumbit.addEventListener("click", function (e) {
        e.preventDefault()
        const guess = parseInt(enteredvalue.value)
        console.log(guess);
        validateguess(guess)

    })
}


function validateguess(guess) {
    if (guess === "" || isNaN(guess) || guess < 0 || guess > 100) {
        alert("enter valid number")

    } else {
        prevguess.push();
        if (numofguesses === 10) {
            displayguess(guess)
            displaymessage(`GAME OVER.. RANDOM NUMBER WAS ${randomnum}`)
            endgame()
        }
        else {
            displayguess(guess)
            checkguess(guess)
            // displaymessage(message)
        }

    }



}

function checkguess(guess) {
    if (randomnum === guess) {
        displaymessage(`HEY YOU WON THE GAME.${guess} is the answer`)
        endgame()
    }
    else if (guess > randomnum) {
        displaymessage(`yor guess is too high`)
    } else if (guess < randomnum) {

        displaymessage(`yor guess is too  low`)
    }

}
function displayguess(guess) {
    enteredvalue.value = ``;
    previousguess.innerHTML += `${guess}    `
    numofguesses++;
    remainingguess.innerHTML = `${11 - numofguesses}`
}


function displaymessage(message) {
    hint.innerHTML = `<h1>${message}<\h1>`
}


function newgame() {
    let buton = document.getElementById("newgame")
    buton.addEventListener("click", (e) => {
        randomnum = Math.round(Math.random() * 100 + 1)
        hint.innerHTML = ""
        prevguess = []
        enteredvalue.removeAttribute('disabled')
        numofguesses = 1
        remainingguess.innerHTML = `${11 - numofguesses}`
        previousguess.innerHTML = ""

        playgame = true
    })



}

function endgame() {
    enteredvalue.value = ""
    enteredvalue.setAttribute("disabled", "")
    p.innerHTML = `<h2 id="newgame"  class ="button">START NEW GAME<h2>`
    startover.appendChild(p)
    playgame = false
    newgame()
}