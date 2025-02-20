function matchCategoryProduct(product){
// console.log(product);
let categorizedProduct = {
    electronic :[],
     clothing: [],
}
 for(let i = 0; i<product.length; i++){
    const singleProduct =product[i]
    if(singleProduct.category==='Electronic'){
      categorizedProduct.electronic.push(singleProduct.name);
    //   console.log(singleProduct)
    }
    // console.log(singleProduct)
 else if(singleProduct .category=== 'Clothing'){
    categorizedProduct.clothing.push(singleProduct.name);
 }
 }
 return categorizedProduct
}



const product =[
  
    {name: 'Leptop', category: 'Electronic'},
    {name: 'T-Shirt', category: 'Clothing'},
    {name: 'Headphone', category: 'Electronic'},
    {name: 'JEans', category: 'Clothing'},
];
console.log(matchCategoryProduct(product))