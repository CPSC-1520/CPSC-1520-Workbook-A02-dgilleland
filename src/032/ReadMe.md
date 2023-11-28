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
|   |-- 📄 index.html
```