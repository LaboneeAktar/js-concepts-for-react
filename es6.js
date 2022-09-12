const numbers = [2, 33, 4444, 324, 56];
const student = {
    name: 'Kodom Ali',
    age: 32,
    subject: ['Bangla', 'English']
};

//1. Template String
const about = `His name is ${student.name}, age of ${student.age} has number ${numbers[2]} also liked subjects ${student.subject[0]}`;
console.log(about);

//2. arrow function
const getFiftyFive = () => 55;  //no parameter
const addSixtyFive = num => num + 65; // single parameter
const isEven = x => x % 2 == 0; // single parameter with conditon
const addThree = (x, y, z) => x + y + z; //multiple parameter
const doMath = (num1, num2) => {      //multi line arrow function
    const sum = num1 + num2;
    return sum;
}

//3. spread operator
const newNumbers = [...numbers];

numbers.push(99);
numbers.push(44);

// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);