const actor = {
    name: 'Ananta Jalil',
    age: 55,
    phone: '0177777777',
    address: 'Uttara 08'
}

const {phone: call, age: boyosh} = actor;
console.log(boyosh);

const [x,y] = [11,22,33,44];
console.log(x,y);


// function double (a,b){
//     return [a*2, b*2];
// }
// const [c,d] = double(2,4);
// console.log(x,y);

const double = (a,b) => [a*2, b*2];
const [c,d] = double(4,4);
console.log(c,d);