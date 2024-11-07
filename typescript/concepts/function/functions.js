function sum(a, b) {
    return a + b;
}
//optional paramater 
function sumOpt(a, b) {
    return a + (b || 0);
}
console.log(sumOpt(2));
