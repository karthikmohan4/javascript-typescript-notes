//observer pattern is a behavioral design pattern that defines a one-to-manny dependency bw objects

class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs != observer);
  }
  notifyObservers() {
    this.observers.forEach((observer) => observer.update());
  }
}

class Observer{
    update(){
        console.log('Observer updated');
    }
}

//usage
const subject = new Subject();
const obs1 = new Observer();
const obs2 = new Observer();

subject.addObserver(obs1);
subject.addObserver(obs2);


subject.notifyObservers();