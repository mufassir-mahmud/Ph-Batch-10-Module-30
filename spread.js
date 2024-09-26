const max = Math.max(11,22,46,6,732);
// console.log(max);

const numbers = [11,22,66,4,43,55,];
// console.log(...numbers);
const findMax = Math.max(...numbers);
// console.log(findMax);

const friends = [11,22,33,44,55,66,77];
const dost = [...friends];
console.log(dost);
dost.push(88,99);
console.log('dost', dost);
console.log('Friends', friends);

const num = [...dost, 111];
console.log(num);