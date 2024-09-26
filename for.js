const student = {
    name: 'Mufassir Mahmud',
    department: 'CSE',
    roll: 58,
    cgpa: 3.75 
}
for(const keys in student){
    const values = student[keys]
    console.log(keys,values);

}
const obj = { foo: 1 };
obj.bar = 2;
console.log(obj);
let a = 12, b = 3;
[a, b] = [b, a];
console.log(a,b);