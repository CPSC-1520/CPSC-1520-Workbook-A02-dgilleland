# Array `.map()`, `.filter()`, `.reduce()`, and `.sort()`

## Array Methods

JavaScript arrays have a number of built-in methods that make it easy to work with arrays. These methods are available on all arrays, and are called using the dot notation. For example, to call the `sort()` method on an array, you would use the following syntax:

```javascript
const numbers = [1, 3, 2, 5, 4];
numbers.sort(); // Note, this modifies the original array
console.log(numbers); // [1, 2, 3, 4, 5]
```

Some of these built-in array methods will modify the actual contents of the array; these are called *mutating* methods. Others do not modify the original array; rather, they return new arrays with the results of the method. This later group is referred to as *non-mutating* methods.

Many of the array methods listed here expect to receive a function as an argument. For example, the `.sort()`, `.map()` and `.filter()` methods expect a function that will act as a *predicate*. A predicate is a function that returns a boolean value.

Other array methods expect functions that perform some other kind of operation on the array. For example, the `.reduce()` method expects a function that will perform some kind of summary calculation on the items in the array.

### `.map()`

> This is a *non-mutating* method.

The [`.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method creates a new array with the results of calling a provided function on every element in the calling array. The syntax for the `.map()` method is as follows:

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

> This is a *non-mutating* method.

The [`.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method creates a new array with all elements that pass the test implemented by the provided function. The syntax for the `.filter()` method is as follows:

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

> This is a *non-mutating* method.

To "reduce" an array means to generate some singular output from the contents of the array. In other programming areas, this can be thought of as "aggregation" or "folding". For example, you can "reduce" an array of numbers to produce a single value that is the sum of all the numbers in the array.

The [`.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. The syntax for the `.reduce()` method is as follows:

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

> This is a *mutating* method.

The [`.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending.

The syntax for the `.sort()` method is as follows:

```javascript
const newArray = array.sort((a, b) => {
  // return something
});
```

Let's assume an array of names that we want to sort alphabetically. We could use the `.sort()` method to sort the array:

```javascript
const names = ['Stewart', 'Dent', 'John', 'Smith'];
// let's be explicit in giving our sort method a function that does the comparison
const sortedNames = names.sort((a, b) => {
  return a.localeCompare(b);
});
```

The output of the `sortedNames` array would be:

```javascript
['Dent', 'John', 'Smith', 'Stewart'];
```

But remember, the `sort()` method is *mutating*! That means our original `names` array is now sorted as well:

```javascript
console.log(names); // ['Dent', 'John', 'Smith', 'Stewart'];
```

Let's try a more interesting example. In this example, we'll use an array of students with final grades in the course. Each object in the array will have the name of the student and that student's mark.

```javascript
const students = [
  { name: 'Stewart Dent', mark: 90 },
  { name: 'Anna Lyst', mark: 75 },
  { name: 'Phobe Nominal', mark: 80 },
  { name: 'Derdrie Veloper', mark: 85 },
  { name: 'Hugh Mann', mark: 95 },
  { name: 'Pete Sariya', mark: 70 },
  { name: 'Marge Arin', mark: 65 },
  { name: 'Artie Fishel', mark: 60 },
  { name: 'Minnie Mum', mark: 55 },
  { name: 'Max E. Mumm', mark: 50 },
];
```

Now, let's create some functions that will compare our student objects. One that will compare two students by their marks. Another two will compare two students by their names:

```javascript
const compareMarks = (a, b) => {
  return a.mark - b.mark;
};
const compareFirstNames = (a, b) => {
  const nameA = a.name.split(' ')[0];
  const nameB = b.name.split(' ')[0];
  return nameA.localeCompare(nameB);
};
const compareLastNames = (a, b) => {
  const nameA = a.name.split(' ')[1];
  const nameB = b.name.split(' ')[1];
  return nameA.localeCompare(nameB);
};
```

These functions will act as our *predicates* for the `.sort()` method. We can use them to sort our array of students by mark, first name, or last name:

```javascript
const sortedByMark = students.sort(compareMarks);
const sortedByFirstName = students.sort(compareFirstNames);
const sortedByLastName = students.sort(compareLastNames);
```

Try this code out for yourself and view the results.

### `.toSorted()`

> This is a *non-mutating* method.

All of the examples above with the `.sort()` method can be rewritten using the [`.toSorted()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted) method. The `.toSorted()` method returns a new array that is sorted according to the provided predicate function. The syntax for the `.toSorted()` method is as follows:

```javascript
const newArray = array.toSorted((a, b) => {
  // return something
});
```
