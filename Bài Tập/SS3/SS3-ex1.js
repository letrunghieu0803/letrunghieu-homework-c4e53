ouritems =["T-Shirt","Sweater"]
let input= prompt("Welcome to our shop, what do you want (C, R, U, D)?").toLowerCase()
if (input =="r"){
   ouritems.forEach((value, index) => {
       console.log(`${index+1}.${value}`)
   });
}
else if (input =="c"){
    ouritems.push("Jeans")
    ouritems.forEach((value, index) => {
        console.log(`${index+1}.${value}`)
    });
}
else if(input=="u"){
    ouritems.push("Jeans")
    let cs = Number(prompt("update position"))
    let newitem = prompt("New item?")
    ouritems[cs-1]=newitem
    ouritems.forEach((value, index) => {
        console.log(`${index+1}.${value}`)
    });
}
else if(input=="d"){
    ouritems.push("Jeans")
    let csd = Number(prompt("delete position?"))
     
    ouritems.splice(csd-1)
    ouritems.forEach((value, index) => {
        console.log(`${index+1}.${value}`)
    });
}
else {
    console.log("Ký tự bạn nhập không có trong yêu cầu")
}
