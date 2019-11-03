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
var { Name ,Brand: brand, Price: price, Color: color, Category: category} = initialize
let userInput= prompt("Enter category")
userInput = userInput.charAt(0).toUpperCase()+ userInput.slice(1)
console.log(userInput)
for(let i=0; i<category.length;i++){
       if(userInput==category[i]){
        console.log(`Name: ${Name[i]} \nPrice: ${price[i]}`)    
    }
}