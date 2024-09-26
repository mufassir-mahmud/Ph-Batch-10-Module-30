const division = (x,y) => x-y ;
console.log(division(10,5));

const getAge = (person) => person.age;

const student = {
    name: 'Mufassir Mahmud',
    age: 23,
    isSingle : false
}

const age  = getAge(student);
console.log(age);

const getThird = numbers => numbers[2];

console.log(getThird([11,22,33,44,55,66]));

const getPI = () => Math.PI;
console.log(getPI());


const doMath = (x,y,z) =>{
    const sum = x+y+z;
    const mult = x*y*z;
    const result = sum + mult;
    return result;
}

const math = doMath(5,5,5);
console.log(math);