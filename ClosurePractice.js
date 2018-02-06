// These are not closure example

function sayHello(name){
	var text = 'Hello ' + name;
	function say(){
		console.log(text);
	} 
	say();
}
sayHello('Joe');


function sayHello(name){
	var text = 'Hello ' + name;
	var say = function (){			// here function is initailized and this function is a anonymoius function
		console.log(text);
	} 
	say();
}
sayHello('Joe');



// notes about  JS closure

//In JavaScript, if you use the function keyword inside another function, you are creating a closure.

//The magic is that in JavaScript a function reference also has a secret reference to the closure it was created in — similar to how delegates are a method pointer plus a secret reference to an object.


// Closure examples :

// Intro
function sayHello(name){

	function say1(){
	 	console.log("Hey " + name);
	}
	//say1();
	return say1;
	console.log("sayHello is done");
}

var say = sayHello("Joe");  // say2  gets a referense to the inner functions
say();                      // now say2 will execute the say()
say();

// Closure with anonymoius functions

function sayHello(name){
	var text = 'Hello ' + name;
	var say = function (){			// here function is initailized and this function is a anonymoius function
		console.log(text);
	} 
	return say;						// must return 
}
var say_ = sayHello('Joe');
say_();


//local variables are kept by reference

function a(){
	var num = 42;
	num++;			//num is increamented
	function b() {
		// body...
		console.log(num);
	}
	return b;
	
}

var x = a();
x();

//One variation 

function a(){
	var num = 42;
	
	function b() {
		// body...
		console.log(num);
	}
	console.log("xxxxxxx");
	return b;				//num is never increamented as function always returns
	num++;			
}

var x = a();
x();

//In JavaScript, whenever you declare a function inside another function, the inside function(s) is/are recreated again each time the outside function is called.

var gLogNumber, gIncreaseNumber, gSetNumber;
function setupSomeGlobals() {
  // Local variable that ends up within closure
  var num = 42;
  // Store some references to functions as global variables
  gLogNumber = function() { console.log(num); }
  gIncreaseNumber = function() { num++; }
  gSetNumber = function(x) { num = x; }
  // As the functions are global no need to return
}

setupSomeGlobals();
gIncreaseNumber();
gLogNumber(); // 43
gSetNumber(5);
gLogNumber(); // 5

var oldLog = gLogNumber;

setupSomeGlobals();
gLogNumber(); // 42

oldLog(); // 5
