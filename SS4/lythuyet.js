//Khai báo object
let person = {
    name : "Le Trung Hieu",
    age : 21,
    location : "Ha Noi",
    status : false,
    lover : "n"
}
console.log(person)


//READ
let nhap = prompt("Tên bạn muốn nhập")
console.log(person[nhap])
console.log(person["name"])

//Create
person.school = "NONE"
person["home"]="ban"

//Update
person.age = "HAVE"
console.log(person)


let userInputKey= prompt("key ma ban muon chon : name/age/location/status/lover ?")
let userInputValue = prompt("Ban muon thay doi thanh gi?")
person[userInputKey]=userInputValue
console.log(person)


//Delete

delete person.age
console.log(person)

// Cách hủy đối tượng

var {name, country, job} = {name: "Sarah", country: "Nigeria", job: "Developer"};
//
var person = {name: "Sarah", country: "Nigeria", job: "Developer"};
var {name, country, job} = person;
//
var person = {name: "Sarah", country: "Nigeria", job: "Developer"};
var name, country, job;
({name, country, job} = person);
//
console.log(name);//"Sarah"
console.log(country);//"Nigeria"
console.log(job);//Developer"

//Chú ý
var person = {name: "Sarah", country: "Nigeria", job: "Developer"};

var {name = "myName", friend = "Annie"} = person;

console.log(name);//"Sarah"  // Khi khai báo nó sẽ chọn cách định nghĩa của đối tượng đc gán trước
console.log(friend);//"Annie" // Nếu k có sẽ tự thêm


var person = {
    name: "Sarah",
    place: {
        country: "Nigeria", 
        city: "Lagos" }, 
    friends : ["Annie", "Becky"]
    };

var {name:foo,
     place: {
         country : bar,   // bar=Ni
         city : x}        // x = Lagos
      } = person;

console.log(foo);//"Sarah"
console.log(bar);//"Nigeria"

// Phần còn lại trong đói tượng ...others

var person = {name: "Sarah", country: "Nigeria", job: "Developer" friends: ["Annie", "Becky"]};

var {name, friends, ...others} = person;

console.log(name);//"Sarah"
console.log(friends);//["Annie", "Becky"]
console.log(others);// {country: "Nigeria", job: "Developer"} 



   

    var initialize = [{
        Name:"Xiaomi portable charger 20000mah",
        Brand : "Xiaomi",
        Price :428,
        Color :"White",
        Category :"Charger", 
        Providers:"Phukienzero Dientuccc",
    },
    {
        name:"VSmart Active 1",
        brand : "VSmart",
        price :5487,
        color :"Black",
        category :"Phone", 
        providers:"Tgdd Ddghn VhStore",
    },
    {
        name:"Xiaomi portable charger 20000mah",
        brand : "Apple",
        price :21490,
        color :"Gray",
        category :"Phone", 
        providers:"Tgdd",
    },
    {
        name:"Xiaomi portable charger 20000mah",
        brand : "Samsung",
        price :8490,
        color :"Blue",
        category :"Phone", 
        providers:"Tgdd",
    }
    ]



    
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