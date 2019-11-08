const remove_dollar_sign = (s) => {
    var s
    while (s.indexOf("$") >=0){
    s = s.replace("$","")
    }
    return s
}
// var a = "ta có nhieu $ lam luon $"
// console.log(a)
// console.log(remove_dollar_sign(a))
string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
if (string_with_no_dollars == "80% percent of life is to show up"){
    console.log("Your function is correct")}
else{
    console.log("Oops, there's a bug")}
