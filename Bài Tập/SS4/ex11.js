var initialize = {
    // stt : [1,2,3,4],
    name : ["Xiaomi portable charger 20000mah",
    "VSmart Active 1",
    "IPhone X",
    "Samsung Galaxy A9"
    ],
    brand : ["Xiaomi", "VSmart", "Apple", "SamSung"],
    price : [428, 5487, 21490, 8490],
    color : ["White", "Black", "Gray", "Blue"],
    category : ["Charger", "Phone", "Phone", "Phone"],
    providers : ["Phukienzero Dientuccc","Tgdd Ddghn VhStore", "Tgdd", "Tgdd"]
}
var { name : Name, brand, price, color, category, providers} = initialize
// console.log(initialize.name[0])
// console.log(Name[0])
for(let i=0;i<Name.length;i++){
console.log(` #${i+1}. ${Name[i]} \nPrice: ${price[i]} \nProvider: ${providers[i]}`)
}