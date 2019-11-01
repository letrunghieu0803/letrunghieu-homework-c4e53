// Mảng ARRAY
let menu = ["cơm", "phở","bún"]

console.log(menu)


CRUD : creat , read , update , delete


let anime = ["Naruto","Doremon","Dragon Balls","One Puch Man","Conan"]
for(let i=0;i<5;i++){
    console.log("%d.",(i+1),anime[i])
}
let cs = Number(prompt("Nhập vào anime số:"))
console.log("Anime bạn chọn là:",anime[cs-1])
// Create
let moi = prompt("Nhập vào bộ anime mới")
anime.push(moi)
console.log(anime)

// Update
let cs = Number(prompt("nhập vào anime số muốn thay đổi"))
let update = prompt("nhập tên mới cho anime")
anime[cs-1]= update
console.log(anime)
// Tìm index
cs = anime.indexOf(newt)
anime[cs] = update
console.log(anime)

// Delete
array.splice(a,b)       // bắt đầu từ phần tử a chạy tới b phân tử thì thôi
let newt = prompt("Nhập tên anime muốn xóa")
cs = anime.indexOf(newt)
anime.splice(cs,1)
console.log(anime)


///


array.forEach(element => {
    
});                          // element = thành phần thường là nội dung và index, sau ngoặc nhọn là phần lệnh in or thực hiện cái gì đó


menu.length //độ dài của menu
X.Y         //y của x

array.push()


// Bài tập về mảng bán truyện anime
let anime = ["Naruto","Doremon","Dragon Balls","One Puch Man","Conan"]
for(let i=0;i<5;i++){
    console.log("%d.",(i+1),anime[i])
}
let chose = prompt("Bạn chọn gì C, R, U hay D ?").toLowerCase()
if (chose==="C"){
    let moi = prompt("Nhập vào bộ anime mới")
    anime.push(moi)
    console.log(anime)
    //anime.ForEach((girl, index) =>{
    //    console.log(`${index+1}.${girl}`)
    // })
}

else if (chose === "R"){
    console.log(anime)
}
else if (chose === "U"){
    let inval = prompt("Bạn muốn nhập vào tên hay mã index của bộ phim muốn update, V or I?")
    console.log(typeof inval)
    if(inval === "V" ){
        let tenm = prompt("Nhập tên anime muốn thay")
        cs = anime.indexOf(tenm)
        let upt = prompt("Nhập tên anime mới")
        anime[cs]= upt
    }
    else if(inval === "I"){
        let updi = prompt("Nhập vào mã index bộ anime muốn update")
        a = Number(updi)
        console.log(a)
        if(a<0 || a>anime.length){
            console.log("Lỗi")
        }
        else{
        let upi = prompt("Nhập tên anime mới")
        anime[a]= upi
        }
    }

    else {
        console.log("V or I thôi mấy má!")
    }
    console.log(anime)
}
else if (chose === "D"){
    let inval2 = prompt("Nhập vào tên hay mã index của bộ phim muốn xóa,V or I?")
    if( inval2 === "V" ){
        let delev = prompt("Nhập tên anime muốn xóa")
        cs2 = anime.indexOf(delev)
        anime.splice(cs2,1)
    }
    else if(inval2 === "I"){
        let delei= prompt("Nhập số index của anime")
        b = Number(delei)
        console.log(b)
        if(b<0 || b>anime.length){
            console.log("Lỗi")
        }
        else{
            
        a2 = [Number(inval2)]
        anime.splice(a2,1)
    }
    console.log(anime)
    }
}
else{
    console.log("Nhập sai ký tự, giữ nguyên các bộ anime!")

}


//


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
