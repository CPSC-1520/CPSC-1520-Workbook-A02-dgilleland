# Report Card Demo

We're going to make a report card webpage with JavaScript functionality.

The body of the initial HTML was made using Emmet in VS Code.

```html
<body>
    h1+main>h2+table>tr>th*3^tr>td*3
</body>
```

## Design Notes

The primary view of the site will show the courses that have been taken and the grades that have been earned. The user will be able to add courses and grades to the list. The user will also be able to delete or hide courses and grades from the list.

This summary transcript will be rendered in a tabular format. Details for each course can be viewed by clicking on the course number and/or name. The details will be rendered in a modal dialog where they can also be edited. Incomplete or partial information on the course evaluations is permitted, but warnings will be displayed to the user.

> ### Styling and CSS
>
> While this course is focused on providing *functionality and interactivity* with JavaScript rather than HTML/CSS design, it never hurts to make things look appealing. This project leverages the idea of **class-less CSS** (also known as "no-class CSS") and uses the [**concrete.css**](https://www.npmjs.com/package/concrete.css) package as a Node library. ~~[**Bolt.css**](https://boltcss.com/) stylesheet via a CDN (content-delivery network) link: `<link rel="stylesheet" href="https://unpkg.com/boltcss/bolt.min.css">`~~. If you wish, you can try some other no-class stylesheets such as [OK.css](https://okcss.netlify.app/).

## Bonus Features

### Template Strings

The benefit of using template strings is that they allow you to use variables and expressions within the string. This is especially useful if you are using a string to build HTML elements.

```javascript
// imagine that we have variables for the course number, name, and grade
// and we want to build a table row with three table cells
// using template strings, we can do this:
let html = 
`<tr>
  <td><b>${courseNumber}</b></td>
  <td>${courseName}</td>
  <td>${courseGrade}</td>
</tr>`;
// and then we can add it to the table
document.querySelector('table').innerHTML += html;
```

### Native JavaScript Modules

We'll make use of native JavaScript modules to organize our code into separate files. This will allow us to keep our code organized and to use the `import` and `export` keywords to share code between files. Additionally, it will help us to avoid polluting the global namespace with our variables and functions.

We'll use an `index.js` file as the "root" of our JavaScript application. This file will import the other modules and will contain the code that runs when the page loads.

```javascript
// index.js
import * as data from './data.js';
import * as ui from './ui.js';
// ... more imports
// ... code that runs when the page loads
//     (e.g. event listeners, etc.)
```

In order to leverage the `import` and `export` keywords, we'll need to add the `type="module"` attribute to the `<script>` tag in our HTML file.

```html
<script src="index.js" type="module"></script>
```

### Useful DOM API Management

We'll leverage some DOM API skills to access rows of detailed information for each course.
