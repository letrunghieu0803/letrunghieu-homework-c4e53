var initialize={   
    Name : ["Xiaomi portable charger 20000mah",
        "VSmart Active 1",
        "IPhone X",
        "Samsung Galaxy A9"
    ],
    Brand : ["Xiaomi", "VSmart", "Apple", "SamSung"],
    Price : [428, 5487, 21490, 8490],
    Color : ["White", "Black", "Gray", "Blue"],
    Category : ["Charger", "Phone", "Phone", "Phone"],
}
var { Name ,Brand: brand, Price: price, Color: color, Category: category, Providers: providers} = initialize
let key = Object.keys(initialize)
let value = Object.values(initialize)
for(let i=0;i<price.length;i++){
    console.log(`#${i+1}. Name: ${Name[i]} \n    Price: ${price[i]}`)
}
let userInput = Number(prompt("Enter product position:"))
for(let a=0;a<key.length;a++){
    console.log(`${key[a]}: ${value[a][userInput-1]}`)
}
