//debouncing ensures the function is called after a specified delay has passed since last time invoked
//Throttling ensures the function is called at most once in specified time interval

//debounce
function debounce(func,delay){
    let timeoutId;
    return function (...args){
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this,args), delay);
    };
}

const debounceHello = debounce(()=>console.log('Hey'),2000);
debounceHello();

//throttling
function throttle(func,limit){
    let inThrottle;
    return function (...args){
        if(!inThrottle){
            func.apply(this,args);
            inThrottle = true;
            setTimeout(()=>(inThrottle=false),limit);
        }
    }
}

const handleResize = throttle(()=>{
    console.log('Window resized at ', new Date().toLocaleTimeString());
},2000);

let intervalId = setInterval(()=>{
    handleResize();
},100);