# JSON Server

There is this wonderful package for quick-n-easy REST API mocking called [**`json-server`**](https://github.com/typicode/json-server). It is available on [npm](https://www.npmjs.com/package/json-server) and it is very easy to use. It can be installed globally or locally.

The basic premise of this package is that you create a JSON file with some data in it, and then you run `json-server` on that file. The server will then serve the data in the JSON file as a REST API. It will also provide some additional functionality like pagination, filtering, sorting, etc.

One nice out-of-the-box feature of this package is the ability to search for data using a query string. For example, if you have a `users` resource, you can search for users with a specific name by appending the following to the URL of your json-server installation: `?q=John`.
