const buttonRemove = document.getElementById("remove")
const selectList = document.getElementById("select-list")
console.dir(selectList)
buttonRemove.addEventListener('click', () => {
    console.log(selectList.selectedOptions[0])
    selectList.removeChild(selectList.selectedOptions[0])
})
