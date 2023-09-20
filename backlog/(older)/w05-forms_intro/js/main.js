document.querySelector('form.login').addEventListener('submit', function (evt) {
	var user = evt.target.elements.username;
	var pass = evt.target.elements.password;
	var valid = true;

	// check the username, should be email
	if (user.value.indexOf('@') == -1) {
		valid = false;
		user.classList.add('error');
	} else {
		user.classList.remove('error');
	}

	// check password, b/w 6 and 10 chars
	if (pass.value.length < 6 || pass.value.length > 10) {
		valid = false;
		pass.classList.add('error');
	} else {
		pass.classList.remove('error');
	}

	if (valid == false) {
		evt.preventDefault();
	}
});