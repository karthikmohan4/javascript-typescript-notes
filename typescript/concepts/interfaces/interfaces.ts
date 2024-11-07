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
