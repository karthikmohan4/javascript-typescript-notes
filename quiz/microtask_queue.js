//microtask queue basically holds the task to be immediately executed after current operation
//and before any other task in macrotask queue

console.log('script starts');

setTimeout(()=>{
    console.log('setTimeout');
},0);

Promise.resolve().then(()=>{
    console.log('Promise 1');
}).then(()=>{
    console.log('Promise 2'); 
});

console.log('script end');