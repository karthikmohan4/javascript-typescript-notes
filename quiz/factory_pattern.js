//factory pattern is a creational design pattern that provides an interface for creating objects in a superclass
//but allows subclassses to alter type of objects that will be created, it encapsulates the object creation process,
//making the code more modular and easier to manage

class AnimalFactory {
  createAnimal(type) {
    if (type === "dog") {
      return new Dog();
    } else if (type === "cat") {
      return new Cat();
    } else {
      return new Animal();
    }
  }
}

class Dog{
    constructor(){
        this.sound = 'woof';
    }
}

class Cat{
    constructor(){
        this.sound = 'meow';
    }
}

class Animal{
    constructor(){
        this.sound = 'unknown';
    }
}
const factory = new AnimalFactory();
const dog = factory.createAnimal("dog");
const cat = factory.createAnimal("cat");
console.log(dog.sound);
console.log(cat.sound);
