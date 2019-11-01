
let keyword = {
    hl : "hello",
    gb : "goodbye",
    hay : "how are you?",
    way : "where are you from?",
}

let gt =Object.keys(keyword)
gt.forEach((v,i) => {
    console.log(`${i+1}. ${v}`)
})

let loop = true

while (loop == true){
    // nhapdung= false
    let userInputKey = prompt("Nhập 1 từ khóa mà bạn muốn")
  
    // for(let i=0;i < gt.length;i++){
    //     if (userInputKey== gt[i]){ 
    //         nhapdung = true
    //     }
    // }
    // if (nhapdung==true){
    //     console.log(keyword[userInputKey])
    // }
    if(userInputKey in keyword){
        console.log(keyword[userInputKey])
    }
    else{
        userAdd = prompt("Bạn có muốn thêm từ khóa vừa rồi k ? Y/N")
        if(userAdd === "Y"){
            userAddValue = prompt("Nội dung từ khóa trên là gì ?")
            keyword[userInputKey]= userAddValue
            let gt2 =Object.keys(keyword)
            gt2.forEach((v,i) => {
                console.log(`${i+1}. ${v}`)
            })
    
        }
        else if (userAdd === "N"){
            alert("Cảm ơn bạn!")
        }
        else 
        alert("Bạn nhập sai r")
    }
    let choise = prompt("Bạn có muốn nhập tiếp k? Y/N")
    if (choise == "N"){
        loop = false
    }
}