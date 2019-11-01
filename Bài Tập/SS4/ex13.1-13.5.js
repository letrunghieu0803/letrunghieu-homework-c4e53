var initialize={   
    Name : ["HTML",
        "CSS",
        "Basic of JavaScript",
        "Node Package Manager (npm)",
        "Git"
    ],
    Complete : ["False","False","False","False","False"], 
}
var { Name, Complete: complete} = initialize
let key = Object.keys(initialize)
let value = Object.values(initialize)
console.log("Hi there, this is your learning tasks to front-end developer carrer:")
for(let i=0; i<Name.length;i++){
    console.log(`${i+1}. ${Name[i]} \n   ${complete[i]}`)
}
let userInputCommand= prompt("Enter your command (New, Delete, Update, Complete):").toLowerCase()
if( userInputCommand == "new"){
    let userInputNew = prompt("Enter new task:")
    Name.push(userInputNew)
    Name.push("False")
}
else if(userInputCommand =="update"){
    let userInputPositionUpdate = Number(prompt("Enter position:"))
    let userInputUpdate = prompt("Enter new title:")
    Name[userInputPositionUpdate-1]=userInputUpdate
}

else if(userInputCommand == "delete"){
    let userInputPositionDelete = Number(prompt("Enter position:"))
    Name.splice(userInputPositionDelete-1,1)
    complete.splice(userInputPositionDelete-1,1)
}
else if(userInputCommand == "complete"){
    let userInputPositionComplete = Number(prompt("Enter position:"))
    complete[userInputPositionComplete-1]="True"
}
for(let j=0; j<Name.length;j++){
    console.log(`${j+1}. ${Name[j]} \n   ${complete[j]}`)
}