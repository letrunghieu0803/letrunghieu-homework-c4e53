var initialize={   
    Name : ["HTML",
        "CSS",
        "Basic of JavaScript",
        "Node Package Manager (npm)",
        "Git"
    ],
    Complete : ["False","True","False","False","False"], 
}
var { Name, Complete: complete} = initialize
console.log("Hi there, this is your learning tasks to front-end developer carrer:")

for(let i=0; i<Name.length;i++){
    let x = " "
    if( complete[i] == "True"){
        x = "x"
    }
    console.log(`${i+1}. [${x}] ${Name[i]} \n`)
}