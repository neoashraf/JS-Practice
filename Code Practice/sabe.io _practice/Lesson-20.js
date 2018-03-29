var base = 'https://jsonplaceholder.typicode.com';
// using fetch on the /posts route, the npass the response along
fetch(base +"/posts").then(function(response){
	// with the response, convert it to JSON, then pass it along
	response.json().then(function (json) {
		// 
		console.log(json);
	})
});