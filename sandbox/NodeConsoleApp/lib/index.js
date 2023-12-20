#! /usr/bin/env node
// The line above is needed for this file to be executable as a script.
// It specifies that the script should be run using the node interpreter.
// It is also possible to run this script using the following command:
//      node ./sandbox/NodeConsoleApp/lib/index.js
// (assuming you are running from the console at the root of this repository)

// This is the "entry point" for the application.
console.clear();
console.log('Hello, world!');
/* How Node Works
    When Node runs, it will have a global variable called `process` that contains information about the whole "context" of the application that has been started.
    One of the properties of `process` is `argv`, which is an array of strings representing the command line arguments that were passed to the application.
    The first element in the array is the path to the Node executable.
    The second element is the path to the script that is being run.
    The remaining elements are the arguments that were explicitly passed to the script.
    For example, if you run the following command:
         node ./sandbox/NodeConsoleApp/lib/index.js --foo bar baz
    Then `process.argv` will be:
         [
             '/usr/local/bin/node',
             '/Users/username/Projects/JavaScriptSandbox/sandbox/NodeConsoleApp/lib/index.js',
             '--foo',
             'bar',
             'baz'
         ]
*/
// The following code will print the command line arguments that were passed to the script.
console.log('Command line arguments:');
console.log(process.argv);
// The following code will print the current working directory.
console.log('Current working directory:');
console.log(process.cwd());
// The following code will print the number environment variables.
console.log('Environment variables:');
const numItems = Object.keys(process.env).length;
console.log(`Number of items in process.env: ${numItems}`);

// The following code will print the environment path variable.
console.log('Environment path variable:');
console.log(process.env.PATH.split(';'));
