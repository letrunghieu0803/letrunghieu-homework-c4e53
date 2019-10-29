mySheep = [5, 7, 300, 90, 24, 50, 75]
console.log(`hello, my name is Hieu and there are my sheep sizes \n`, mySheep)

for(let i=1;i<5;i++){
    maxSize = 0
    for(let a=0;a <mySheep.length;a++){
        
        mySheep[a]=mySheep[a]+50
        if(maxSize <= Number(mySheep[a])){
            maxSize=mySheep[a]
        }
}
    console.log("After %d month, now here is my flock: \n",i,mySheep)
    cs = mySheep.indexOf(maxSize)
    mySheep[cs]= 8
    console.log(`Now my biggest sheep has size ${maxSize} let's shear it`)
    console.log(`After shearing: \n`,mySheep)
}
let total =0
for (let b=0;b<mySheep.length;b++){
    total= total + mySheep[b]
}
console.log(`My flock has size in total: ${total}`)
money = total*2
console.log(`I would get ${total} * 2$ = ${money}$`)