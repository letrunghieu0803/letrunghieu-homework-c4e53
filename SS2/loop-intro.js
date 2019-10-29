// // in từ 1 > 100
// for (let i=1; i<100;i++){
//     console.log(i)
// }

// // // in từ 0 > 100 số chẵn
// // j=0
// // while(j=100){
// //     console.log(j)
// //     j=j+2
// // }


// // //in từ 1> 100 số lẻ
// // for(a=1;a=100;a=a+2)
// //     {
// //         console.log(a)
// //     }

//Nhập số N, tính tổng từ 0 > N
let N= Number(prompt("Nhập vào số N"))
let S=0
for(let i=0;i<=N;i++){
    S=S+i
}
console.log("Tổng dãy số tự nhiên từ 0 đến %d là : %d",N,S)