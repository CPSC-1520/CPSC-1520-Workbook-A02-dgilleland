let numbers = [1, 2, 3, 4, 5, 6, 7]
numbers
numbers.map((item) => item * 5)
numbers
console.clear()
console.clear()
const doubleIt = function(someValue) {
return someValue * 2;
}
numbers.map(doubleIt)
let flintstones = ['Fred', 'Wilma', 'Barney', 'Betty']
flintstones.map(doubleIt)
flintstones
const startsWithB = function(someText) {
const startsWithB = function(someText) {
return someText.startsWith('B');
}
flintstones.filter(startsWithB)
flintstones.filter((item) => item.includes('a'))