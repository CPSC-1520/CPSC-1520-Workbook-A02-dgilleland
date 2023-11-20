# Minimal NodeJS Web Server

> Based on this article on MDN: [Node Server without Framework](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework)

## Setting Up a Simple Node Web Server

1. Create a new folder for the project (e.g.: `mkdir simple-server` inside this folder) and `cd` into it.
2. Create a `package.json` by running either `pnpm init` or `npm init -y`.
3. Add the following setting in your `package.json` file to run es6 modules:

    ```json
    "type": "module"
    ```

4. Refer to the article above for the code for `index.js`.
5. Create a subfolder in your project called `static` and add two files: `index.html` and `404.html`.
6. Run `node index.js` to start the server.

The general structure of the project should look like this:

```text
📂 simple-server
├── 🗒️ index.js
├── 🗒️ package.json
└── 📂 static
    ├── 🕸️ 404.html
    └── 🕸️ index.html
```

One of the things that should be noted is that our folder structure protects the server-side code from being accessed through the browser. The `static` folder is the only folder that is accessible through the browser.

## Groking the Code

The article on MDN does a good overview of the code, but there are small parts of the code that will probably require a bit of pondering, even if you are feeling comfortable with JavaScript.

Open a repl in node and load up the `repl/grok.js` file. It contains some of the code from the index.js to help you understand what is going on.

1. Understanding the [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) (see also [this article](https://www.geeksforgeeks.org/javascript-spread-operator/))
1. Understanding the [`arguments` variable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) in JavaScript.
1. In the repl, run the code `showMe(toBool)` - You will see that there is one argument: the array `toBool`.
1. Now run the code `showMe(...toBool)` - You will see that there are two arguments.

## Adding Static Resources

You can make your website more interesting by adding HTML, CSS, and JavaScript files to the `static` folder. You can also add images, fonts, and other resources to the `static` folder. You can get inspiration (and free resources) from places like [HTML5 Up](https://html5up.net/) or [Templated](https://templated.co/).
