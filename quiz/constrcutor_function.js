function Person(name,age){
    this.name =name;
    this.age = age;
}

console.log('Adding methods to prototype');
Person.prototype.greet = function(){
    console.log(`hey i'm ${this.name}, age ${this.age}`);
}

const bio = new Person('Karthik',26);
bio.greet();
