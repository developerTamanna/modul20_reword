let price = '$249';

let chars = price.split('')
// console.log(chars)
let sum =0;
for(let i = 0; i<chars.length; i++){
    let element = chars[i]
    // console.log(element)
    if(!isNaN(element) && element !==' '){
     sum = sum + Number(element);
    }
}
console.log(sum)