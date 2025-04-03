function add(a,b){
    return a+b;
}

console.log(add.call(null,1,2));
console.log(add.apply(null,[1,2]));
 

//use case - context management 

const person = {
name:'John',
greet(){
    console.log(`hello,${this.name}`)
}
};

const anotherPerson = {name:'Alice'};
person.greet.call(anotherPerson);
person.greet.apply(anotherPerson);

//alt. syntax to call methods on objects
const arr1 = [1,2,3,4];
const arr2 = [5,6,7];
Array.prototype.push.apply(arr1,arr2);
console.log(arr1);