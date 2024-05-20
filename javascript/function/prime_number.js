//find a number whether it is prime or not
//logic - a number divided itself or  1 is prime num .. ex: 1,3,5,7,11,13..........


function isPrime(x){
    for(let i =2; i<= x-1;i++){
        if(x%i==0){
            return false;
        }
    }
    return true;
}

let result = isPrime(5);
console.log(result);