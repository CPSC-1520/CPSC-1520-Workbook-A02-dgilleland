// Ad-Hoc JavaScript Demos (REPL)
// ==============================
// See https://youtu.be/3CBD5JZJJKw
// Immutable Methods
const people = ["Sally", "Kyle", "John"];
console.log("Original", people);
people.push("Tim");
console.log("After push", people);
const persons = people.with(1, "Jane");
console.log("After with", persons);
console.log("Original", people);

// .with
// .toSorted
// .toReversed
// .toSpliced
// structuredClone
console.table(people);