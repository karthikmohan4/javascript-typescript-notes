

function sum(a:number,b:number):number{
    return a+b;
}

//optional paramater 
function sumOpt(a:number,b?:number):number{
    return a + (b||0);
}


console.log(sumOpt(2));

//void

function fun():void{
    
}