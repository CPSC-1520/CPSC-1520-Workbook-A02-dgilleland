// TODO: Outline the tasks/logic using only comments

// Purpose: This presents a form to input the course number and name of the course as well as the final mark for the course.
import { Course } from './modules/models.js';

/* AddCourse button click
- Get the user input (course number & name)
  - querySelector('#courseNumber')
  - querySelector('#courseName')
- Add that to my HTML table as a row of data
*/
const btn = document.querySelector('button');
console.log(btn);
btn.addEventListener('click', () => {
    const courseNumber = document.querySelector('#courseNumber').value;
    const courseName = document.querySelector('#courseName').value;
    const course = new Course(courseName, courseNumber);
    console.log(course.name, course.number, course.grade);
});