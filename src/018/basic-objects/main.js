let names = [];
names.push('Fred');
names.push('Wilma');
names.push('Barney');
names.push('Betty');
console.log(names);

let person = {
    firstName: 'Fred',
    lastName: 'Smith',
    age: 32,
    isMarried: true,
    children: [
        'Pebbles',
        'Bam-Bam'
    ],
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person);
let address = {
    street: '123 Main St.',
    city: 'Bedrock',
    province: 'ON',
    postalCode: 'L2L 2L2'
};
console.log(address);
person.homeAddress = address;
console.log(person);
let salary;
person.income = salary;
console.log(person);

let stuff = [];
