document
    .getElementById('demoForm')
    .addEventListener('submit', function(event) {
        // 0) Prevent the default behaviour of the form
        event.preventDefault();
        // Validation logic will go here
        const form = event.target;
        // 1) Get the values from the form
        // console.log(form.elements.username.value);
        let errors = '';
        if(!isValidUsername(form.elements.username.value)) {
            errors += 'Invalid username.\n'; // \n is a new line
        }
        if(!isValidEmail(form.elements.email.value)) {
            errors += 'Invalid email.\n';
        }
        if(errors) { // "truthy" check
            alert(errors);
        } else {
            alert('Form submitted! Your account is in the queue to be hacked.')
        }
    });

// Validation Methods
const isValidUsername = function(text) {
    const valid = text.length > 0;
    return valid;
}

const isValidEmail = function(email) {
    // A valid email is one that has a @ symbol
    const valid = email.indexOf('@') > -1;
    return valid;
}
