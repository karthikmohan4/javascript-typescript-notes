function pattern1(n){
    let str = '*';
    for(let row =1;row<=n;row++){
        for(col =1;col<=n;col++){
            str += '*';
        }
        console.log(str);
    }
}

console.log(pattern1(5));

/*output
******
***********
****************
*********************
**************************
*/