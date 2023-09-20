var select = document.querySelector('.items');

select.addEventListener('change', function (evt) {
	var numOfItems = evt.target.value;
	var list = '<ul>';
	var count;

	for (count = 0; count < numOfItems; count += 1) {
		list = list + '<li>' +
				'<input type="checkbox"/>' +
				'<label contenteditable>Todo item ' + (count + 1) + '</label>' +
			'</li>';
	}

	list = list + '</ul>';

	document.querySelector('.todo-list').innerHTML = list;
});