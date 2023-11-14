# Array `.map()`, `.filter()`, `.reduce()`, and `.sort()`

## Array Methods

JavaScript arrays have a number of built-in methods that make it easy to work with arrays. These methods are available on all arrays, and are called using the dot notation. For example, to call the `sort()` method on an array, you would use the following syntax:

```javascript
const numbers = [1, 3, 2, 5, 4];
numbers.sort();
```

These methods do not modify the original array; rather, they return new arrays with the results of the method.

### `.map()`

The `.map()` method creates a new array with the results of calling a provided function on every element in the calling array. The syntax for the `.map()` method is as follows:

```javascript
const newArray = array.map((element) => {
  // return something
});
```

For example, suppose we had an array of car objects, and we wanted to create a new array that contained just the car makes. We could use the `.map()` method to create a new array with just the car makes:

```javascript
const cars = [
  { make: 'Ford', model: 'Mustang' },
  { make: 'Ford', model: 'F-150' },
  { make: 'Chevrolet', model: 'Camaro' },
  { make: 'Chevrolet', model: 'Silverado' },
  { make: 'Dodge', model: 'Charger' },
  { make: 'Dodge', model: 'Ram' },
];

const carMakes = cars.map((car) => {
  return car.make;
});
```

The output of the `carMakes` array would be:

```javascript
['Ford', 'Ford', 'Chevrolet', 'Chevrolet', 'Dodge', 'Dodge'];
```

### `.filter()`

The `.filter()` method creates a new array with all elements that pass the test implemented by the provided function. The syntax for the `.filter()` method is as follows:

```javascript
const newArray = array.filter((element) => {
  // return true or false
});
```

Once again, let's use our array of cars. Suppose we wanted to create a new array that contained only the cars made by Ford. We could use the `.filter()` method to create a new array with just the Ford cars:

```javascript
// ... cars array from above
const fordCars = cars.filter((car) => {
  return car.make === 'Ford';
});
```

The output of the `fordCars` array would be:

```javascript
[
  { make: 'Ford', model: 'Mustang' },
  { make: 'Ford', model: 'F-150' },
];
```

### `.reduce()`

To "reduce" an array means to generate some singular output from the contents of the array. In other programming areas, this can be thought of as "aggregation" or "folding". For example, you can "reduce" an array of numbers to produce a single value that is the sum of all the numbers in the array.

The `.reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. The syntax for the `.reduce()` method is as follows:

```javascript
const output = array.reduce((accumulator, currentValue) => {
  // return something
}, initialValue);
```

The `accumulator` is the value that is returned by the previous iteration of the reducer function. The `currentValue` is the current element being processed in the array. The `initialValue` is the initial value of the accumulator. If no `initialValue` is provided, the first element in the array is used as the `initialValue`.

Let's use a simple example of just numbers. Suppose we wanted to find the average of all the numbers in an array. We could use the `.reduce()` method to sum all the numbers in the array, and then divide by the number of elements in the array:

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
const average = sum / numbers.length;
```

The "reducing" part of our code generated the sum.

### `.sort()`

The `.sort()` method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

The syntax for the `.sort()` method is as follows:

```javascript
const newArray = array.sort((a, b) => {
  // return something
});
```

Let's assume an array of names that we want to sort alphabetically. We could use the `.sort()` method to sort the array:

```javascript
const names = ['Stewart', 'Dent', 'John', 'Smith'];
const sortedNames = names.sort((a, b) => {
  return a.localeCompare(b);
});
```

The output of the `sortedNames` array would be:

```javascript
['Dent', 'John', 'Smith', 'Stewart'];
```

