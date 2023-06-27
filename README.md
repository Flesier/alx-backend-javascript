# ES6 JavaScript Basics

This repository provides a beginner-friendly guide to ES6 (ECMAScript 2015) JavaScript basics. ES6 introduced several new features and syntax enhancements to JavaScript, making it more powerful and expressive. This README file serves as a quick reference and overview of some fundamental ES6 concepts and features.

## Table of Contents

- [let and const](#let-and-const)
- [Arrow Functions](#arrow-functions)
- [Template Literals](#template-literals)
- [Destructuring Assignment](#destructuring-assignment)
- [Spread Operator](#spread-operator)
- [Rest Parameters](#rest-parameters)
- [Default Parameters](#default-parameters)
- [Modules](#modules)
- [Classes](#classes)

## let and const

ES6 introduced two new keywords for variable declaration: `let` and `const`. 

- `let` allows you to declare block-scoped variables that can be reassigned later.
- `const` allows you to declare variables that are constant and cannot be reassigned. However, for objects and arrays declared with `const`, their properties and elements can still be modified.

```javascript
let count = 5;
count = 10; // Valid

const PI = 3.14159;
PI = 3.14; // Invalid

const person = {
  name: 'John',
  age: 25
};

person.name = 'Jane'; // Valid
person = { name: 'Jane', age: 30 }; // Invalid
```

## Arrow Functions

Arrow functions provide a more concise syntax for defining functions. They automatically bind `this` to the surrounding context and do not have their own `this` value.

```javascript
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```

Arrow functions are especially useful when working with higher-order functions or when you want to preserve the value of `this` within a nested function.

## Template Literals

Template literals provide an improved way to work with strings, allowing for multiline strings and string interpolation.

```javascript
const name = 'John';
const age = 25;

// Multiline strings
const message = `
  My name is ${name}.
  I am ${age} years old.
`;

console.log(message);
// Output:
// My name is John.
// I am 25 years old.
```

Template literals are enclosed by backticks (\`) instead of single or double quotes.

## Destructuring Assignment

Destructuring assignment allows you to extract values from arrays or properties from objects into distinct variables.

```javascript
// Array destructuring
const [x, y] = [1, 2];
console.log(x); // Output: 1
console.log(y); // Output: 2

// Object destructuring
const person = { name: 'John', age: 25 };
const { name, age } = person;
console.log(name); // Output: John
console.log(age); // Output: 25
```

Destructuring assignment simplifies the process of extracting values and can make your code more readable.

## Spread Operator

The spread operator allows you to expand arrays or objects into individual elements. It is denoted by three dots (`...`).

```javascript
// Array spreading
const numbers = [1, 2, 3];
const combined = [...numbers, 4, 5];
console.log(combined); // Output: [1, 2, 3, 4, 5]

// Object spreading
const person = { name: 'John', age: 25 };
const employee = { ...person
