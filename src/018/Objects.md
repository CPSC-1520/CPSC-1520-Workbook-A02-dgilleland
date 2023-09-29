# Creating Custom Objects

## Object Orientation

> To follow along with this exercise, you will need to download and un-zip this [starter kit](.zip).

JavaScript is an object-based scripting language and to this point we have made use of many of the built-in and available objects the language defines. However, sometimes the available objects are not well-suited for the task you need to carry out. In cases such as these you can extend the existing objects or even create your own custom objects.

## Object

Every object in JavaScript is derived from the ancestor Object. This highest-level parent object is the basis for all objects that exist in JavaScript. This object cannot be extended or inherited from in a traditional OOP sense, but objects that are created can be extended by way of prototyping.

## Prototype

Every object in JavaScript has a prototype property, which can be used to extend an object. This allows you to add new properties and methods to objects that already exist. As an example, let's say that for a particular application you need to be able to quickly retrieve the cubed value of any number. You could create an application function that could perform this task, but that requires a call to the function and passing in the value. A simpler approach would be to extend the Number prototype with a new cube method.

> Example 1: extending the prototype

```js
Number.prototype.cube = function () {
  return this * this * this;
}
var num2 = new Number(3);
alert(num.cube()); // displays 27
```

The benefit of this is that even if you have already created numbers before extending the prototype, those numbers will also immediately be able to access the method as well. When a method is called on an object in JavaScript the object is first checked for the existence of the method. If the method cannot be found then the object's prototype is checked, which is where it can be found in the following case:

> Example 2: all objects affected by extending the prototype

```js
var num = new Number(3);
Number.prototype.cube = function () {
  return this * this * this;
}
alert(num.cube()); // displays 27
```

Even though num1 is declared before the prototype is extended, it is still able to call the cube method.

Extending the prototype is a very powerful technique but care must be taken when extending the prototypes of built-in objects. A problem may arise when using third-party libraries that may also have extended the prototypes of these objects and your extension may override the methods that are required by them.

## Custom Objects

Extending the prototype of existing objects is great, but what about your own custom objects? Well, it turns out that any function in JavaScript can be used as a constructor if it is simply preceded with the `new` reserved word.

Let's say that I'm creating an application that displays paintings. I may want to create Painting objects to represent the paintings in my application. I can do this by simply creating a function that acts as a constructor for my painting objects.

> Example 3: using a constructor

```js
// Painting constructor
var Painting = function () {
  this.name;
  this.artist;
  this.yearCreated;
  this.value;
}
// create a couple of paintings
var painting1 = new Painting();
var painting2 = new Painting();
```

Each of the paintings created in the previous example will have their own member properties and methods. The new reserved word sets up the memory for each of our instances and essentially copies the original function as an object for each. The problem with this approach is that when both objects are created they each actually don't have their own properties as defined in the constructor. They actually share the attributes defined in the constructor. A quick example using the hasOwnProperty method will help show this.

> Example 4: objects do not have their own property using `this`

```js
// Painting constructor
var Painting = function () {
  this.name;
  this.artist = "Rembrandt"; // default for the example
  this.yearCreated;
  this.value;
}
// create a couple of paintings
var painting1 = new Painting();
var painting2 = new Painting();
alert(painting1.hasOwnProperty("artist")); // true
alert(painting2.hasOwnProperty("artist")); // true
alert(painting1.hasOwnProperty("value")); // false
alert(painting2.hasOwnProperty("value")); // false
```

The above will show that the painting1 has its own property artist but it does not have a value property. How can this be? Since only artist is assigned a value in the constructor, only that property is setup for each instance. The issue here is one of encapsulation. Each property can be directly accessed and so there's really no reason to define the properties since they can be appended to an object at runtime. Only by explicitly assigning a value for a property will it be passed to an instance.

## Encapsulation

So what about encapsulation, how can we protect object properties? It turns out this can be done quite easily by defining properties using var instead of this. Variables defined using var hold their scope inside the function they're declared within. By defining the name, artist, etc. using var, they will not be accessible outside of the original constructor (at least not directly). Then getter and setter methods can be defined to set and return those scoped variables preventing unwanted manipulation of them. The following example demonstrates how to accomplish this.

> Example 5: using var to create private properties

```js
// Painting constructor
var Painting = function () {
  var name;
  var artist;
  var yearCreated;
  var value;
  this.getName = function () {
    return name;
  }
  this.setName = function (n) {
    name = n;
  }
  ...
}

// create a couple of paintings
var painting1 = new Painting();
var painting2 = new Painting();
painting1.setName("The Scream");
alert(painting1.hasOwnProperty("name")); // false
alert(painting2.hasOwnProperty("name")); // false
alert(painting1.getName()); // The Scream
alert(painting2.getName()); // undefined
```

Here we can now see that the variables are not directly accessible (via hasOwnProperty) but that they can be set and retrieved via the getter and setter methods. This example makes use of what is known as a [closure](https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Closures). A closure allows access to a variable even after its scope has closed and it should have been garbage collected. This is a powerful concept and can be used to do things as we have above, but it can also lead to bad things like memory [leaks](http://www.ibm.com/developerworks/web/library/wa-memleak/).

## One-Off Object or Object Literals

In some cases you may only require a single instance of an object. In cases such as this, a better option may be to create an object literal. An object literal is essentially an associative array that can be used to create a single instance of an object. The syntax for creating an object literal is fairly easy to understand as (hopefully) the following example shows:

> Example 6: object literal

```js
var Application = {
  name: "Painting Vendor",
  version: 1,
  updateName: function (newName) {
    this.name = newName;
  }
}
alert(Application.name);// displays Painting Vendor
Application.updateName("Master Works");
alert(Application.name);// displays Master Works
```

The associative array Application contains a number of **name/value** pairs that define the object. Note that name/value pairs are separated with commas and names are separated from their values (which can be any type, even functions!) with colons. The default Object constructor can also be used to create a single object instance but the preferred method is the one shown here. The nice thing about the object literal is that all facets of the object can be easily seen and interpreted, which makes it a great candidate or object representation in general. This is essentially the approach taken in JSON.
