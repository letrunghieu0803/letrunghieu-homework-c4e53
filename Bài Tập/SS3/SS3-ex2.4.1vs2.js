mySheep = [5, 7, 300, 90, 24, 50, 75]
console.log(`hello, my name is Hieu and there are my sheep sizes \n`, mySheep)
maxSize = 0
// console.log(mySheep[0])
// console.log(mySheep.length)
for(let a=0;a <mySheep.length;a++){
    if(maxSize <= Number(mySheep[a])){
        maxSize=mySheep[a]
    }
}
cs = mySheep.indexOf(maxSize)
mySheep.splice(cs,1)
console.log(mySheep)
console.log(`Now my biggest sheep has size ${maxSize} let's shear it`)