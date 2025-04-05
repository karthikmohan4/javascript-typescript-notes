const array = ['a','b','c'];
console.log('For each');
array.forEach((e,i)=>{
    console.log(e,i);
})

console.log('Map');
array.map((e,i)=>{
    console.log(e,i);
})

console.log('for...of with entries');
for(const [index,element] of array.entries()){
    console.log(index,element);
}

console.log('for loop');
for(let i =0;i<array.length;i++){
    console.log(i,array);
}