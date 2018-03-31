function saveUser(){

	// get the new input
	var userKey = chance.guid();
	var userName = document.getElementById('inputName').value;
	var userId = document.getElementById('inputID').value;
	var userCgpa = document.getElementById('inputCgpa').value;
	var userBirthDay = document.getElementById('inputBirthDay').value;
	var usercontactNumber = document.getElementById('inputcontactNumber').value;

	//create object of the new input
	var user = {
		key : userKey,
		name : userName,
		id : userId, 
		cgpa : userCgpa,
		birthDay : userBirthDay,
		contactNumber : usercontactNumber
	}

	//store in local storage
	if(!localStorage.getItem('users')){
		var users = [];
		users.push(user);
		localStorage.setItem('users',JSON.stringify(users));
	}else{
		var users = JSON.parse(localStorage.getItem('users')); 
		users.push(user);
		localStorage.setItem('users',JSON.stringify(users))
	}

	//display the updated list of users
	fetchUsers();
	actionConfirmation.innerHTML = "User is registered successfully.";
	
}

var toDel;
function selectToDel(key){

	toDel = key;
	var users = JSON.parse(localStorage.getItem('users'));
	for(var i = 0; i < users.length; i++){
		if(users[i].key == toDel  ){
			wantToDelUser.innerHTML = users[i].name;
			break;		
		}
	}
	 
}

function deleteUser(){
	var users = JSON.parse(localStorage.getItem('users'));
	for(var i = 0; i < users.length; i++){
		if(users[i].key == toDel  ){
			users.splice(i,1);
		}
	}
	localStorage.setItem('users',JSON.stringify(users)); 
	fetchUsers();
	actionConfirmation.innerHTML = "User is deleted successfully.";
}

function editUser(key) {
	var toEdit;
	var users = JSON.parse(localStorage.getItem('users'));
	for(var i = 0; i < users.length; i++){
		if(users[i].key == key){
			toEdit = i;
			break;
		}
	}

	document.getElementById('inputName').value = users[toEdit].name;
	document.getElementById('inputID').value = users[toEdit].id;
	document.getElementById('inputCgpa').value = users[toEdit].cgpa;
	document.getElementById('inputBirthDay').value = users[toEdit].birthDay;
	document.getElementById('inputcontactNumber').value = users[toEdit].contactNumber;
	// we can add if-change condition
	document.getElementById("saveConfirmation").addEventListener("click", function(){

		users[toEdit].name = document.getElementById('inputName').value;

		users[toEdit].id = document.getElementById('inputID').value;
		users[toEdit].cgpa = document.getElementById('inputCgpa').value;
		users[toEdit].birthDay = document.getElementById('inputBirthDay').value;
		users[toEdit].contactNumber = document.getElementById('inputcontactNumber').value;

		localStorage.setItem('users',JSON.stringify(users));
		fetchUsers();
		actionConfirmation.innerHTML = "User information is updated successfully.";

	});

}


function viewUser(key){

	var users = JSON.parse(localStorage.getItem('users'));
	for(var i = 0; i < users.length; i++){
		if(users[i].key == key){
			toEdit = i;
			break;
		}
	}
	document.getElementById('inputName').value = users[toEdit].name;
	document.getElementById('inputID').value = users[toEdit].id;
	document.getElementById('inputCgpa').value = users[toEdit].cgpa;
	document.getElementById('inputBirthDay').value = users[toEdit].birthDay;
	document.getElementById('inputcontactNumber').value = users[toEdit].contactNumber;
	localStorage.setItem('users',JSON.stringify(users)); 

}

function searchUser(){

	var input, filter, table, tr, td, i;
	input = document.getElementById("searchName");
	filter = input.value.toUpperCase();
	table = document.getElementById("userList");
	tr = table.getElementsByTagName("tr");
	console.log(tr);
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[1];
		if (td) {
		  if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
		    tr[i].style.display = "";
		  } else {
		    tr[i].style.display = "none";
		  }
		}       
	}

}

function fetchUsers(){
	var users = JSON.parse(localStorage.getItem('users'));

	userList.innerHTML = '';
	for(var i = 0; i< users.length ; i++){
		var index = i+1;
		var key = users[i].key;
		var name = users[i].name;
		var id = users[i].id;
		var birthDay = users[i].birthDay;
		var cgpa = users[i].cgpa;
		var contactNumber = users[i].contactNumber;
		userList.innerHTML += 	'<tr>' + 
								'<td>' + index + '</td>' + 
								'<td >'+ name + '</td>' + 
								'<td>' + id + '</td>' +
								'<td>' + birthDay+ '</td>' +
								'<td>' + cgpa + '</td>' + 
								'<td >'+ contactNumber + '</td>' +  
								'<td><button class="btn btn-info btn-sm"  type="button"  onclick="viewUser(\''+ key +'\')" data-toggle="modal" data-target="#myModal">View</button></td>' +
								'<td><button class="btn btn-info btn-sm"  type="button"  onclick="editUser(\''+ key +'\')" data-toggle="modal" data-target="#myModal">Edit</button></td>' +
		              			'<td><button class="btn btn-danger btn-sm" type="button" onclick="selectToDel(\''+ key +'\')" data-toggle="modal" data-target="#myDelModal">Delete</button> </td>'+
								'</tr>';
	}
	
}

function clearAlert(){
	actionConfirmation.innerHTML = "";
}

function resetTheInputForm(){
		//reset the input fields in modal
	document.getElementById('inputName').value = '';
	document.getElementById('inputID').value = '';
	document.getElementById('inputCgpa').value = '';
	document.getElementById('inputBirthDay').value ='';
	document.getElementById('inputcontactNumber').value ='';

	document.getElementById("saveConfirmation").addEventListener("click", saveUser);

}