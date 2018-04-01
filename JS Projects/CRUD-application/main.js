function saveUser(){

	// get the new input
	var userKey = chance.guid();
	var userName = document.getElementById('inputName').value;
	var userId = document.getElementById('inputID').value;
	var userBirthDay = document.getElementById('inputBirthDay').value;
	var userCgpa = document.getElementById('inputCgpa').value;
	var usercontactNumber = document.getElementById('inputcontactNumber').value;

	//create object of the new input
	var user = {
		key : userKey,
		name : userName,
		id : userId,
		birthDay : userBirthDay,
		cgpa : userCgpa,
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
	updateModalTitle.innerHTML = "Update User Information";

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
	document.getElementById('inputBirthDay').value = users[toEdit].birthDay;
	document.getElementById('inputCgpa').value = users[toEdit].cgpa;
	document.getElementById('inputcontactNumber').value = users[toEdit].contactNumber;

	editableOrNoneditable(0,"update");

	// we can add if-change condition
	document.getElementById("updateConfirmation").addEventListener("click", function(){

		users[toEdit].name = document.getElementById('inputName').value;
		users[toEdit].id = document.getElementById('inputID').value;
		users[toEdit].birthDay = document.getElementById('inputBirthDay').value;
		users[toEdit].cgpa = document.getElementById('inputCgpa').value;
		users[toEdit].contactNumber = document.getElementById('inputcontactNumber').value;

		localStorage.setItem('users',JSON.stringify(users));
		fetchUsers();
		actionConfirmation.innerHTML = "User information is updated successfully.";
	});

}


function viewUser(key){
	updateModalTitle.innerHTML = "User Details";
	console.log("view");
	var toView;
	var users = JSON.parse(localStorage.getItem('users'));
	for(var i = 0; i < users.length; i++){
		if(users[i].key == key){
			toView = i;
			break;
		}
	}
	document.getElementById('inputName').value = users[toView].name;
	document.getElementById('inputID').value = users[toView].id;
	document.getElementById('inputBirthDay').value = users[toView].birthDay;
	document.getElementById('inputCgpa').value = users[toView].cgpa;
	document.getElementById('inputcontactNumber').value = users[toView].contactNumber;
	editableOrNoneditable(1,"view");

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
								'<td >' + index + '</td>' + 
								'<td contenteditable="true" onblur="updateCellValue(this,\''+ key +'\',1)" >'+ name + '</td>' + 
								'<td contenteditable="true" onblur="updateCellValue(this,\''+ key +'\',2)">' + id + '</td>' +
								'<td contenteditable="true" onblur="updateCellValue(this,\''+ key +'\',3)">' + birthDay+ '</td>' +
								'<td contenteditable="true" onblur="updateCellValue(this,\''+ key +'\',4)">' + cgpa + '</td>' + 
								'<td contenteditable="true" onblur="updateCellValue(this,\''+ key +'\',5)">'+ contactNumber + '</td>' +  
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
	
	updateModalTitle.innerHTML = "New User Registration";
	document.getElementById('inputName').value = '';
	document.getElementById('inputID').value = '';
	document.getElementById('inputCgpa').value = '';
	document.getElementById('inputBirthDay').value ='';
	document.getElementById('inputcontactNumber').value ='';

	editableOrNoneditable(0,"save");

	document.getElementById("saveConfirmation").addEventListener("click", saveUser);

}

function editableOrNoneditable (response,action){

	// response 1 means activate read-only
	document.getElementById('inputName').disabled = response;
	document.getElementById('inputID').disabled = response;
	document.getElementById('inputCgpa').disabled = response;
	document.getElementById('inputBirthDay').disabled = response;
	document.getElementById('inputcontactNumber').disabled = response;

	if(response){
		document.getElementById('cancel').style.visibility='hidden';
		document.getElementById('saveConfirmation').style.visibility='hidden';
		document.getElementById('updateConfirmation').style.visibility='hidden';
	}
	else{
		console.log(action);
		document.getElementById('cancel').style.visibility='visible';
		if(action === "save"){
			document.getElementById('saveConfirmation').style.visibility='visible';
			document.getElementById('updateConfirmation').style.visibility='collapse';
		}
		else if(action ==="update"){
			document.getElementById('saveConfirmation').style.visibility='collapse';
			document.getElementById('updateConfirmation').style.visibility='visible';
		}

	}

}


function updateCellValue(elem,key,col){

	var updatedValue = elem.innerText; 
	console.log(elem,key,col);
	var users = JSON.parse(localStorage.getItem('users'));
	var keys = Object.keys(users[0]);
	console.log(keys);
	var propName = keys[col];
	for(var i = 0; i < users.length; i++){
		if(users[i].key == key){
			users[i][propName] = updatedValue;
			break;
		}
	}
	localStorage.setItem('users',JSON.stringify(users));
	fetchUsers();

}



//onclick="punk(event,\''+ key +'\')"

// var cIndex,rIndex,editEvent;

// function punk(event,key){

// 	cIndex = event.target.cellIndex;
// 	rIndex = event.target.parentNode.rowIndex;
// 	editEvent = event.target;
// 	event.stopPropagation();

// }

// window.onclick = function(){
// 	updateCellValue(editEvent.innerText);
// }

// function updateCellValue(updatedValue){
	// console.log(updatedValue);
	// var users = JSON.parse(localStorage.getItem('users'));
	// var keys = Object.keys(users[0]);
	// var propName = keys[cIndex];
	// console.log(propName);
	// users[rIndex-1][propName] = updatedValue;
	// console.log(users[rIndex-1]);
	// localStorage.setItem('users',JSON.stringify(users));
	// fetchUsers();
// }
