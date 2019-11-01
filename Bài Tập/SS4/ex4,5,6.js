var dictionary= {
    debug : "The process of figuring out why your program has a certain error and how to fix it",
    done :" When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
    defect: "The formal word for 'error'",
    pm :"The short version of Project Manager, the person in charge of the final result of a project",
    uiUx :"UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
}

confirm("Hi there, this is dev dictionary!")
loop = true
while(loop == true){
    let userInput = prompt("Enter a keyword:").toLowerCase()
    if(userInput in dictionary){
        alert(`\n${userInput} \n${dictionary[userInput]}` )
    }
    else{
        confirm(`We could not find your word: ${userInput} Do you want to explane this word?`)
        let userExplane = prompt(`Leave your explanation for ${userInput}:`)
        dictionary[userInput]=userExplane
        alert("DONE")
    }
    let choise = prompt("Bạn còn muốn tra tiếp k? Y/N").toLowerCase()
    if(choise === "n"){
        loop = false
    }
}