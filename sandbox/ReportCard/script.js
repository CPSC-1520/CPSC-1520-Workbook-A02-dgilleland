// TODO: Outline the tasks/logic using only comments
import 'concrete.css';
import * as UI from './modules/ui.js';

document.querySelector('h1')
.innerHTML += ` <span>${UI.viteLogoLink} ${UI.javascriptLogoLink}</span>`;

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
const addCourseClickHandler = () => {
  const courseNumber = document.querySelector('#courseNumber').value;
  const courseName = document.querySelector('#courseName').value;
  const course = new Course(courseName, courseNumber);
  console.log(course.name, course.number, course.grade);
};
btn.addEventListener('click', addCourseClickHandler);
