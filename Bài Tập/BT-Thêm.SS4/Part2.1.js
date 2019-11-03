var list = ["to","be","that","of", "elon", "to", "this", "now", "back", "cool", "hey", "love", "of", "life", 
"that", "rain", "summer", "color", "now", "of", "hat", "late", "sorry", "my", "team"
]

let dem = 1
for(let i=0;i<list.length;i++){   
    let a= 0
    for(a=i+1;a<list.length+1;a++){      
        if(list[i]===list[a]){         
            dem= dem +1
            list.splice(a,1)
            a=a-1          
        }            
    }
    console.log(`${list[i]}: ${dem}`)    
    dem = 1
}