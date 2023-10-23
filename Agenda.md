# Agenda

> These are my notes on what I plan to teach in each [**upcoming class**](#oct-23-w08). For the timeline of where we are today, see [the current schedule](./ReadMe.md#schedule).
>
> ## *... Warn those who are idle ..., encourage the disheartened, help the weak, be patient with everyone.*
>
> > My philosophy of teaching, taken from [the source](https://www.bible.com/bible/111/1TH.5.14.NIV)


----

## Sep 5 (W01)

- Course Introduction
- GitHub Account Setup
- *To be backfilled...*

## Sep 7

- *To be backfilled...*

----

## Sep 11 (W02)

- [x] VS Code Extensions (Live Server, etc.)
- [x] Complete practice app
- [ ] Lesson [002](./src/002/ReadMe.md) as homework

## Sep 12

- [x] In-Class #1 (**for marks**)
- [x] Today's Lesson(s)
  - Start with [003](./src/003/ReadMe.md) (and [its LOGs](./src/003/LOGs.md))
    - LiveServer
    - Browser Dev Tools
  - Complete [004](./src/004/ReadMe.md) (and review [its LOGs](./src/004/LOGs.md))
    - HTML & Emmet in VS Code
    - Link a JavaScript file

## Sep 14

- [x] In-Class Lab 1 *Solution*
- [x] **Today's Lesson(s)**
  - Complete [004](./src/004/ReadMe.md) (and review [its LOGs](./src/004/LOGs.md))
    - HTML & Emmet in VS Code
    - Link a JavaScript file
  - Begin [005](./src/005/ReadMe.md)
    - Review [its LOGs](./src/005/LOGs.md)

----

## Sep 18 (W03)

- [ ] Today's Lesson(s)
  - [Resume](./src/005/main.js) and Complete [005](./src/005/ReadMe.md)
    - Review [its LOGs](./src/005/LOGs.md)
    - Variables, operators, math

## Sep 19

- [x] Today's Lesson(s)
  - [**006**](./src/006/ReadMe.md) - Intro to Functions in JavaScript
    - Review [its LOGs](./src/006/LOGs.md)
  - [**007**](./src/007/ReadMe.md) - Creating JavaScript Functions
    - Review [its LOGs](./src/007/LOGs.md)

## Sep 21

> *Complete any topics from Sep 19 that were not covered...*

- [ ] Today's Lesson(s)
  - [**008**](./src/008/ReadMe.md) - Form Input and Handling Events
    - Review [its LOGs](./src/008/LOGs.md)
    - <details><summary>Use the [demo-events](./src/008/demo-events/) as a starter</summary> *(and pull the solution from [this file](backlog\(sort-queue)\w03-events_default_behaviour\js\main.js))*</details>
      - Demo creating an event handler
      - Demo adding an event listener
      - Demo **mouse** events such as `click`, `dblclick`, `mouseenter`, `mouseleave`, `mousemove`
      - Demo adding and removing CSS classes programmatically (from `.classList`)
      - Demo an anonymous handler for an event listener
- [ ] **Homework:** Review the [Learn by Play](./src/005/ReadMe.md#learn-by-play) from [005](./src/005/ReadMe.md).

> To grab a starting point for the demo, you can use [**tiged**](https://github.com/tiged/tiged) (based on [`degit`](https://github.com/Rich-Harris/degit) by Rich Harris, creator of Svelte) to grab a copy of the demo folder from my workbook:
> 
> ```bash
> npx tiged --disable-cache --force CPSC-1520/CPSC-1520-Workbook-A02-dgilleland/src/008/demo-events ./src/008/demo-events
> ```
>
> ***Note:** You may need to <kbd>ctrl</kbd>+<kbd>c</kbd> to stop the `npx tiged` command after it has finished downloading the demo folder.*

----

![Here be dragons](./docs/images/here-be-dragons.png)

----


## Sep 25 (W04)

- [x] Here's another learning resource: https://javascript.info/
- [x] Solution for Lab 2
- [x] Solution for Lab 3
- [x] Today's Lesson
  - [**012**](./src/012/ReadMe.md) - Making Decisions
    - Review [its LOGs](./src/012/LOGs.md)
- **Homework:**
  - [**009**](./src/009/ReadMe.md) - Waiting for the DOM
  - [**010**](./src/010/ReadMe.md) - Debugging JavaScript
 
----


## Sep 26

- [x] Today's Lesson
  - Try out the `~/src/012/demo-thumbnail_resize`
  - Use decisions in form validation
    - Use [this sample](https://chat.openai.com/share/7f9ac87e-8778-43b0-b9b8-dc1c4e8fe8a7)
  - *More on decisions...*

----


## Sep 28

- [ ] Today's Lesson
  - Nesting If-Else statements (using the [grammar demo](./src/012/demo-grammar/))
- [ ] In-Class Lab 4
  - ***NOTE:** There are typos in the lab specs - see comment in MS Teams.
- **Homework:**
  - Read about the [`switch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) statement
  - *(WIP)* [**011**](./src/011/ReadMe.md) - Organizing Functions in JavaScript

----

## Oct 2 (W05)

- [ ] Trivia & a great visualization: [The closest planet to Earth](https://www.youtube.com/shorts/BGyIQScWnCA)
- [ ] Note about Extra Form Demos/Practice and re-arranged files in [013](./src/013/ReadMe.md)
  - Also check out this on [Learning Web Forms](https://web.dev/learn/forms/)
- [ ] Solution to Lab 4
- [ ] Today's Lesson:
  - [**015**](./src/015/ReadMe.md) Loop intro + Grammar

> ```bash
> npx tiged --disable-cache --force CPSC-1520/CPSC-1520-Workbook-A02-dgilleland/src/015 ./src/015
> ```

## Oct 3

- [ ] Today's Lesson:
  - [**016**](./src/016/ReadMe.md) Arrays and Loops
  - `ctrl.focus()`

> ```bash
> npx tiged --disable-cache --force CPSC-1520/CPSC-1520-Workbook-A02-dgilleland/src/016 ./src/016
> ```

## Oct 5

- [ ] Homework Review
  - [ ] Read about [**Indexed Collections**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
  - [ ] Read about [**Keyed Collections**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections)

----

## Oct 12 (W06)

- [ ] Homework Review
  - [ ] Read about [**JavaScript Modules**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

----

## Oct 16 (W07)

> **Objects (Week 1)**

- [ ] Today's Lesson:
  - [ ] **Why Objects?**
    - *A Computer Program is a Set of Instructions for Manipulating Information*
  - [ ] Creating objects using Object Initializers (or *Object Literals*) - [object-literals demo](./src/018/object-literals/)
  - [ ] Defining "members" of objects (properties and methods)
- [ ] Homework Review
  - [ ] Read notes on [Objects](./src/018/Objects.md)
  - [ ] Read notes on [JSON](./src/018/JSON.md)
  - [ ] Read about [**Working with Objects**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)


## Oct 17

- [ ] **Lab 5 Today!**
- [ ] **Quiz 3 Reminder - Oct 19**

## Oct 19

- [ ] Today's Lesson
  - [ ] **Naitive JavaScript Modules**
  - [ ] See the [bonus](src/(bonus)/import-handlers)
  - [ ] A Note on Interfaces
    - > *According to the Mozilla Developer Network (MDN), an interface in JavaScript is a type definition with method signatures. It is not a class with a constructor that can be instantiated, nor is it a prototype object.* - Bing AIs
- [ ] Homework:
  - [ ] Read:
    - [ ] [**Working with Objects**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)
    - [ ] [**JavaScript Modules**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) from MDN
    - [ ] (Advanced topic: optional) [Unlocking the Power of Native Modules in JavaScript: An Introductory Guide](https://dev.to/danielboll/unlocking-the-power-of-native-modules-in-javascript-an-introductory-guide-4jh1)
    - [ ] (Advanced topic: Optional) [Using Native JavaScript Modules in Production Today](https://philipwalton.com/articles/using-native-javascript-modules-in-production-today/)

----

## Oct 23 (W08)

> **Objects (Week 2)**

- [ ] Today's Lesson:
  - [ ] Creating objects using Constructor Functions (with the `new` keyword)
  - [ ] ~~Creating objects using the `Object.create()` method~~
  - [ ] Defining getters and setters (*How C# is that!?*)
  - [ ] "Unpacking" objects using the destructuring assignment syntax.
    - [ ] see [this conversation](https://sl.bing.net/gCXPRAS8zF6)
- [ ] Revisiting Functions
  - [ ] Understanding the [Arrow Function syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [ ] Homework Review
  - [ ] Read about [**Using Classes**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes)
  - [ ] Read about [**Inheritance**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - [ ] Read [ES6 In Depth](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)

## Oct 24

- [ ] Today's Lesson:
  - [ ] JSON Format/Structure
  - [ ] Creating JSON files
  - [ ] Converting JavaScript Objects to JSON using Stringify
  - [ ] Converting JSON to JavaScript Objects using Parse

## Oct 26

- [ ] Today's Lesson:
  - [ ] JSON as a Configuration Tool
  - [ ] Brief Intro to Node (via NPM)
  - [ ] Minimal package.json
  - [ ] Package.json Fields
  - [ ] The role of Package.json in Node applications

----

## Oct 30 (W09)

> **Fetch Fundamentals**

- [ ] Today's Lesson:
  - [ ] Intro to the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
  - [ ] Understanding and [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [ ] Sidenote: [Using Keyword](https://www.youtube.com/shorts/mGou_ii5X0w) (in the context of file creation)

## Oct 31

## Nov 2

----

## Nov 6 (W10)

> **DOM API & Timers**

## Nov 7

## Nov 9

----

## Nov 13 (W11)

- [ ] Today's Lesson
  - [ ] Using Classes to create objects

## Nov 14

## Nov 16

----

## Nov 20 (W12)

## Nov 21

## Nov 23

----

## Nov 27 (W13)

## Nov 28

## Nov 30

----

## Dec 4 (W14)

## Dec 5

## Dec 7

----

## Dec 11 (W15)

## Dec 12

## Dec 14

----

## Instructor TODO:

- **LOGs/Lessons**
  - [ ] [**009**](./src/009/ReadMe.md) - Waiting for the DOM
    - [x] Lesson
    - [ ] LOGs
  - [ ] [**010**](./src/010/ReadMe.md) - Debugging JavaScript
    - [x] Lesson
    - [ ] LOGs
  - [ ] [**011**](./src/011/ReadMe.md) - Organizing Functions in JavaScript
    - [x] Lesson
    - [ ] LOGs
1. Making Decisions (*Week 4*)
  - [ ] [**012**](./src/012/ReadMe.md)
    - [x] Lesson
    - [ ] LOGs
  - [ ] [**013**](./src/013/ReadMe.md) If/Else in Form Validation; link to `switch` documentation
    - [x] Lesson
    - [ ] LOGs
  - [ ] [**014**](./src/01/ReadMe.md) TODO: Lesson on the Switch statement (flipped class)
    - [ ] Lesson
    - [ ] LOGs
1. Loops and Arrays (*Weeks 5 & 6*)
  - [ ] [**015**](./src/015/ReadMe.md) Loop intro + Grammar
    - [x] Lesson
    - [ ] LOGs
  - [ ] [**016**](./src/016/ReadMe.md) Arrays and Loops
    - [x] Lesson
    - [ ] LOGs
  - [ ] [**017**](./src/017/ReadMe.md) TODO: Array `.forEach`, array `of`/`in` loops
    - [ ] Lesson
    - [ ] LOGs
1. JS Objects (*Weeks 7 & 8*)
  - [ ] [**01**](./src/01/ReadMe.md)
    - [ ] Lesson
    - [ ] LOGs
  - [ ] [**01**](./src/01/ReadMe.md)
    - [ ] Lesson
    - [ ] LOGs
  - [ ] [**01**](./src/01/ReadMe.md)
    - [ ] Lesson
    - [ ] LOGs
1. Fetch Fundamentals (*Week 9*)
  - [ ] [**01**](./src/01/ReadMe.md)
    - [ ] Lesson
    - [ ] LOGs
  - [ ] [**01**](./src/01/ReadMe.md)
    - [ ] Lesson
    - [ ] LOGs
  - [ ] [**01**](./src/01/ReadMe.md)
    - [ ] Lesson
    - [ ] LOGs
1. DOM API & Timers (*Week 10*)
  - [ ] [**01**](./src/01/ReadMe.md)
  - [ ] [**01**](./src/01/ReadMe.md)
1. NPM, Tools, ES Modules (*Weeks 11 & 12*)
  - [ ] [**01**](./src/01/ReadMe.md)
  - [ ] [**01**](./src/01/ReadMe.md)
1. Class, Object, Prototypes (*Weeks 13 & 14*)
  - [ ] [**01**](./src/01/ReadMe.md)
  - [ ] [**01**](./src/01/ReadMe.md)
1. Extra Topics (*Week 15*)
  - [ ] [**01**](./src/01/ReadMe.md)
  - [ ] [**01**](./src/01/ReadMe.md)

<!--

> ***NOTE:** Backfill for previous classes...*

## W01D2 - First Day

## W01D3

- **Reminder:** Where is your repo on your computer?
  - NOT IN
    - OneDrive
    - DropBox
    - Removable USB Flash Drive
- Class Videos tab
  - Video - [What is GitHub](https://youtu.be/w3jLJU7DT5E)
- GitHub User Profile
- Learn git commands
- Learn Markdown
  - **CHAT:** Fill in the blank for the following statement: "HTML is a ______ language."
    - "Markup"
  - **001** steps
    - H1-H6, Paragraphs, Unordered Lists, Ordered Lists, Bulletted Lists, 
- GitHub Features
  - Issues / Milestones
  - Pull-Requests
  - GitHub CLI
    - Using `--help`
    - `gh pr list`
    - `gh pr view`
    - `gh issue list`
    - `gh issue view`
    - `gh issue create`
- More Markdown
  - **002** steps
    - Images, Tables, Links



-->


<!--

> ***TODO:** Modify these for the current term...*

## Sep 27

- Add/Remove Classes from Elements
- Event Listeners
  - Types of Events
  - Listening to Events
  - Event `.target`
  - MDN Articles
    - [Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
    - [Event Types](https://developer.mozilla.org/en-US/docs/Web/API/Element#events)

## Sep 29

- More on Event Listeners
  - Default Event Behaviour (and canceling it)
  - Event Bubbling
- Intro to If-Else

## Oct 1

- **010 Practice** - Solution
- **Demo-debugging**
  - Chrome Dev Tools - Sources Tab
  - Breakpoints, Variable Values, and Stepping Through Code
- **In-Class Assignment** - Event Listeners (60 min)

## Oct 5

- If-Else
  - Demo-thumbnails

## Oct 7

- Announcements
- Explore the Rendered Page
- Forms

## Oct 8

- Review Take-Home Lab
- In-Class - If/Else

## Oct 19

- Lessons 040 and 050
  - `gh pr list`, then `gh pr merge ##`, then `git pull`
- Some extra [notes on understanding your JavaScript objects](./docs/mynotes/dom-objects.md)
  - Exploring with your `$0.prototype.constructor.name`


## Oct 22

- Modifying the Word Guessing Game
- Slide-Show Practice

## Oct 26

- Lab 1 Solution
- Slide-Show Practice Solution

## Nov 30/Dec 2,3

- Objects
- JSON (JavaScript Object Notation)
- AJAX using the Fetch API


-->
