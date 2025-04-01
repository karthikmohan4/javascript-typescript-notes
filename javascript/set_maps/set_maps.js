//set is a collection of unique values
let mySet = new Set([1,2,3,3]);
mySet.add(4);
console.log(mySet);
//delete
mySet.delete(2);
console.log(mySet);
//check values
mySet.has(4);
console.log(mySet);
//size 
console.log(mySet.size);
//remove the values in the set 
mySet.clear();
console.log(mySet);

//map 
let myMap = new Map();
myMap.set('1',"hey");
myMap.set('2',"man");
console.log(myMap.get('1'));
console.log(myMap.has('2'));
//clear 
myMap.clear();
console.log(myMap);