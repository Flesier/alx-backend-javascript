# How to use map, filter, and reduce on arrays

This README file provides a brief guide on how to use the `map`, `filter`, and `reduce` functions on arrays in JavaScript. These functions are powerful tools for manipulating arrays and transforming their elements based on specific criteria. Let's dive into each function and explore their usage.

## Map

The `map` function is used to create a new array by performing a specified operation on each element of an existing array. It takes a callback function as an argument, which is executed for every element in the array. The callback function can transform or modify the elements, and the `map` function returns a new array with the results.

Here's the basic syntax for using `map`:

```javascript
const newArray = array.map(callback(element, index, array) {
  // Perform operations on each element
  // Return the transformed element
});
```

- `newArray`: This is the new array created by the `map` function.
- `array`: The original array on which `map` is called.
- `callback`: A function that is executed for each element of the array. It takes three arguments:
  - `element`: The current element being processed.
  - `index` (optional): The index of the current element.
  - `array` (optional): The original array being traversed.

Example usage:

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

In this example, the `map` function doubles each number in the `numbers` array, resulting in a new array `[2, 4, 6, 8, 10]`.

## Filter

The `filter` function is used to create a new array that contains only the elements that pass a specific condition. It takes a callback function as an argument, which evaluates each element of the array and returns a Boolean value. Elements that satisfy the condition are included in the new array.

Here's the basic syntax for using `filter`:

```javascript
const newArray = array.filter(callback(element, index, array) {
  // Evaluate each element and return true or false
});
```

- `newArray`: This is the new array created by the `filter` function.
- `array`: The original array on which `filter` is called.
- `callback`: A function that is executed for each element of the array. It takes three arguments:
  - `element`: The current element being processed.
  - `index` (optional): The index of the current element.
  - `array` (optional): The original array being traversed.

Example usage:

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

In this example, the `filter` function creates a new array containing only the even numbers from the `numbers` array.

## Reduce

The `reduce` function is used to reduce an array to a single value by executing a reducer function on each element of the array. The reducer function accumulates the result as it traverses the array from left to right. The `reduce` function takes two arguments: the reducer function and an optional initial value.

Here's the basic syntax for using `reduce`:

```javascript
const result = array.reduce(callback(accumulator, element, index, array), initialValue);
```

- `

result`: The final value obtained after reducing the array.
- `array`: The original array on which `reduce` is called.
- `callback`: A function that is executed for each element of the array. It takes four arguments:
  - `accumulator`: The accumulator accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback or the `initialValue` if provided.
  - `element`: The current element being processed.
  - `index` (optional): The index of the current element.
  - `array` (optional): The original array being traversed.
- `initialValue` (optional): A value to be used as the first argument to the first call of the `callback` function. If not provided, the first element of the array is used as the initial value, and the callback starts from the second element.

Example usage:

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum); // Output: 15
```

In this example, the `reduce` function sums up all the numbers in the `numbers` array and returns the result `15`.

## Conclusion

The `map`, `filter`, and `reduce` functions are powerful tools for manipulating arrays in JavaScript. By understanding their usage and incorporating them into your code, you can easily transform and filter array elements, as well as reduce an array to a single value. Experiment with these functions and explore their capabilities to enhance your array manipulation tasks.
