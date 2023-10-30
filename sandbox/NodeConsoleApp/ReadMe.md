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

## Appendix

### Dates and Times in JavaScript

JavaScript has a built-in `Date` object that can be used to get the current date and time. The `Date` object has a number of methods that can be used to get the current date and time, as well as to get the date and time in the past or future. The `Date` object also has a number of methods that can be used to format the date and time in a variety of ways.

One of the things to be aware of when using the JavaScript Date object is that it will return the date and time in the local time zone of the computer that is running the code. This means that if you are running the code on a computer that is in a different time zone than the computer that is running the code, the date and time that is returned will be different.

Working with dates and times in JavaScript can be a bit tricky, but there are a number of libraries that can be used to make it easier. One of the most popular libraries is Moment.js, which can be used to format dates and times in a variety of ways.