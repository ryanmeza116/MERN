// Problem 1 
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // tesla
console.log(otherRandomCar) // mercedes

// Problem 2 
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); // name is undefined. 
console.log(otherName); // would print elon 

// Problem 3 

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); // 12345
console.log(hashedPassword); // password not defined in dict person 

// Problem 4 
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // 2
const [,,,second] = numbers; // 5
const [,,,,,,,,third] = numbers; // 2
//Predict the output
console.log(first == second); // returns boolean , false. 
console.log(first == third); // true 

// Problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // 'value'
const { secondKey } = lastTest; // [1 5 1 8 3 3]
const [ ,willThisWork] = secondKey; // 5
//Predict the output
console.log(key); // 'value'
console.log(secondKey); // [1 5 1 8 3 3]
console.log(secondKey[0]); //[1]
console.log(willThisWork); // 5








