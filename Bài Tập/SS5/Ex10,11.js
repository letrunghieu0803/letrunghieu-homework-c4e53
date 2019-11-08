const is_inside = ([a,b],[x,y,w,h]) =>{
    var inside =false
    let dk1, dk2
    for(let i=x;i<=x+w;i++){
        if(i==a){
            dk1= true
        }
    }
    for(let j=y;j<=y+h;j++){
        if(j==b){
            dk2= true
        }
    }
    if(dk1== true && dk2== true){
        inside =true
    }
    return inside
}
console.log(is_inside([100,120],[140,60,100,200]))  // false
console.log(is_inside([200,120],[140,60,100,200]))  // true
console.log(is_inside([150,120],[140,60,100,200]))  // trưe
console.log(is_inside([200,220],[140,60,100,200]))  // true
console.log(is_inside([200,320],[140,60,100,200]))  // false