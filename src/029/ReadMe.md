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
└── static
    ├── 🕸️ 404.html
    └── 🕸️ index.html
```

One of the things that should be noted is that our folder structure protects the server-side code from being accessed through the browser. The `static` folder is the only folder that is accessible through the browser.

## Adding Static Resources

You can make your website more interesting by adding HTML, CSS, and JavaScript files to the `static` folder. You can also add images, fonts, and other resources to the `static` folder. You can get inspiration (and free resources) from places like [HTML5 Up](https://html5up.net/) or [Templated](https://templated.co/).
