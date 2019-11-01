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



   //     name = ["Xiaomi portable charger 20000mah",
    //     "VSmart Active 1",
    //     "IPhone X",
    //     "Samsung Galaxy A9"
    //     ],
    //     brand = ["Xiaomi", "VSmart", "Apple", "SamSung"],
    //     price = [428, 5487, 21490, 8490],
    //     color = ["White", "Black", "Gray", "Blue"],
    //     category = ["Charger", "Phone", "Phone", "Phone"],
    //     providers = ["Phukienzero Dientuccc","Tgdd Ddghn VhStore", "Tgdd", "Tgdd"]
    // ]
    console.log(initialize[0][0])
    // var { name : Name, brand, price, color, category, providers} = initialize
    // let userInput = prompt("Enter provider:")
    // for(let i=0; i<providers.length;i++){
    //     if(userInput in )
    // }