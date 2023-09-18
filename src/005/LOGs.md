# Handling Information (LOGs)

*At the end of this lesson, you should be able to...*

- [x] Distinguish between primitive data types and object data types in JavaScript
- [x] List the primitive data types built-in to JavaScript
  - The primitive data types built-in to JavaScript are:
    - `undefined`
    - `null`
    - `boolean`
    - `number`
    - `string`
    - `bigint`
    - `symbol`
- [ ] List the non-primitive data types built-in to JavaScript
  - The `object` data type is also built-in to JavaScript. It is not a primitive type. Objects are discussed in detail in a later lesson. For now, consider objects to simply be a collection of properties.
  - Other non-primitive data types built into JavaScript are the following. Generally speaking, these can be thought of as "specialized" objects.
    - `function`
    - `array`
    - `date`
    - `regexp`
- [x] Distinguish between the `var`, `let`, and `const` keywords
- [ ] What is the difference between the `null` value and the `undefined` value?
  - The `null` value is a special value that indicates that a variable has no value.
  - The `undefined` value is a special value that indicates that a variable has not been initialized.
- [ ] Describe what is meant by the term "Temporal dead zone" (TDZ)
  - The TDZ is a time between entering scope and being declared where the variable cannot be accessed. The variable can only be accessed when it is declared, and not before.

  ```js
  console.log('before variable declaration', name);
  // Initializing a variable is declaring it and assigning it a value
  // in the same statement.
  let name = "Stew Dent";
  console.log('after variable initialization', name);

  console.log('before variable declaration', grade);
  let grade;
  console.log('after variable declaration', grade);
  grade = 85;
  console.log('after variable assignment', grade);
  ```

- [ ] Describe what is meant by "literal values" in code
  - A literal value is a value that is written directly into the code. It is not stored in a variable or computed in any way.
- [ ] Describe the purpose of the `typeof` operator
  - The `typeof` operator returns a string that indicates the type of the operand. For example, `typeof 42` returns `"number"`.
- [ ] Describe what is meant by the statement "JavaScript is a loosely typed language"
  - That means that JavaScript allows a variable's type to be changed at runtime. For example, a variable can be assigned a number and then later assigned a string.
- [ ] Distinguish between loosely typed and strongly typed languages
  - In strongly typed languages, a variable's data type cannot be changed after it has been declared. For example, in C# the following code would not compile:

  ```cs
  int age = 42;
  age = "forty-two";
  ```

- [ ] Explain the implications of JavaScript being a loosely typed language
- [ ] Describe two ways of writing string literals in JavaScript
- [ ] Describe the purpose of the `+` operator in JavaScript
- [ ] Define the term **concatenation**
- [ ] Construct strings using concatenation of string literals and variables
- [ ] Describe two ways to concatenate strings in JavaScript
  - We can use the plus operator (`+`) to concatenate strings. For example, `"Hello " + "World"` returns `"Hello World"`. A variation on that is to use the `+=` operator.
  - We can use the `concat()` method of the `String` object to concatenate strings. For example, `"Hello ".concat("World")` returns `"Hello World"`.
  - We can also template strings to concatenate strings. For example, `` `Hello ${name}` `` returns `"Hello Stew Dent"` (assuming that the variable `name` holds the value `"Stew Dent"`).
- [ ] List the arithmetic operators used with numbers in JavaScript
- [ ] Explain how JavaScript's `Number` type is different from other languages such as C# or Java.
- [ ] Explain what is meant by an "expression" in JavaScript
- [ ] Describe the effects of "implicit conversion" on expressions that mix numbers and strings
- [ ] Describe how to use "explicit conversion" to convert strings to numbers
- [ ] Describe how to use "explicit conversion" to convert numbers to strings
- [ ] List five common members of the `Math` object
- [ ] List the various assignment operators in JavaScript
- [ ] Explain the difference between the `++` and `--` operators when used as a prefix vs postfix on a variable
- [ ] Explain why the increment and decrement operators cannot be used on literal numbers
- [ ] Distinguish between the special JavaScript values of `null`, `undefined`, `NaN`, and `Infinity`
- [ ] Distinguish between the technical notions of "primitive types" and "primitive values" in JavaScript
  - > In JavaScript, a **primitive** (primitive value, primitive data type) is data that is not an object and has no methods or properties. There are **seven primitive data types**: `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, and `null`.
  - >
  - > Primitive values are **immutable**; that is, they cannot be altered. When we assign a primitive type to a variable, we are copying that value to the new variable. Therefore, primitive types are "copied by value".
  - >
  - > Primitive data types are built-in data structures defined in the system for the language. A primitive data type in JavaScript is stored on a stack.
  - >
  - > On the other hand, **primitive types** represent groups or sets of values. Some have only one value, such as the Undefined Type with exactly one value: `undefined`, and the Null Type with exactly one value: `null`. The Boolean Type has two values: `true` and `false`. Other types have lots of possible values, such as the String Type and Number Type. A primitive value represents a value at the lowest level. For example, `3` is a primitive value of the Number Type, and `"a"` is a primitive value of the String Type. Objects belong to the Object Type; they are not primitives. Objects may have properties whose values are either primitives or references to other objects.
  - >
  - > *Source: Conversation with Bing, 2023-09-17*


