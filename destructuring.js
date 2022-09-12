
// array destructuring
const numbers = [42, 65, 77, 66];
const [x, y] = numbers;
console.log(x, y);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
// console.log(boxify(40, 99));
const [first, second] = boxify(40, 90);
console.log(first, second);

//object destructuring
const { name, age } = { name: 'alu', age: 13 };

const student = {
    name: 'Kodom Ali',
    boyos: 32,
    subject: ['Bangla', 'English']
}

const { bosoy, subject } = student;
const [subject1] = student.subject;
console.log(subject1);

