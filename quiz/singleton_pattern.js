//singleton pattern ensures that a class has only one instance and provides a global point of access to that instance
//implementation using es6 classes
// class Singleton{
//     constructor(){
//         if(!Singleton.instance){
//             Singleton.instance = this;
//         }
//         console.log('1');
//         return Singleton.instance;
//     }
// }

// const ins1 = new Singleton();
// const ins2 = new Singleton();
// console.log(ins1 === ins2);

//implementation using closures
const Singleton = (function (){
    let instance;
    function createInstance(){
        const object = new  Object('I am the instance');
        return object;
    }
    return {
        getInstance: function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const i1 = Singleton.getInstance();
const i2 = Singleton.getInstance();
console.log(i1===i2);