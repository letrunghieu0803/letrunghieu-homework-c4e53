// //vòng lặp for
 for(giá trị ban đầu; giá trị dừng; giá trị tăng tiến)
{Lệnh}



//vong lặp while
 let i = 4 //lặp gt cho biến

 white(điều kiện)
 {
    Lệnh
    giá trị tăng tiến cho biến }


//câu lệnh điều kiện

// Test user pass!
const username = "c4e53"
const password = "codethechange"
let user = prompt("nhập username")
let pass = prompt("nhập mật khẩu")
loop = true
let newuser
let newpass
while(loop==true){
    if(user === username){
        i= true
    }
    else{
        newuser =prompt("nhập lại username")
        user = newuser
    }
    if(pass === password){
        j=true
    }
    else{
        newpass = prompt("nhập lại password")
        pass = newpass
    }
    if(i==true && j==true){
       loop = false
    }
}



// BMI
let height = Number(prompt("Nhập chiều cao của bạn, đơn vị cm:"))
let weight = Number(prompt("Nhập cân nặng của bạn, đơn vị kg:"))
let h = height/100
let bmi = weight/(h*h)
console.log(`Chi số BMI của bạn là: ${bmi.toPrecision(3)}`)
if (bmi < 18.5){
    console.log("Bạn hơi gầy ")
}
else if(bmi <25){
    console.log("Bạn cơ thể bình thường")
}
else if(bmi <30){
    console.log("Bạn hơi mập")
}
else if(bmi<35){
    console.log("Béo phì cấp độ 1")
}
else if(bmi<40){
    console.log("Béo phì cấp độ 2")
}
else {
    console.log("Béo phì cấp độ 3")
}