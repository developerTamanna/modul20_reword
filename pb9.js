function reverses (str){
// console.log(str)
let words = str.split(' ')
// console.log(words)
let rev ='';
for(let i = words.length-1; i>=0; i--){
    let element = words[i]
//   console.log(element);
     rev = rev+element;
    //  console.log(rev)
    if(i>0){
        rev =rev+' '
    }
}
return rev;
}

let result = "lightweight and durable backpack"
console.log(reverses(result));

