/*
	Example of how each todo item needs to structured (DOM fragment)
	<div>
		<input type="checkbox" />
		<label for="todo-1" contenteditable>Todo 1</label>
	</div>
*/

const appendToDo = function (evt) {
	evt.preventDefault(); // sometimes this is good to do right at the start

	// 0) Create local variables
	// a reference to the element in the DOM that we want to add to
	let todoList = document.querySelector('.todo-list');
	// check for a todoCount on my todoList element
	let todoCount = todoList.dataset.todoCount;
	if (todoCount == undefined) {
		todoCount = 0;
	} else {
		todoCount = parseInt(todoCount);
	}
	let nextCount = todoCount + 1;
	// variables for creating the DOM fragment
	let div, todoText, label, checkbox, labelText, spanUp, spanDown, up, down;
	todoText = evt.target.elements['todo-item'].value;

	// 1) check for empty input value; use "dummy text" if empty
	if (todoText == '') {
		todoText = 'Todo ' + nextCount;
	}

	// 2) create the required nodes to build the DOM fragment
	div = document.createElement('div');
	checkbox = document.createElement('input');
	label = document.createElement('label');
	labelText = document.createTextNode(todoText); // Create a text node with our todo text.
	spanUp = document.createElement('span');
	spanDown = document.createElement('span');
	down = document.createTextNode('\u21e9'); // Unicode value of down arrow
	up = document.createTextNode('\u21e7'); // Unicode value of up arrow

	// 3) set the required attributes
	checkbox.setAttribute('type', 'checkbox'); // <input type='checkbox' />
	label.setAttribute('for', 'todo-' + nextCount); // <label for='todo-1'
	label.setAttribute('contenteditable', ''); // <label ...   contenteditable
	spanUp.classList.add('arrow');
	spanUp.classList.add('up');
	spanDown.classList.add('arrow');
	spanDown.classList.add('dn');

	// 4) build the DOM fragment (assemble the parts)
	label.appendChild(labelText); // put the text inside: <label ..>text</label>
	console.log('My label element:', label);
	spanUp.appendChild(up);
	spanDown.appendChild(down);
	div.appendChild(checkbox); // put the checkbox inside the div at the end
	div.appendChild(label); // put the label inside the div at the end
	div.appendChild(spanUp);
	div.appendChild(spanDown);
	console.log('My constructed div:', div);

	// 5) add the DOM fragment to the document (append to the div)
	// My todoList variable references an element that is already part of the
	// webpage. I am adding my in-memory <div> that I constructed to this DOM element.
	todoList.appendChild(div); // add to the end

	// 6) increase the count (tracking how many todo-items I have)
	todoCount = nextCount; // which was calculated as todoCount + 1
	todoList.dataset.todoCount = todoCount;

	// 7) clear the input textbox
	evt.target.reset();
}

const moveToDoItem = function (evt) {
	// a reference to the element in the DOM that we want to add to
	let todoList = document.querySelector('.todo-list');
	let target = evt.target;
	let newChild, refChild;
	// check for click on an arrow
	if (target.classList.contains('arrow')) {
		// identify the type of arrow (i.e. down or up)
		if (target.classList.contains('dn')) {
			/*
				- A
				- B <- click down (to go after C)
				- C
			*/
			console.log('down...');
			newChild = target.parentElement.nextElementSibling;
			refChild = target.parentElement;
			if(newChild) {
				todoList.insertBefore(newChild, refChild);
			}
		} else if (target.classList.contains('up')) {
			/*
				- A
				- B <- click up (to go before A)
				- C
			*/
			console.log('up...');
			newChild = target.parentElement;
			refChild = target.parentElement.previousElementSibling;
			if(refChild) {
				todoList.insertBefore(newChild, refChild);
			}
		}
	}
}

document
	.querySelector('form')
	.addEventListener('submit', appendToDo);

document
	.querySelector('.todo-list')
	.addEventListener('click', moveToDoItem);
