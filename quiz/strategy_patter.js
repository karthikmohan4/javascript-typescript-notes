// //strategy pattern is a behavioral design that allows you to define a family of algorithms,encapsulate each one as seperate class, 
// //& make them interchangeable

// class Context{
//     constructor(strategy){
//         this.strategy = strategy;
//     }

// executeStrategy(data){
//     return this.strategy.doAlgorithm(data);
// }

// }

// class ConcreteStrategyA {
//     doAlgorithm(data){
//         return 'Algo A was run' + data;
//     }
// }


// class ConcreteStrategyB {
//     doAlgorithm(data){
//         return 'Algo B was run' + data;
//     }
// }

// //usage 
// const context = new Context(new ConcreteStrategyA());
// context.executeStrategy('hello');

//example
//strategy interface
class Strategy{
doAlgorithm(data){
    throw new Error('This method should be overridden!');
}
}

//ConcreteStrategyA
class ConcreteStrategyA extends Strategy{
    doAlgorithm(data){
        return data.sort((a,b)=>a-b);  //ascending sort
    }
}

//ConcreteStrategyb
class ConcreteStrategyb extends Strategy{
    doAlgorithm(data){
        return data.sort((a,b)=>b-a);  //descending sort
    }
}

class Context {
    constructor(strategy){
        this.strategy = strategy;
    }

    setStrategy(strategy){
        this.strategy = strategy;
    }
    executeStrategy(data){
        return  this.strategy.doAlgorithm(data);
    }
}

//usage
const data = [3,1,4,5,6,33,23];
const context = new Context(new ConcreteStrategyA());
console.log(context.executeStrategy([...data]));

context.setStrategy(new ConcreteStrategyb());
console.log(context.executeStrategy(data));