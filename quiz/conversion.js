//str to num
let str = "123";
let num = Number(str);
console.log(num);

let floatStr = "123.45";
let floatNum = Number(floatStr);
console.log(floatNum);

console.log("Using parseInt");

let s = "123";
let n = parseInt(s);
console.log(n);

let f = "123.56";
let fn = parseInt(f);
console.log(fn);

let binaryStr = "1010";
let binaryNumber = parseInt(binaryStr, 2);
console.log(binaryNumber);

console.log("using parseFloat");
let fStr = "1.3";
let fNm = parseFloat(fStr);
console.log(fNm);

console.log("using unary + operator");
let x = "2323";
let y = +x;
console.log(y);

let fus = "12.56";
let fun = +fus;
console.log(fun);

console.log('Handling non-numeric string');
let invalidStr = 'ads';
console.log(Number(invalidStr));
console.log(parseInt(invalidStr));
console.log(parseFloat(invalidStr));
console.log(+invalidStr);