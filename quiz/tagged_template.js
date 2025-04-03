function tag(strings, ...values){
    return strings[0]+values[0]+strings[1]+values[1]+strings[2];
}

const result = tag`Helo ${'world'}!,How are ${'you'}`;
console.log(result);