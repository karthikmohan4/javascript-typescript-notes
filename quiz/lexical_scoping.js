//lexical scope determines how the variable names are resolved in nested functions. The scope of variable is defined by its position
//in the source code, and nested functions have access to variables declared in outer scope.

function outerFunction(){
    let outerVariable = "I am  outside";
    function innerFunction(){
        console.log(outerVariable);
    }
    innerFunction();
}

outerFunction();

//closure it something a function can retain its access to a lexical scope even the func is executed outside that scope
function outFunction(){
    let outerVariable = 'I am outside';
    function innerFunction(){
        console.log(outerVariable);
    }
    return innerFunction;
}
const myInnerFunction = outFunction();
myInnerFunction();