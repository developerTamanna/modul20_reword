let dawatList =['moinarMa', 'tonirMa', 'tonirMa', 'tonirMa', 'tonirMa'];  
// console.log(dawatList)
let uniq = []
for(let i = 0; i<dawatList.length; i++){
  const element = dawatList[i];
  if(!uniq.includes(element)){
    uniq.push(element);
  }
}

console.log(uniq)