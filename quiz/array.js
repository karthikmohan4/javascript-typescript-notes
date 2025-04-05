let arr = [1,2,3];

//add 
arr.push(4);
arr.unshift(0); //add to the 0th index
arr.splice(2,0,1.5)
console.log(arr);

console.log('Remove');
//remove 
arr.pop()
arr.shift();
arr.splice(1,2);
console.log(arr);

console.log('Update');
arr[1] = 2.5;
console.log(arr);

console.log('set to array');
const set = new  Set([1,2,3]);
const myArray = Array.from(set);
console.log(myArray); 