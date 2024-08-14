console.log("i am in");

let boxes = document.querySelectorAll(".box")
let reset = document.querySelector(".reset")
let message = document.querySelector(".message")
let result = document.querySelector("p")
let news = document.querySelector(".newgame")

let turnO = true // turn of player X and player Y

let winningpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
function reload() {
    turnO = true
    enablebutton()
    message.classList.add("hide")
}
function disablebutton() {
    for (let box of boxes) {
        box.disabled = true
    }
}
function enablebutton() {
    for (let box of boxes) {
        box.innerHTML = ``
        box.disabled = false
    }
}
boxes.forEach(function (box) {
    box.addEventListener("click", () => {

        if (turnO) {
            box.innerHTML = `X` // turn of player x 
            turnO = false
        } else {
            box.innerHTML = `O` // turn of player Y
            turnO = true
        }
        box.disabled = true
        checkwinner()
    })

})
// checkwinner()
function checkwinner() {
    for (let pattern of winningpattern) {

        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1);
                disablebutton()
                displaymessage(pos1)
            } 
        }
    }
}
function displaymessage(winner) {
    result.innerHTML = `CONGRATULATION THE WINNER IS ${winner}`
    message.classList.remove("hide")
}
reset.addEventListener("click", reload)
news.addEventListener("click", reload)

function draw(){
    result.innerHTML = `it is draw`
    message.classList.remove("hide")

}


