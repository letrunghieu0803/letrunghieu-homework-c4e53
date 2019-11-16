const firstTime =document.getElementById("first-number")
const start = document.getElementById("btn1")
const stop = document.getElementById("btn2")
const continous = document.getElementById("btn3")
const span = document.getElementById("ui")
console.dir(firstTime)
var myVar
start.addEventListener('click', ()=>{
    console.log(firstTime.value)
    span.innerText = firstTime.value
    console.log(span.innerText)
    myVar = setInterval(()=>{
        span.innerText =   span.innerText -1
        if(span.innerText<0){
            clearInterval(myVar)
            span.innerText= "Time is up"
        }
    },1000)
})
stop.addEventListener('click',()=>{
    cs = span.innerText
    span.innerText = `Đang dừng ở ${cs}, muốn tiếp tục nhấn Continous`
    clearInterval(myVar)
})
continous.addEventListener('click', ()=>{
    console.log(firstTime.value)
    span.innerText = cs
    console.log(span.innerText)
    myVar = setInterval(()=>{
        span.innerText =   span.innerText -1
        if(span.innerText<0){
            clearInterval(myVar)
            span.innerText= "Time is up"
        }
    },1000)
})
