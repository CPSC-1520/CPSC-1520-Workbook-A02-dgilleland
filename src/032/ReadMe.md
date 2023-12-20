# Serving JSON

> A brief foray into serving JSON in a node.js application using `json-server`.

## Description

There is a nice and simple node package that helps with setting up a fake REST API server for testing purposes. It is called [**`json-server`**](https://github.com/typicode/json-server) and it is available on [npm](https://www.npmjs.com/package/json-server). It is very easy to use and it can be installed globally or locally.

## The Application

We're going to build two folders - one for the backend server and one for the front-end client. The backend server will be our `json-server` API and the front-end client will be a simple HTML page that will use `fetch` to get data from the API and display/edit information.

The folder structure of our application will look like this:

```text
~ 📂 [root]
|-- 📂 backend-server
|   |-- 📄 db.json
|   |-- 📄 package.json
|-- 📂 frontend-website
    |-- 📄 app.js
    |-- 📄 index.html
    |-- 📄 package.json
```

### The Backend Server

Setting up the backend server is very easy. We just need to create a folder for it and run `npm init` to create a `package.json` file. Then we install `json-server` and create a `db.json` file with some data in it. For our purposes, we'll use the sample data from the `json-server` [GitHub repository](). Once that data is in place, all we need to do to run the server is to set up the following script in our `package.json` file and then run `npm run backend` in the terminal.
    
```json
"scripts": {
    "backend": "json-server --watch db.json"
}
```

> **Note:** When you type `npm run backend` in the terminal, first make sure that your terminal is open in the same folder as the backend's `package.json` file. So, if your folder is at `C:\GH\CPSC-1520\MyProject\backend-server`, then you need to open the terminal in that folder. You can do this by right-clicking on the folder in VS Code and selecting "Open in Integrated Terminal".
>
> The same will be true later on when you go to run the front-end client. You'll need to open the terminal in the folder where that website's `package.json` file is located.
>
> Essentially, you need **two** terminal windows open - one for the backend server and one for the front-end client.

This will start the server and it will be available at [`http://localhost:5000/`](http://localhost:5000/). You can also access the data in the `db.json` file directly at [`http://localhost:5000/db`](http://localhost:5000/db).

### The Frontend Client

For our front-end client, we'll also set it up as a node project. Create the folder and run `npm init` to create the `package.json` file. For this project, we'll use `parcel` to serve our HTML page. We'll also use a node package called ["clam.css"](https://ryanmartin.me/clam.css/) for our overall styling; install it by running `npm i clam.css`. Once these dependencies are installed, we'll set up the following scripts in our `package.json` file:

> *Note to self: The `clam.css` isn't as nice for forms as I'd like. I might need to find something else... .*

```json
  "source": "index.html",
  "scripts": {
    "start": "parcel",
    "build": "parcel build"
  },
```

> **Note:** The `source` property is used by `parcel` to know which file to serve. In this case, it is `index.html`. You should probably also remove the `main` property from the `package.json` file as it is not needed.

You can run the application by running `npm start` (or `npm run start`) in the terminal. This will start the `parcel` server and open the application in your default browser.

#### The HTML Page

Use the following HTML code for the `index.html` file. It will act as a "shell" for our application, and load the `app.js` file which will contain the code for our application.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo JSON-Server</title>
    <script type="module" src="app.js"></script>
</head>
<body>
    <main>
        <section>
            <h1>My Blog</h1>
            <div id="app"></div>            
        </section>
    </main>
</body>
</html
```

#### The JavaScript Code

The JavaScript code for our application will be in the `app.js` file. It will use `fetch` to get data from the API and display it in the HTML page. It will also have a form that will allow us to add new posts to the API. 

```js
// app.js

// This will read and write to the backend server's JSON database.
const URL = 'http://localhost:5000/'
const routes = [ 'posts', 'comments', 'profile' ];

const app = document.getElementById('app');

const renderPosts = (posts) => {
    // posts is an array of objects where each object has an id, title and author.
    // We want to generate a string of HTML where each post is a div with this information.
    // Let's use a simple loop to do this.
    let html = '';
    for (let post of posts) {
        html += `<div class="post" data-id="${post.id}">
            <h2>${post.title}</h2>
            <p>By ${post.author}</p>
        </div>`;
    }
    return html;
}
const listPosts = () => {
    // This function will fetch the posts from the backend server and render them.
    fetch(URL + 'posts')
        .then(response => response.json())
        .then(data => {
            app.innerHTML = renderPosts(data);
        });
}
listPosts();
```

At present, the page looks a little "plain". We can add some styling to it by importint `claim.css` into the `app.js` file. Make the following change to the start of the `app.js`

```js
// app.js
import 'clam.css';
```

> ***Note:** There's more to come...*
