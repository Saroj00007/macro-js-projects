console.log("test");



let clock = document.querySelector('.time')
setInterval(()=>{
    let time = ((new Date()).toLocaleTimeString())
    clock.innerHTML=  time
}, 1000)

