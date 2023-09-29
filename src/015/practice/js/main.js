// Enter JavaScript for the exercise here...
document.querySelector('[name=toggle]')
        .addEventListener('change', function (evt) {
            // get the set of message checkboxes
            let messages = document.querySelectorAll('[name=message]');
            // console.log(messages);
            let subjectCheckbox = evt.target;
            for(let aGivenCheckbox of messages) {
                aGivenCheckbox.checked = subjectCheckbox.checked;
            }
        });