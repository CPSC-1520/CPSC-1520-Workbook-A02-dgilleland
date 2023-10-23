const url = document.URL;
console.log('Creating objects:\n\t', url);

// This is a constructor function.
// We use it to create objects by using the new keyword.
// The name of the function should be capitalized.
const Person = function (name, dateOfBirth) {
    // The this keyword refers to the object itself
    // Here we define the properties/members of the object
    this.name = name;
    this.dob = dateOfBirth;
    this.sayHello = function (someone) {
        let message = 'Hello ' + someone + ', my name is ' + this.name;
        return message;
    }
    this.getAge = function () {
        const today = new Date();
        const dob = new Date(this.dob);
        let age = today.getFullYear() - dob.getFullYear();
        const month = today.getMonth() - dob.getMonth();
        const dayOfMonth = today.getDate() - dob.getDate();
        if (month < 0 || (month === 0 && dayOfMonth < 0)) {
        age--;
        }
        return age;
    }
};

console.log('The following person was created using a constructor function:');
// Here we are creating an actual Person object.
const john = new Person('John', '1990-10-03');
console.log(john.name, john.getAge());
const jane = new Person('Jane', '1995-11-13');
console.log('John meets Jane:', john.sayHello(jane.name));
jane.dob = '2025-01-01';
console.log('Jane is this age:', jane.getAge());

// I can use the destructuring assignment syntax to
// create variables from the properties of an object.
// "unpack" the object into variables
let { name: theName, dob } = john;
//    \__/  \____/   \_/
//     |      |       |- property name of the object
//     |      |- new variable name
//     |- the object's property name
console.log(theName, dob);

// =============================
// Let's look at Object Literals and private values
const obj = {
    log: ['a', 'b', 'c'],
    // You can only use the get and set keywords
    // inside of object literals and classes
    get latest() {
        return this.log[this.log.length - 1];
    },
};

console.log(obj.latest);
// Expected output: "c"
// I am prevented from changing the value of the latest property
try {
    obj.latest = 'd';
} catch (error) {
    console.error('I expected this:', error.message);
}
// I would have to modify the log property instead
obj.log.push('d');
console.log(obj.latest);
// Expected output: "d"
