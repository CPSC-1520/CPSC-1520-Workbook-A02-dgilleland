/*
- [x] Create inline JavaScript using the `<script>` tag in a web page
- [x] Create external JavaScript files that can be referenced via a `<script>` tag
- [x] Discuss the placement of the `<script>` tag in HTML and the concerns/issues that developers should be aware of that dictate when to place in the `<head>` vs `<body>` element
    - Script tags in the <head> portion should usually have the `defer` attribute, otherwise the script will not have anything in the DOM to interact with (because the DOM hasn't been created yet).
- [x] Describe the purpose/effect of the `type` and `defer` attributes on the `<script>` element
    - The `defer` attribute will cause the script to be executed after the DOM has been created.
    - The `type` attribute will tell the browser what type of script it is. This is usually `text/javascript` or `module`. When it is `module`, the script will be treated as a module and will not be able to access the global scope.
- [ ] Describe the purpose of the `<noscript>` element
    - The `<noscript>` element is used to provide content to users that have JavaScript disabled in their browser.
- [ ] Describe the role of web servers in the delivery and processing of web pages
    - Web servers are responsible for delivering web pages to the client. They can also process requests and send responses back to the client.
    - The HTML protocol is known as a "stateless" protocol, meaning that the server does not remember anything about the client. This is why cookies are used to store information about the client.
- [ ] Distinguish between relative paths, root relative paths and absolute paths from the perspective of the web server
    - Relative paths are paths that are relative to the current file. For example, if you are in the `src` folder and you want to reference a file in the `css` folder, you would use `../css/style.css`.
    - Root relative paths are paths that are relative to the root of the website. For example, if you are in the `src` folder and you want to reference a file in the `css` folder, you would use `/css/style.css`.
    - Absolute paths are paths that are relative to the root of the server. For example, if you are in the `src` folder and you want to reference a file in the `css` folder, you would use `https://www.example.com/css/style.css`.
- [ ] Demonstrate how to launch a web page using the Live Server extension in VS Code
- [ ] Describe the concerns of XSS attacks and what browsers and servers do to mitigate the risk
- [ ] Describe two ways to write comments in JavaScript

*/