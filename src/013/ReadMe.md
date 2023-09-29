# Forms ![Docs](https://img.shields.io/badge/Documentation%20Status-10--40%25%20Rough%20Outline-red?logo=Read%20the%20Docs)

> Review the [**LOGs**](./LOGs.md) for this class.

---

## Prep

Before class, review the [Parthenon](./parthenon/ReadMe.md) notes and source code. Also review the starting source code for the [demo-validation](./demo-validation/).

## Demo

- **Demo Validation**
  - Build a simple form with two inputs: User name (`name=username`) and an email (`name=email`) to introduce the basics of form submission (e.g. submit event listener, prevent default behaviour, etc.) and how to access and work with form elements (i.e. event.target.elements)
    - Perform some basic form validation on the fields:
      - [ ] username must be at least 1 character
      - [ ] email must contain at least one '@' symbol
  - Modify the form above to add inputs for
    - [ ] password (`[name=password]`) and
    - [ ] password confirmation (`name=confirmation`)
    - Perform some basic form validation on the fields:
      - [ ] password must be between 6 and 10 characters in length
      - [ ] confirmation must match the password
    - And a utility class for updating the form fields to display when a field is invalid (e.g. add `error` class that makes the border red)

----

## Practice

- **Parthenon**
  - Walk through the notes/description of the Parthenon sample and try to implement it on your own.
- **Shipping Calculator**
  - Create the code to perform the calculations for the [Shipping Calculator](./shipping-calculator/Readme.md) sample
