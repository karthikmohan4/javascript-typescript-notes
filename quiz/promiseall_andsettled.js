//Promise.all waits for all promises to resolve and fails fast if any promise rejects
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,100,'foo');
})

Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values);
}).catch((error)=>{
    console.error(error);
})

//Promise.allSettled waits for all promises to settle (either resolve or reject) it returns the array of objects
//describing the outcome of each object

const p1 = Promise.resolve(3);
const p2 = Promise.reject('error');
const p3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,100,'foo');
})

Promise.allSettled([p1,p2,p3]).then((values)=>{
    values.forEach((result)=>console.log(result))
    
}).catch((error)=>{
    console.error(error);
})


