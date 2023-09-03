# JavaScript in Your WebPage

The following is a short-list of the topics covered in this demo.

- console.log, src, src + async + defer, "inline" script
- live server
- variable declarations, types, math

----

## Discover Emmet  ![Code](https://img.shields.io/badge/Code%20Status-Walkthrough-blueviolet?logo=Visual%20Studio%20Code&labelColor=indigo)

This walkthrough introduces **Emmet**. It also contains two small JavaScript files: [`first.js`](./first.js) and [`second.js`](./second.js). Here, we will explore the effect of including these in the `<head>` of an HTML document that we will generate using *Emmet*.

Loading external JavaScript files is accomplished through the `<script>` element's `src` attribute. JavaScript code can be included in the HTML directly by being placed in the `<script>` element directly, but larger scripts are typically kept separate from the HTML in their own files. They standard file extension for JavaScript files is `.js`.

1. Create an `Index.html` file in this folder. Add a basic html document using [Emmet](https://code.visualstudio.com/docs/editor/emmet) by typing `html:5` and selecting the Emmet-generated expansion.

   ![Emmet](./images/Emmet.png)

1. Add some basic content to the page using Emmet:

    ```
    h1{Emmet for HTML/JS/CSS}+ul>li{Item $}*3^p*3>lorem
    ```

1. In the `<head>` element of the page, add the following markup.

    ```html
    <script src="first.js"></script>
    <script src="second.js" type="module" defer></script>
    ```

1. View the page in the browser by launching it using Live Server. Right-click on the file and choose "Open with Live Server".

    ![Live Server](./images/LiveServer.png)

> *:+1: **TIP:** It's usually a good idea to use relative paths when linking your HTML to JavaScript files. This makes it easier to move sets of files around without having to change the internal code.*

----

## Software Design ![Docs](https://img.shields.io/badge/Documentation%20Status-100%25%20Complete-brightgreen?logo=Read%20the%20Docs)

"Tight coupling" makes for bad design, because changes in either area can potentially "break" the other areas.

![Bad](./images/BadDesign.png)

"Loose coupling" between the areas of Content, Presentation, and Functionality makes for a flexible design that is easy to maintain.

![Good](./images/GoodDesign.png)

This is not to say that content, presentation and functionality have no reference to each other. It's just that we want the connections between them to be ["unobtrusive"](https://dictionary.cambridge.org/dictionary/english/unobtrusive). In the case of web pages, it's the browser's job to bring together HTML, CSS and JavaScript files; this happens in the rendering process for the page.

![Rendering](./images/HTML-CSS-JS-Processed.png)

----

## References

- [**Emmet**](https://emmet.io/)
  - [Documentation](https://docs.emmet.io/)
  - [Emmet CheatSheet](https://docs.emmet.io/cheat-sheet/)
- [The `<script>` Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
