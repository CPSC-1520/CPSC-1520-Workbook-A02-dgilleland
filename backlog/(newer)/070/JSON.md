# JSON

## JavaScript Object Notation [JSON]

<!-- > To follow along with this exercise, you will need to download and un-zip this [starter kit](.zip). -->

Anyone who's ever worked with XML will tell you that it can be hard work to access what you need from the document. Although XML allows you to transport a lot of information, a lot of the time the documents contain too much markup and data that you're not interested in. As an alternative approach to transmitting data, JSON makes transferring simple data a joy.

JSON presents data as essentially an associative array of name/value pairs similar to a JavaScript object literal. The one small difference is that the names must be presented as strings and the values are limited to primitive types (you cannot transfer a function.) The following example shows a simple JSON Person object.

> Example 7: a single JSON object

```json
'{
  "firstName": "Jon",
  "lastName": "Doe",
  "birthYear": 1990,
  "occupation": "developer"
}'
```

> Example 8: an array of JSON objects

```json
'[{
  "firstName": "Jon",
  "lastName": "Doe",
  "birthYear": 1990,
  "occupation": "developer"
},
{
  "firstName": "Sally",
  "lastName": "Anne",
  "birthYear": 1992,
  "occupation": "designer"
}]'
```

Note that in the examples above the entire value is enclosed in single quotes, which is required as the data is represented as a simple string. All names must be strings (double quoted) and all non-numeric values must be strings (double quoted.)

JSON strings can be created from values from a database, form entry, or even JavaScript objects. But the real power of JSON comes from being able to parse these strings into actual JavaScript objects. These objects can then be used just like any other JavaScript objects to retrieve the data you need.

## JSON Object

Modern JavaScript engines come with a JSON object that can be used to both create JSON strings from JavaScript objects using `JSON.stringify()` and convert JSON strings into JavaScript objects using `JSON.parse()`. The following examples demonstrate each of these functions.

> Example 9: parsing with `JSON.parse()`

```js
var jsonString = '{"name": "Jon Q", "age":25}';
var jonQ = JSON.parse(jsonString); // create a JS object
alert(jonQ.name); // Jon Q
```

> Example 10: creating a JSON string from an object with `JSON.stringify()`

```js
var jonQ = {
  name: "Jon Q",
  age: 25
};
alert(JSON.stringify(jonQ)); // {"name":"Jon Q","age":25}
```

## JSON and AJAX

JSON is essentially a data interchange format that is best used to transmit data across the network. Given this, it is extremely useful when paired with AJAX requests to servers. The format is so small that the server can send relatively large data-sets and information very quickly. The client is then responsible for parsing the data and updating the DOM, making for very snappy applications.
