function uniqueValue(product){
    // console.log(product)
    uniqueItem =[]
    for(let value of product){
        // console.log(value)
        if(!uniqueItem.includes(value) )
            uniqueItem.push(value)
    }
    return uniqueItem;
}


let product = ['leptop', 'phone', 'leptop', 'tablet', 'phone'];

console.log(uniqueValue(product));