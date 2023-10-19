console.log('global-scope/main.js')

// If we create a variable, function, etc. in the global scope, it will be available to all of our JavaScript code.
// This is because the global scope is the parent scope of all other scopes.
let globalVariable = 'I am a global variable'
let $ = 'I have hijacked the jQuery variable. All your code is broken.';