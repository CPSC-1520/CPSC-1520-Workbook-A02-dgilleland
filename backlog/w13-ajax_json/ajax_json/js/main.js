// At present, you will have to call the getFriends()
// function in the console. Potential updates include:
// 1. update the render function to use DOM API 
//    vs. innerHTML string
// 2. add a button (or some other control) to the page
//    for triggering the getFriends() function
// 3. add additional properties to the JSON data file
//    for each friend (e.g. photoURL, hometown, etc.)

function renderFriends(friends) {
	var disp = document.querySelector('.friends');
	var output = '<h1>Friends</h1>';
	var idx;

	// render each friend in the array...
	for (idx = 0; idx < friends.length; idx += 1) {
		output += '<div class="friend">' +
			'<h2 class="name">' + friends[idx].firstName +
			' ' + friends[idx].lastName + '</h2>' +
			'<p class="email">' + friends[idx].email + '</p></div>';
	}

	disp.innerHTML = output;
}

function getFriends() {
	var xhr = new XMLHttpRequest(); // 1

	xhr.open('GET', 'data/friend_data.json', true); // 2

	xhr.addEventListener('load', function () {
		if (xhr.status == 200){
			renderFriends(JSON.parse(xhr.response));
		} else {
			console.log('Error ' + xhr.status + ' - ' + 
				xhr.statusText);
		}
	}); // 3

	xhr.send(null); // 4
}