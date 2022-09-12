//1. How to decleare a variable using let and const
const fatherName = 'Arnold';
let season = 'Rainy';
season = 'Winter';

//2. condition: 6 basic conditons: <, >, ===, !==, <=, >=
//multiple conditions : && , ||
if (fatherName === 'arnold' || season === 'Rainy') {
    console.log('This is rainy season');
}
else if (fatherName === 'Arnold') {
    console.log('Father Name is Arnold');
}
else {
    console.log('nothing');
}

//3. array: index, length, push, pop, indexOf
const numbers = [2, 33, 4444, 324, 56];
numbers[0] = 56;

// 4. loop: for loop, while loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

//5. function
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(5, 6);
console.log(output);


//6. object
// 3 ways to access property by name
const student = {
    name: 'Kodom Ali',
    age: 32,
    subject: ['Bangla', 'English']
}
const myVariable = 'age';

console.log(student.age); // direct by property
console.log(student['age']); // acccess via property name string
console.log(student[myVariable]); // access via property name in a variable