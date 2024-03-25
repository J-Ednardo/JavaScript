let num = [5, 8, 2, 9, 3]
num[3] = 6
num.push(7) //mesma coisa que append
num.indexOf(7) //vai retornar o index onde esta o valor 7
let c = num.length

/*for(i=0; i<c;i++){
    console.log(num[i])
}*/

for(let pos in num){
    console.log(num[pos])
}