
const fruits = ["Apple", "Banana", "Mango"];

fruits.push("Orange");
console.log("After push:", fruits);

fruits.pop();
console.log("After pop:", fruits);



const numbers = [10, 20, 30, 40, 50];

const doubled = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubled);

const filtered = numbers.filter(num => num > 25);
console.log("Numbers greater than 25:", filtered);



const student = {
    name: "Rahim",
    age: 22
};

console.log("Object Keys:", Object.keys(student));

console.log("Has age property:", student.hasOwnProperty("age"));



const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];

console.log("Merged Array:", mergedArray);



function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum:", sum(10, 20, 30));


// Question 6: Hoisting

console.log(a);
var a = 10;

