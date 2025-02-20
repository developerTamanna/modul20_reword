function sumSet(price){
// console.log(price)
let chars = price.split('')
let sum =0
for(let i = 0; i<chars.length; i++){
    let element =chars[i]
    // console.log(element)
    if(!isNaN(element) && element!==' '){
        sum = sum+ Number(element)
    }
}
return sum

// console.log(chars)
}



const price = "$783"

console.log(sumSet(price))