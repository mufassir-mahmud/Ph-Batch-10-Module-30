const student = {
    name: 'Mufassir Mahmud',
    department: 'CSE',
    roll: 58,
    cgpa: 3.75 
}

const keys = Object.keys(student);
// console.log(...keys);
const values = Object.values(student);
// console.log(...values);
const pairs = Object.entries(values);
console.log(pairs[0][1]);
// console.log(...pairs);

// delete student.cgpa ;
// console.log(student);

const {cgpa, ...rest} = student;
console.log(rest);