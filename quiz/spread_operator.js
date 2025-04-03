//expand elements of an iterable  - copying arrays or objects,merging arrays, passign array as an arg to a function


//copying to an array
const arr1 = [1,2,3];
const arr2 = [...arr1];
console.log(arr2);

//merging arrays
const arr3 = [4,5,6];
const mergedArray = [...arr2,...arr3];
console.log(mergedArray);

//copying the object
const obj1= {a:1,b:2};
const obj2 = {...obj1};
console.log(obj2);

//merging objects
const obj3 = {c:3,d:4};
const mergedObject = {...obj1,...obj3};
console.log(mergedObject);

//passing array elements as function arguments
const sum = (x,y,z)=>x+y+z;
const numbers = [1,2,3];
console.log(sum(...numbers));