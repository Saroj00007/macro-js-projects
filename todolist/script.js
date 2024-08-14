
// sumbit.addEventListener("click", function (e) {
//     e.preventDefault()
//     // result.innerHTML=`done`
//     getvalue()
//     refresh()
//     deletee()
// })

// function refresh() {
//     enteredvalue.value = ""
// }

// function getvalue() {
//     let div = document.createElement("div")

//     document.querySelector("body").appendChild(div)
//     div.style.margin= "10px"

//     let task = enteredvalue.value
//     console.log(task);
//     div.innerHTML = `${task} <button   class= "del">cancle</button>`
//     let cancle = document.querySelector(".del")
// cancle.addEventListener("click", function(){
//     div.innerHTML=""
// })
// }


// function deletee(){

console.log("i am in");


let enteredvalue = document.querySelector("#enteredfield")
let result = document.querySelector(".result")
let sumbit = document.querySelector('.btn')

let items = []
let storeditems = "items"



function renderitems() {
    result.innerHTML = null;

    for (const [index, item] of Object.entries(items)) {

        let div = document.createElement("div")
        div.style.marginBottom = "10px"


        let p = document.createElement('h2')
        p.innerHTML = item
        p.style.display = "inline"
        p.style.marginRight = "15px"

        let remove = document.createElement("button")
        remove.innerHTML = `remove`

        remove.addEventListener("click", cancleitem)

        div.appendChild(p)
        div.appendChild(remove)
        result.appendChild(div)

    }

}
//  renderitems()

function additems() {
    let value = enteredvalue.value
    if(!value){
        alert("please entered the task")
        return
    } 
    items.push(value)
    renderitems()
     enteredvalue.value= ""
     saveitems()
}

function cancleitem(index) {
    items.splice(index, 1)
    console.log(items);
    renderitems()
    saveitems()
}

 

function saveitems(){
    let str= JSON.stringify(items)
    localStorage.setItem(storeditems , str)

}

function loaditems(){
let data = localStorage.getItem(storeditems)
 if(data){
    items = JSON.parse(data)
 }
renderitems()
}
sumbit.addEventListener("click", additems)

document.addEventListener("DOMContentLoaded" ,loaditems)



