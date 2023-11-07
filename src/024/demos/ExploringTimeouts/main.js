const getPassword = function() {
    let input = prompt('What is the password?');
    if(input === password) {
        alert('Access Granted');
        timeoutRef = null;
        document.querySelector('button').disabled = true;
    } else {
        // Set up a nagging prompt
        timeoutRef = setTimeout(getPassword, 8000);
        // 8000 milliseconds is 8 seconds
        console.log('The timeout reference number is: ', timeoutRef);
    }
}
let timeoutRef = undefined;
let password = 'secret';

document.querySelector('button')
        .addEventListener('click', function(evt) {
            // anything other than null, undefined, false, 0 or an empty string '' is regarded as true
            if(timeoutRef) {
                clearTimeout(timeoutRef);
                timeoutRef = 0;
            }
        });

getPassword(); // Run the function that sets this up...