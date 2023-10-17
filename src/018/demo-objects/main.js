// I can have a variable called $, and that is the
// name of the jQuery object when using the jQuery library
const $ = function(evt) {
    // Thanks Fred (remember to give credits)
    return document.querySelector(evt);
}
var heading = $('h1');
console.log(heading);
// On to other stuff.
// 1) The following is a demo of creating a "constructor" function that "instantiates" an object with a set of properties.
//    The 'proper' way to use functions as constructors is to have parameters that take their information and store the data inside the object as properties.
var Painting = function(name, artist, createdYear, aValue) {
    // A bunch of "properties" for this object
    this.name = name;
    this.artist = artist;
    this.yearCreated = createdYear;
    this.value = aValue;
}
// - We can use this to create one or more separate complex "things" or objects with their own properties.
var painting1 = new Painting('Mona Lisa', 'Davinci', 1503, 850000000);
var painting2 = new Painting(); // Notice that the new keyword is essentially generating the object while the function Painting() is producing the properties of this object.

// 2) We can also declare objects using what's called an "Object Literal". An object literal is simply an object (a pair of curly braces) with a comma-separated list of "members" (properties or functions) that belong to the object.
var Application = {
    name: 'Painting Vendor',
    version: 1,
    updateName: function(newName) {
        this.name = newName;
    }
}
// The object is "created" at the very moment it is declared.
console.log(Application.name);
// Object Literal syntax is often used in creating JSON objects. (JavaScript Object Notation)

// 3) Since ES6 (EcmaScript 6 - a particular version of JavaScript), there is a new keyword called class that allows us another way to define an object's structure.
class Car {
    // Appearance - properties
    VIN = '0000000';
    // Behaviour - functions
    drive () {
        console.log('zoom-zoom');
    }
    constructor(vin) {
        this.VIN = vin;
    }
}
// This JavaScript class allows me to create distinct objects with the same function/behaviour
const myCar = new Car(); // I should use the constructor..
myCar.drive();
console.log(myCar);
const realCar = new Car('1234567');
console.log(realCar);

// See MDN for information on classes:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

