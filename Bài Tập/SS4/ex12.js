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
    Providers : [["Phukienzero", "Dientuccc"],["Tgdd", "Ddghn", "VhStore"], ["Tgdd"], ["Tgdd"]]
}
   
    var { Name : name,Brand: brand, Price: price, Color: color, Category: category, Providers: providers} = initialize
    let userInput = prompt("Enter provider:")
    let key = Object.keys(initialize)
    let value = Object.values(initialize)
    console.log(key)
    let cso = key.indexOf("Name")
    console.log(cso)
    // console.log(providers.length)
    // console.log(providers)
    for(let i=0; i<providers.length;i++){
        
            let cs = providers[i].indexOf(userInput)
            console.log(cs)
            if(cs>=0){
                for(let b=0;b<key.length;b++){
                    console.log(`${key[b]}: ${value[b][i]}`)
                }
                
                  
            }
    }