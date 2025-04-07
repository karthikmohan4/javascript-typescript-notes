function add(a,b){
    return a+b;
}

const curriedAdd = (a)=>(b)=>a+b;
const addTwo = curriedAdd(2);
console.log(addTwo(1));

//partial function
const addThree = add.bind(null,3);
console.log(addThree(1));

//we can create another custom partial function alternatively
function partial(fn,...fixedArgs){
    return function(...remaningArgs){
        return fn(...fixedArgs,...remaningArgs)
    };
}

addTwoCustom = partial(add,2);
console.log(addTwoCustom(3));