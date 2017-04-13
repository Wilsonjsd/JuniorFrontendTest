var options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
}

function getUserByUsername(username) {
   fetch('https://api.github.com/users/' + username, options)
  .then(function(response) {
    response.statusText()
    return response.text()
  })
  .catch(function(error) {
    console.log(error)
  })
}

var button = document.getElementById('principal-button');
var notFound = document.getElementsByClassName('notFound');

button.onclick = function() {
	var user = document.getElementById('write').value;

	console.log(user); // username
	var user1 = getUserByUsername(user);
	console.log(user1);

		if(user1) {
			console.log(user1.name); // nombre completo
			alert('Hello World');
		}
		else {
			alert('Goodbye World');
			notFound.style.display ='block';
		}
};



