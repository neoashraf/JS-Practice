// Date
var date = new Date();
console.log(date);

// Date String
var date = new Date("February 12, 2018");
console.log(date);

// Unix time
var date = new Date(1500000000000);
console.log(date);

// Multiple Parameters
var date = new Date(2018, 2, 13, 4, 45, 23,0);
console.log(date);

// Manipulating the dates
var date = new Date();
console.log("Date: " + date);
console.log("getDate(): " + date.getDate());
console.log("getDay(): " + date.getDay());
console.log("getMonth(): " + date.getMonth());
console.log("getFullYear(): " + date.getFullYear());
console.log("getHours(): " + date.getHours());
console.log("getMinutes(): " + date.getMinutes());
console.log("getSeconds(): " + date.getSeconds());
console.log("getMilliseconds(): " + date.getMilliseconds());
console.log("getTime(): " + date.getTime());

