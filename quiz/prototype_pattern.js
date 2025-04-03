//Prototype patterm is creational design pattern that allows you to create new objects by copying an existing object,known as prototype


const prototypeObject = {
    greet(){
        console.log('hey');
    }
}

const newObject = Object.create(prototypeObject);
newObject.greet();

//using constructor and prototype property

function Person(name){
    this.name = name;
}

Person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name}`);
}

const p1 = new Person('Alice');
const p2 = new Person('Bob');

p1.greet();
p2.greet();