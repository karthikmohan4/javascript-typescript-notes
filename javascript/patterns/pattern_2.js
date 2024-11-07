function pattern2(n){
    for(var row=1;row<=n;row+=1){
     let str="*";
     for(let col=1;col<=row;col+=1){
        str+='*';
     }
     console.log(str);
    }
}

const search = require('./test.js')
console.log(search.module);

/*
*
**
***
****
*****
*/
