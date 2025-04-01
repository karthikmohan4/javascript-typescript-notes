//undefined
let foo;
console.log(foo); //undefined
console.log(foo === undefined); //true
console.log(typeof foo === 'undefined'); //true
console.log(foo == null);

function bar(){}
let b = bar();
console.log(b);

//null - we assign the value to variable explicitly 

const f =null;
console.log(f===null); //true
console.log(typeof f === 'object'); //true as null is an object