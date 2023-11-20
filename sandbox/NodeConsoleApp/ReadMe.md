# Simple NodeJS Console App

NodeJS was first conceived to be a server-side implementation for the JavaScript language, but it can also be used to create desktop applications. This is a simple console application that demonstrates how to use NodeJS to create a desktop application.

## Prerequisites

It is assumed that you have NodeJS installed on your computer. If not, you can download it from [here](https://nodejs.org/en/download/). For this example, we will also be using pnpm as our package manager. You can [install pnpm](https://pnpm.io/installation) by running the following command in the Windows Terminal:

```powershell
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

 It is also assumed that you have a basic understanding of JavaScript.

## Getting Started

First, let's begin by creating a `package.json` file. This file will contain all the information about our application. To create this file, run the following command in the Terminal:

```powershell
pnpm init
```

This will generate the `package.json` file with the following information (assuming your folder name is "NodeConsoleApp", as it is in this example):

```json
{
  "name": "NodeConsoleApp",
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

## Planning Our Console App

We're going to place our console app code in a folder we'll call `lib` (short for "library"). Inside of this, we'll put our `index.js` file.

We'll also make changes to our `package.json` file to tell it where the main file is located, and to tell it what the main file is called. We'll also add a `bin` property to tell it what the name of the executable file is and what the command name will be in the console to run our app (once it's installed).

```json
  "main": "./lib/index.js",
  "type": "module",
  "bin": {
    "ncapp": "./lib/index.js"
  },
```

## Testing Our Console App

To feel more confident about the code we are creating for our application, let's add the `vitest` package to our project. This will allow us to write tests for our code. To install this package, run the following command in the Terminal:

```powershell
pnpm add vitest
```

After installing the `vitest` package, we'll need to add a `test` script to our `package.json` file. This will allow us to run our tests from the command line. To do this, modify the `scripts` property in the `package.json` file to have the following:

```json
  "scripts": {
    "test": "vitest"
  },
```

```json
  "scripts": {
    "test": "vitest"
  },
```

## Appendix

### Dates and Times in JavaScript

JavaScript has a built-in `Date` object that can be used to get the current date and time. The `Date` object has a number of methods that can be used to get the current date and time, as well as to get the date and time in the past or future. The `Date` object also has a number of methods that can be used to format the date and time in a variety of ways.

One of the things to be aware of when using the JavaScript Date object is that it will return the date and time in the local time zone of the computer that is running the code. This means that if you are running the code on a computer that is in a different time zone than the computer that is running the code, the date and time that is returned will be different.

Working with dates and times in JavaScript can be a bit tricky, but there are a number of libraries that can be used to make it easier. One of the older (and quite popular) libraries is Moment.js, which can be used to format dates and times in a variety of ways. A more modern library is [`date-fns`](https://date-fns.org/).
