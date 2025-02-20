const product =[
  
    {name: 'Leptop', category: 'Electronic'},
    {name: 'T-Shirt', category: 'Clothing'},
    {name: 'Headphone', category: 'Electronic'},
    {name: 'JEans', category: 'Clothing'},
];

let categorizedProduct={
    electronic: [],
    clothing: [],
}

for(let i = 0; i<product.length; i++){
    const singleProduct =product[i]
    // console.log(singleProduct);
    if(singleProduct.category==='Electronic'){
        // console.log(singleProduct)
        categorizedProduct.electronic.push(singleProduct.name)
    
    }
    else if(singleProduct.category==='Clothing'){
        categorizedProduct.clothing.push(singleProduct.name)
    }

}
console.log(categorizedProduct)
