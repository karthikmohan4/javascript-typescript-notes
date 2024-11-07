interface Product {
  name: string;
  price: number;
  brand: string;

  display(): void;
}

let p1: Product = {
  name: "Mercedes",
  price: 40000000,
  brand: "benz",
  display: () => {
    console.log("display");
  },
};
console.log(p1);

//auth form examples
interface AuthForm{
  name:string,
  submitButtonText:string,
  onReset:(e:any)=>void,
  onSubmit:(e:any)=>void
}

const loginForm:AuthForm ={
  name:"Login form",
  submitButtonText:"Login",
  onReset:(e)=>{

  },
  onSubmit:(e)=>{

  }
}

console.log(loginForm);