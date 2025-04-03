function fetchData(callback){
    setTimeout(()=>{
        const data = {name:'Karthik',age:26};
        callback(data);
    },1000);
}


fetchData((data)=>{
    console.log(data);
})

//synchronous callback
function greet(name,callback){
    console.log('Hey '+name);
    callback();
}

function sayBye(){
    console.log('Bye');
}

greet('Karthik',sayBye);

//handling errors in callback 
function fetch(callback){
    const {data,error} = {data:{name:'ching',age:30},error:null};
    callback(error,data);
}

fetch((error,data)=>{
    if(error){
        console.log('error' + error);
    }
    console.log(data);
})