//in - checks of own and inherited property
//hasOwnProperty - checks only in own property

const parentObj = {inheritedKey: 'inheritedValue'};
const childObj = Object.create(parentObj);
childObj.ownKey = 'ownValue';
console.log(childObj);

console.log('inheritedKey' in childObj);
console.log(childObj.hasOwnProperty('inheritedKey'));
console.log('ownKey' in childObj);
console.log(childObj.hasOwnProperty('ownKey'));