//shallow copy duplicates the top -level properties of an object, but nested are still referenced
//deep copy duplicates all level of an object 

//shallow copy
let obj1 = {a:1,b:{c:2}};
let shallowCopy  = Object.assign({},obj1);
shallowCopy.b.c =3;
console.log(shallowCopy.b.c);
console.log(obj1.b.c);

//deep copy example
let obj2 = {a:1,b:{c:2}};
let deepCopy = JSON.parse(JSON.stringify(obj2));
deepCopy.b.c =4;
console.log(deepCopy.b.c);
console.log(obj2.b.c);