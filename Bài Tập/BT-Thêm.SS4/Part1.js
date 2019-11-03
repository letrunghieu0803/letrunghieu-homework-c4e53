 // 1.1-3
var rd = Math.random()
    console.log(rd)
var Arr = [2,5,6,9,10]
var rd2 =Arr[Math.floor(Math.random() * Arr.length)]
   // Math.floor((Math.random() * Số Phần tử) + Số min)
console.log(rd2)

// Còn lại của part1
var list = {
    "A Đức ngồi đâu?": [
        {"Ngồi bàn đầu " : false},
        {"Ngồi bàn hai" : false},
        {"Ngồi bàn ba": false},
        {"Ngồi đất": true},
    ],
    "A Đức có chiều cao ntn?" : [
        {"Cao nhất lớp ": false},
        {"Cao nhì lớp ": false},
        {"Thấp nhất lớp": true},
        {"Thấp nhì lớp": false},
    ],
    "A Đức nặng nhẹ ra sao?": [
        {"Béo nhất lớp ": true},
        {"Gầy nhất lớp ": false},
        {"Nặng nhất lớp ": false},
        {"Nhẹ nhất lớp ": false},
    ]
}

let sorceT=0
let sorceF=0
console.log(list.hasOwnProperty())
let loop = true
while(loop == true){
    let key = Object.keys(list)                         // key là mảng chứa 4 đáp án(string),                                                  
    var rd =key[Math.floor(Math.random() * key.length)] // rd là 1 đáp án (string) random đc lấy trong mảng key
    const fun = (i) => {                                // Dùng hàm để gán cho biến KeyIn sở hữu keyword của list[rd], ko in value!
            keyIn = Object.keys(list[rd][i])            // Việc này chị tiện cho việc in giá trị màn hình ~~
            return keyIn
            }
    let userInput = Number(prompt(`${rd}\n1.${fun(0)}\n2.${fun(1)} \n3.${fun(2)} \n4.${fun(3)}`))
    console.log(userInput)
    let funString =fun(userInput-1).toString()                    //  biến fun() đang kiểu Object!!Về sau ko gọi được nên phải đổi lại! 
    console.log(hay)
    if(list[rd][userInput-1][funString] == true ){      // Gọi tới value của key đáp án! Dài chưa muốn đặt biến lại do sợ sau k hiểu =))
        alert(`Bạn đã trả lời đúng!`)
        sorceT=sorceT+1
    }
    else{
        alert("Bạn đã trả lời sai")
        sorceF=sorceF+1
    }
    delete list[rd]
    if(Object.keys(list).length==0){            //Xét tạm giá trị độ dài mới của mảng "key" của "list mới" có giá trị nào ko 
        loop = false
    }
}
alert(`Xin chúc mừng\n Bạn đã trả lời đúng!!! ${sorceT} và sai ${sorceF} \n Bạn nhận được ${sorceT*10} điểm!`)
