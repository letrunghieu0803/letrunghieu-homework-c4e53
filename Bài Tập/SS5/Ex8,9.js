const get_even_list =(l) =>{
    for(let i = 0; i< l.length; i++){
        k = l[i] % 2
        if(k != 0){                
            l.splice(i,1)
            i=i-1
        }
    
    }
    return l
}
var a = [1,4,5,-1,10]
console.log(get_even_list(a))
var even_list = get_even_list([1, 2, 5, 9, -10, 6])
if(JSON.stringify(get_even_list(even_list)) == JSON.stringify([2, -10, 6])){
    console.log("Your function is correct")
}
else
    console.log("Ooops, bugs detected")


// Thay vì xóa phần tử của mảng đã cho, hãy thêm phần tử đó sang mảng khác ~
//  Nên thay lại cách viết code 
