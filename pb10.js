function revers (str){
//    console.log(str)
   let word = str.split(' ')
//    console.log(word)
let rev = '';
for(let i = word.length -1; i >=0; i--){
    let element = word[i]
    // console.log(element)
    rev = rev+element
    console.log(rev)
    if( i>0){
    rev = rev+' '
    }

}
return rev
}




const words = "lightweight and durable backpack"


console.log(revers(words))