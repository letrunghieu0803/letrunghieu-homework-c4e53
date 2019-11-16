const upSelect = document.getElementById("up")
const downSelect = document.getElementById("down")
const container = document.getElementById("container")
console.dir(container)
upSelect.addEventListener('click', () =>{
    container.children[1].innerHTML =Number(container.children[1].textContent)+1
   console.log(container.children[1].textContent)
   console.dir(container)
} )
downSelect.addEventListener('click', () =>{
    container.children[1].textContent =Number(container.children[1].textContent)-1
   console.log(container.children[1].textContent)
} )