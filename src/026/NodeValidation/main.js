console.log('main.js');
import './styles.css'; // You can import CSS for your website with Parcel.
import validator from 'validator';

// Hard-code demo
console.log(validator.isCreditCard('5555 5555 5555 4444'));
console.log(validator.isURL('www.google.ca'));

// TODO: Listen for each of the button clicks and perform appropriate validation, showing the results in the corresponding <output> elements.
const creditCardButton = document.getElementById('validate-credit-card');
creditCardButton.addEventListener('click', function(evt) {
    // Get the contents of the credit-card input
    const creditCardNumber = document.getElementById('credit-card').value;
    let message;
    // validate it
    if(validator.isCreditCard(creditCardNumber)) {
        message = `Thank you for the credit card. Processing payment now....`;
    } else {
        message = `${creditCardNumber} is not a valid credit card`;
    }
    const output = document.getElementById('credit-card-output');
    output.innerText = message;
})
