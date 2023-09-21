# Agenda

> These are my notes on what I plan to teach in each upcoming class. For the timeline of where we are today, see [the current schedule](./ReadMe.md#schedule).


----

## Sep 5

- Course Introduction
- GitHub Account Setup
- *To be backfilled...*

## Sep 7

- *To be backfilled...*

## Sep 11

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

## Sep 18

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
- [ ] Solution for Lab 2
- [ ] **Homework:** Review the [Learn by Play](./src/005/ReadMe.md#learn-by-play) from [005](./src/005/ReadMe.md).

> To grab a starting point for the demo, you can use [`degit`](https://github.com/Rich-Harris/degit) by Rich Harris (creator of Svelte) to grab a copy of the demo folder from my workbook:
> 
> ```bash
> cd ./src/008  # Move to the folder where you want to put the demo
> npx tiged --disable-cache --force CPSC-1520/CPSC-1520-Workbook-A02-dgilleland/src/008/demo-events ./demo-events
> ```
>
> ***Note:** You may need to <kbd>ctrl</kbd>+<kbd>c</kbd> to stop the `npx degit` command after it has finished downloading the demo folder.*

----

![Here be dragons](./docs/images/here-be-dragons.png)

----


## Sep 25

- [ ] Today's Lesson
  - [**012**](./src/012/ReadMe.md) - Making Decisions
    - Review [its LOGs](./src/012/LOGs.md)
- **Homework:**
  - [**009**](./src/009/ReadMe.md) - Waiting for the DOM
  - [**010**](./src/010/ReadMe.md) - Debugging JavaScript
  - [**011**](./src/011/ReadMe.md) - Organizing Functions in JavaScript



----

## Instructor TODO:

- **LOGs/Lessons**
  - [ ] [**009**](./009/ReadMe.md) - Waiting for the DOM
  - [ ] [**010**](./010/ReadMe.md) - Debugging JavaScript
  - [ ] [**011**](./011/ReadMe.md) - Organizing Functions in JavaScript
1. Making Decisions (*Week 4*)
  - [ ] [**012**](./012/ReadMe.md)
  - [ ] [**01**](./01/ReadMe.md)
1. Loops and Arrays (*Weeks 5 & 6*)
  - [ ] [**01**](./01/ReadMe.md)
  - [ ] [**01**](./01/ReadMe.md)
1. JS Objects (*Weeks 7 & 8*)
  - [ ] [**01**](./01/ReadMe.md)
  - [ ] [**01**](./01/ReadMe.md)
1. Fetch Fundamentals (*Week 9*)
  - [ ] [**01**](./01/ReadMe.md)
  - [ ] [**01**](./01/ReadMe.md)
1. DOM API & Timers (*Week 10*)
  - [ ] [**01**](./01/ReadMe.md)
  - [ ] [**01**](./01/ReadMe.md)
1. NPM, Tools, ES Modules (*Weeks 11 & 12*)
  - [ ] [**01**](./01/ReadMe.md)
  - [ ] [**01**](./01/ReadMe.md)
1. Class, Object, Prototypes (*Weeks 13 & 14*)
  - [ ] [**01**](./01/ReadMe.md)
  - [ ] [**01**](./01/ReadMe.md)
1. Extra Topics (*Week 15*)
  - [ ] [**01**](./01/ReadMe.md)
  - [ ] [**01**](./01/ReadMe.md)

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
