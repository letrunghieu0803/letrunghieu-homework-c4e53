const inventory = [
    {
        name: "HP Envy 13aq",
        price: 21000,
        brand: "HP",
        quantity: 5,
    },
    {
        name: "Dell XPS 9370",
        price: 30000,
        brand: "Dell",
        quantity: 1,
    },
    {
        name: "Dell Inspiron 3567",
        price: 9300,
        brand: "Dell",
        quantity: 12,
    },
    {
        name : "Dell Latitude E5450",
        price: 8600,
        brand: "Dell",
        quantity: 2,
    },
    {
        name: "Asus Zenbook",
        brand: "Asus",
        price: 20000,
        quantity: 4,
    },
    {
        name: "HP Pavilion",
        brand: "HP",
        price: 14000,
        quantity: 7,
    },
]
let inventoryByBrand = {}
var hpArray=[],dellArray=[],asusArray=[]
for(let i=0;i<inventory.length;i++){
    if(inventory[i].brand.toLowerCase()=="dell"){
        dellArray.push(inventory[i])
    }
    else if(inventory[i].brand.toLowerCase()=="hp"){
        hpArray.push(inventory[i])
    }
    else if(inventory[i].brand.toLowerCase()=="asus"){
        asusArray.push(inventory[i])
    }

}
inventoryByBrand.hp= hpArray
inventoryByBrand.dell= dellArray
inventoryByBrand.asus= asusArray
// console.log(inventoryByBrand)
let sum = 0
let userInput= prompt(` Which brand`).toLowerCase()
if(userInput=="hp"){
    const funHp = (i) => {                               
        a = hpArray[i-1].name
        return a         
        }
    for(let b=0;b<hpArray.length;b++){
        sum= sum+hpArray[b].price*asusArray[b].quantity
    }
    if(hpArray>1){
    alert(` There are ${hpArray.length} of '${userInput.toUpperCase()}' in inventory: \n1. ${funhp(1)}\n2. ${funhp(2)}\nWith total value:${sum}K`)
    }
    else
    alert(` There is ${hpArray.length} of '${userInput.toUpperCase()}' in inventory: \n1. ${funhp(1)}\nWith total value:${sum}K`)

}
else if(userInput=="dell"){
    const funDell = (i) => {                               
        a = dellArray[i-1].name
        return a         
        }
    for(let b=0;b<dellArray.length;b++){
        sum= sum+dellArray[b].price*dellArray[b].quantity
    }
    if(dellArray>1){
        alert(` There are ${dellArray.length} of '${userInput.toUpperCase()}' in inventory: \n1. ${funDell(1)}\n2. ${funDell(2)}\n3. ${funDell(3)}\nWith total value:${sum}K`)
}

    else
        alert(` There is ${dellArray.length} of '${userInput.toUpperCase()}' in inventory: \n1. ${funDell(1)}\nWith total value:${sum}K`)
}
else if(userInput=="asus"){
    const funAsus = (i) => {                               
        a = asusArray[i-1].name
        return a         
        }
    for(let b=0;b<asusArray.length;b++){
        sum= sum+asusArray[b].price*asusArray[b].quantity
    }
    if(asusArray>1){
        alert(` There are ${asusArray.length} of '${userInput.toUpperCase()}' in inventory: \n1. ${funAsus(1)}\nWith total value:${sum}K`)        
}
    else
        alert(` There is ${asusArray.length} of '${userInput.toUpperCase()}' in inventory: \n1. ${funAsus(1)}\nWith total value:${sum}K`)  
}

