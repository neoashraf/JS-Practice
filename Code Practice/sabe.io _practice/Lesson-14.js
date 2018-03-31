// timeout
// 
function sayHello(){
	console.log("Hello!");
}
var timeout = setTimeout(sayHello,2*1000);

// Clear 
// So what if we change our mind about running that function in the future? We can clear it using the clearTimeout function.
function sayHello(){
	console.log("Hello!");
}
var timeout = setTimeout(sayHello,5*1000);
clearTimeout(timeout);

// set Interval
// Intervals are a simpler way of making code repeat over and over again, with a set amount of time in between, the interval time. You can think of intervals as basically timeouts that call themselves at the end to continue the cycle.
// Let's create an interval using setInterval to build a basic timer:

var seconds = 0;

function printTime(){
	seconds++;
	console.log("Seconds elapsed: " + seconds);
}

var interval = setInterval(printTime,1000);

// clear Interval

var seconds = 0;

function printTime(){
	seconds++;
	console.log("Seconds elapsed: " + seconds);
	if(seconds == 10){
		console.log("10 seconds has elapsed!")
		clearInterval(interval);
	}
}

var interval = setInterval(printTime,1000);
