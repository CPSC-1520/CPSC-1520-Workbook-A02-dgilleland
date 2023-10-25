# Intro to Node.js

## What is Node.js?

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, `npm` (short for *"Node Package Manager"*), is the largest ecosystem of open source libraries in the world.

#### Alternate Package Managers for Node

- [Yarn](https://yarnpkg.com/) - An alternative that was introduced to fix some of the shortcomings of the built-in `npm` package manager. This was a big deal when it was first introduced, but `npm` has since fixed many of the issues that `yarn` was created to fix.
- [pnpm](https://pnpm.js.org/) - :100: :zap: Fast, disk space efficient package manager - ***This is my preferred one***
  - You can install it globally via the command `npm install -g pnpm`

## Minimal Node Setup

At the heart of a Node.js application is a file called `package.json`. This file contains metadata about the application, as well as the list of dependencies to install from `npm`. While there are numerous ways to create a `package.json` file, the easiest way is to run `npm init` in the root directory of your project. This will walk you through a series of prompts to create the file. If you are using a version of `npm` that is 5.2.0 or greater, you can add the `-y` flag to skip the prompts and accept the defaults.

```powershell
npm init -y
```

If you are using pnpm, you can run `pnpm init` to do the same thing.

The contents of the `package.json` file contains metadata for the application. At a minimum, it should contain the following:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "My first Node.js app",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "Your Name",
  "license": "MIT"
}
```

Most of these JSON properties are self-explanatory. A few of them require a bit of explanation.

- `main` - tells Node.js which file to run when the application starts.
- `scripts` - contains the names and code to execute as scripts that can be run from the command line.
  - The `start` script is a special script that can be run by typing `npm start` in the command line. The `start` script is commonly used to start the application.
  - All other scripts are run by typing `npm run <script-name>` in the command line.
- `license` - tells others how they can use your code. The most common license is the MIT license, which allows others to use your code for any purpose, including commercial purposes, as long as they give you credit. "MIT" stands for the Massachusetts Institute of Technology, which is where the license was created. Another common license is "ISC", which stands for the Internet Software Consortium.

In this node intro example, the `package.json` file (created via `pnpm init`) looks like this:

```json
{
  "name": "node-intro",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### Running a Node.js Application

In this example, we have a very simple `index.js` file that contains the following code:

```js
console.log('Welcome to this introduction to Node.js!');
```

We can run this in the terminal by typing `node index.js`. This will execute the code in the `index.js` file and print the following to the terminal:

```powershell
node index.js
Welcome to this introduction to Node.js!
```

Let's modify our `index.js` to use the `process` object to print the version of Node.js we are using.

```js
console.log(`Node.js version: ${process.version}`);
```

The `process` object is a global object that is available in all Node.js applications. It contains information about the current Node.js process, including the version of Node.js we are using. It also contains a number of other properties and methods that we can use to interact with the current process. One of the most helpful ones is the `process.env` property, which contains the environment variables for the current process. We can use this to get the value of the `PATH` environment variable, which contains the directories that the operating system will search for executables. We can print the value of the `PATH` environment variable by adding the following line to our `index.js` file:

```js
console.log(`PATH: ${process.env.PATH}`);
```

Another helpful `process` property is the `process.argv` property, which contains the command line arguments passed to the Node.js process. We can print the command line arguments by adding the following line to our `index.js` file:

```js
console.log(`Command line arguments: ${process.argv}`);
```

Let's apply these lines of code to our `index.js` file. The entire file should look like this:

```js
console.log('Welcome to this introduction to Node.js!');
console.log(`Node.js version: ${process.version}`);
console.log(`PATH: ${process.env.PATH}`);
console.log(`Command line arguments: ${process.argv}`);
```

Now, let's invoke (run) our Node application by typing `node index.js -n "Stewart Dent" --help` in the terminal. Notice the output is probably pretty long (due in large part to our having output our `PATH` environment variable). Ignore that output for the moment and look at the output of the `Command line arguments` line. It should look something like this:

```powershell
Command line arguments: C:\Program Files\nodejs\node.exe,C:\Users\stewa\Documents\GitHub\stewart-dent\cs-425\sandbox\node-intro\index.js,-n,Stewart Dent,--help
```

Notice how the first two arguments in the `process.argv` array are the path to the Node.js executable and the path to the `index.js` file. The remaining arguments are the command line arguments we passed to the Node.js process.

Now, let's do a bit of "clean-up" of our application. We'll remove the details of the `PATH`s in our environment and only print out the number of values in our environment. In addition, we'll output the command line arguments in a more readable format (as indented items like a markdown list). Our `index.js` file should now look like this:

```js
console.log('Welcome to this introduction to Node.js!');
console.log(`Node.js version: ${process.version}`);
console.log(`Number of values in PATH: ${process.env.PATH.split(';').length}`);
console.log('Command line arguments:');
process.argv.forEach((arg, index) => {
  console.log(`  - ${index}: ${arg}`);
});
```

That makes everything a whole lot more readable.

### Installing Dependencies

Every Node application will have its own "reason for being". Whatever tasks your application is designed to perform, it will likely need to use one or more libraries to accomplish those tasks. For example, if you are building a web application, you will likely need to use a library to handle routing, a library to handle authentication, a library to handle database access, etc. These libraries are called "dependencies" because your application depends on them to do its job.

Dependencies fall under two general groups. The first group is "production dependencies". These are the dependencies that your application needs to run. The second group is "development dependencies". These are the dependencies that your application needs to build and test your application. For example, if you are building a web application, you will likely need a library to "transpile" your code from ES6 to ES5, a library to bundle your code, a library to run your tests, etc. These are all development dependencies.

While the list of available libraries is nearly endless, it should be noted that Node comes with a number of utility objects/functions that are available to all Node applications. These include the `fs` (file system) object, the `path` object, the `http` object, etc. These are all part of the Node.js API and are available to all Node applications.

## TDD FTW!

### What is TDD?

TDD stands for "Test Driven Development". It is a software development process that emphasizes writing tests before writing the code that will be tested. It follows a pattern commonly referred to as "Red-Green-Refactor". The process is as follows:

1. **Red** - Write a test that describes the desired behavior of the code.
   - Run the test. **It should fail** because the code has not been written yet.
1. **Green** - Write the code to make the test pass.
   - Run the test. **It should pass**.
1. **Refactor** - Modify the code to make it more readable, more efficient, etc.
   - Run the test. **It should *still* pass**. Refactoring your code is a "cleanup" process. It should not change the behavior of the code.

### A Simple TDD Example

For our purposes, we are going to use **vitest** - a modern testing framework for Node.js applications. It is often used in conjuncture with *vite*, but it functions very well as a stand-alone testing framework. Since it doesn't require any special configuration, it is a great choice for our purposes.

Let's install vitest as a development dependency by typing the following in the terminal (notice that I'm using `pnpm` instead of `npm`):

```powershell
pnpm install --save-dev vitest
```



