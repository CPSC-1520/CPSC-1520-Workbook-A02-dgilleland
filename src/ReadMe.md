# `src` Folder

This **`src`** folder is where you will place practice and demo material for each class.

> :warning: **Do *NOT*** use this repository for any assignments that are worth marks. :warning:

If there is a sample in your instructor's workbook that you want to pull into your own workbook, the easiest way to do that is through a Node package called [**tiged**](https://github.com/tiged/tiged#readme). Here's an example of how to use it to [grab a subdirectory](https://github.com/tiged/tiged#specify-a-subdirectory) from your instructor's workbook:

```bash
$ npx tiged --disable-cache --force DMIT-1234/Instructor-Workbook/src/008/demo-events ./src/008/demo-events
//\_______________________________/ \_______________________________________________/ \___________________/
//      |- Command to run               |- Instructor's source folder (on GitHub)        |- Your local destination folder
```


A more detailed explanation of the command would look like this:

```bash
$ npx tiged --disable-cache --force DMIT-1234/Instructor-Workbook/src/008/demo-events ./src/008/demo-events
//\_/ \___/ \_____________/ \_____/ \_______/ \_________________/ \_________________/ \___________________/
// |    |          |          |       |             |                     |                     |- Destination folder
// |    |          |          |       |             |                     |- Instructor Repo's sub-folder
// |    |          |          |       |             |- Instructor Repo's name
// |    |          |          |       |- GitHub Organization or User
// |    |          |          |- Force overwrite of existing files
// |    |          |- Disable caching of repo (so you grab the latest version)
// |    |- Command to run
// |- npx is a Node package runner (comes with Node)
```

----

## Starter Kits

1. Version Control and Markdown (*Week 0*)
   - [x] [**001 - Start Here**](./001-StartHere/ReadMe.md) - Markdown & git
   - [x] [**002**](./002/ReadMe.md) - More Markdown
1. Introduction to JavaScript (*Week 1*)
   - [x] [**003**](./003/ReadMe.md) - JavaScript in the Browser
   - [x] [**004**](./004/ReadMe.md) - JavaScript in your Web Page
   - [**005**](./005/ReadMe.md) - JavaScript Variables
1. Functions and Events (*Weeks 2 & 3*)
   - [**006**](./006/ReadMe.md) - Intro to Functions in JavaScript
   - [**007**](./007/ReadMe.md) - Creating JavaScript Functions
   - [**008**](./008/ReadMe.md) - Form Input and Handling Events
   - [**009**](./009/ReadMe.md) - Waiting for the DOM
   - [**010**](./010/ReadMe.md) - Debugging JavaScript
   - [**011**](./011/ReadMe.md) - Organizing Functions in JavaScript
1. Making Decisions (*Week 4*)
   - [**012**](./012/ReadMe.md)
   - [**01**](./01/ReadMe.md)
1. Loops and Arrays (*Weeks 5 & 6*)
   - [**01**](./01/ReadMe.md)
   - [**01**](./01/ReadMe.md)
1. JS Objects (*Weeks 7 & 8*)
   - [**01**](./01/ReadMe.md)
   - [**01**](./01/ReadMe.md)
1. Fetch Fundamentals (*Week 9*)
   - [**01**](./01/ReadMe.md)
   - [**01**](./01/ReadMe.md)
1. DOM API & Timers (*Week 10*)
   - [**01**](./01/ReadMe.md)
   - [**01**](./01/ReadMe.md)
1. NPM, Tools, ES Modules (*Weeks 11 & 12*)
   - [**01**](./01/ReadMe.md)
   - [**01**](./01/ReadMe.md)
1. Class, Object, Prototypes (*Weeks 13 & 14*)
   - [**01**](./01/ReadMe.md)
   - [**01**](./01/ReadMe.md)
1. Extra Topics (*Week 15*)
   - [**01**](./01/ReadMe.md)
   - [**01**](./01/ReadMe.md)
