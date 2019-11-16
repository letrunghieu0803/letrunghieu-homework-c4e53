
var ptsai = ["-+","++","x+","÷+","+-","--","+x","-x","xx","÷x","+÷","-÷","÷÷","x÷"]
const result = document.getElementById("result")
function one_click(value){
    result.innerText += value
    var a = result.innerText
    // if(a.indexOf("(")+1<a.indexOf(")")+1){ 
    //     a = a.replace(")","")
    // }
    console.log(a.indexOf("("))
    console.log(a.indexOf(")"))
// Chuyển 0 là số mặc định && nếu 0 ở đầu thì sẽ xóa nó đi
    // console.log(a.length)
    if(a.length<1){
        a="0"
    }
    else if(a.length>1){  
        if(a[0]==0){
            a=a.slice(1)
        }
    }
// logic khi nhấn nhiều phép tính
    for(let i = 0;i<ptsai.length;i++){
        while(a.indexOf(ptsai[i])>=0){
            console.log(ptsai[i].slice(1))
            a = a.replace(ptsai[i],ptsai[i].slice(1))
        }     
   
    }
    result.innerText = a
}
function equalButton(){
    var b = result.innerText
    while(b.indexOf("x")>=0){
        b = b.replace("x","*")
    }
    while(b.indexOf("÷")>=0){
        b = b.replace("÷","/")
    }
    result.innerText = b
    result.innerText = eval(result.innerText)
    return result.innerText
}
function delButton(){
    result.innerText = result.innerText.substring(0,result.innerText.length-1)
    if(result.innerText.length<1){
        result.innerText="0"
    }
}
function acButton(){
    result.innerText = "0"
}
