# #00 - Start Here

## Browser Dev Tools

JavaScript is the universal programming language for the web. It is understood by all browsers, and is the language used to create dynamic web pages. All modern browser also include developer tools that allow you to inspect the HTML, CSS, and JavaScript of any web page. You can also use these tools to debug your own code.

For working with JavaScript, you will need to know how to open the developer tools in your browser. The following instructions will help you do that.

1. Open your browser for any URL (such as [Google](https://google.ca) or [Bing](https://bing.ca) search).
1. Press `F12` to open the browser's developer tools.
1. Click the [**Console**] tab.

Within the console, you can type JavaScript code and execute it. You can also see any errors that occur when the browser tries to execute the code from the web page or code that you've typed into the browser.

The following sections will help you get started with exploring JavaScript in the browser.

## Editing in VS Code

- Use [Emmet](https://code.visualstudio.com/docs/editor/emmet) to create [HTML content](https://code.visualstudio.com/Docs/languages/html#_emmet-snippets) for the [index.html](./index.html) file.
- Create a `jsconfig.json` file in this folder (learn more [here](https://code.visualstudio.com/docs/nodejs/working-with-javascript#_javascript-projects-jsconfigjson))
- Copy the following code into that JSON file.

  ```json
  {
    "compilerOptions": {
        "module": "commonjs",
        "target": "es6"
    },
    "exclude": ["node_modules", "**/node_modules/*"]
  }
  ```

## Launching Your Browser

In VS Code, you can launch your browser with the debug tools. Debugging is a day-to-day aspect of coding, so you should take time to learn more about how it works. You can learn more about how to do this in VS Code from their [User Guide on Debugging](https://code.visualstudio.com/Docs/editor/debugging).

- With your VS Code editor focused on your `index.html` tab,
  - Open the Run and Debug pane
  - Click the [**Run and Debug**] button
  - Select the browser you want to use