

type logger = (msg:string,errorCode:number)=>void;

interface loggerInterface{
(msg:string,errorCode:number):void;
}


//defining unions is possible with type but not interface 

type unionOfStrRandom = number | string;
