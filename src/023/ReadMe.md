# DMIT-1508 - Database->JSON->HTML

This example demonstrates how to fetch a JSON file that contains info from a database. Then, that information is displayed in an HTML table, regardless of the type of data in that JSON array.

## Handling Fetch Errors

See this Bing chat for a good discussion on handling fetch errors.

A 404 error means that the resource you are trying to fetch does not exist on the server. You cannot prevent this error from happening, but you can handle it gracefully in your code. There are a few ways to do this:

- You can check the `status` property of the response object returned by `fetch`. If it is not 200, it means that the request was unsuccessful. You can then display an appropriate message to the user or take some other action. For example¹:

```javascript
fetch("https://example.com/some-resource")
  .then(res => {
    if (res.status !== 200) {
      // handle error
      console.log("Resource not found");
    } else {
      // handle success
      return res.json();
    }
  })
  .catch(err => {
    // handle network error
    console.error(err);
  });
```

- You can also use the `ok` property of the response object, which is a boolean value that indicates whether the request was successful or not. If it is false, it means that the request failed⁵. For example:

```javascript
fetch("https://example.com/some-resource")
  .then(res => {
    if (!res.ok) {
      // handle error
      console.log("Resource not found");
    } else {
      // handle success
      return res.json();
    }
  })
  .catch(err => {
    // handle network error
    console.error(err);
  });
```

- Another option is to use the `AbortController` interface, which allows you to cancel a fetch request before it completes. You can create an instance of `AbortController` and pass its `signal` property as an option to `fetch`. Then, you can call the `abort` method on the controller to cancel the request. This will cause the promise returned by `fetch` to reject with an `AbortError`³. For example:

```javascript
const controller = new AbortController();
const signal = controller.signal;

fetch("https://example.com/some-resource", { signal })
  .then(res => {
    // handle success
    return res.json();
  })
  .catch(err => {
    // handle error or abort
    if (err.name === "AbortError") {
      console.log("Request aborted");
    } else {
      console.error(err);
    }
  });

// abort the request after 5 seconds
setTimeout(() => controller.abort(), 5000);
```

Note that these methods only handle the error on the client side. If you want to prevent the error from occurring on the server side, you need to make sure that the resource you are requesting exists and is accessible. You may also need to configure your server to allow cross-origin requests if you are fetching from a different domain⁴.

> Source: Conversation with Bing, 2023-11-02
> (1) How can I handle error 404 in async/await fetch API. https://stackoverflow.com/questions/51781137/how-can-i-handle-error-404-in-async-await-fetch-api.
> (2) How to Handle Unsuccessful Fetch API Calls in JavaScript - Plain English. https://plainenglish.io/blog/handling-unsuccessful-calls-of-fetch-api-7eef551b74c8.
> (3) AbortController: abort() method - Web APIs | MDN. https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort.
> (4) Fixing Common Problems with CORS and JavaScript. https://developer.okta.com/blog/2021/08/02/fix-common-problems-cors.
> (5) javascript - Fetch API, Chrome, and 404 Errors - Stack Overflow. https://stackoverflow.com/questions/44019776/fetch-api-chrome-and-404-errors.
> (6) undefined. http://api.openweathermap.org/data/2.5/weather?q=.
> (7) undefined. https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js.
> (8) undefined. https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js.
> (9) undefined. https://cors-anywhere.herokuapp.com/http://example.com/fake/fake.
> (10) undefined. https://www.kirupa.com/book/images/learning_react2.gif.
> (11) undefined. https://reqres.in/api/users/34.
> (12) undefined. https://reqres.in/api/users/3432%29.