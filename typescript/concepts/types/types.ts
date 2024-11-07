

/* arrays*/
let a1: number[] = [1,2,3,4];
let hetero: any[]=[1,2,"add",false];
let data : (number|string|boolean)[] = [1,2,"add",false]; 


//Date object in ts
const dob= new Date(1998,10,30);
console.log(dob.getDate());

//type: any

let x:any = 10;
x= "add";


//type inferring
type details = {name:string,marks:number,address?:string};

const result :details= {
    name:"karthi",
    marks:85,
    address:"Bengaluru"
}
result.marks = 88;
console.log(result);