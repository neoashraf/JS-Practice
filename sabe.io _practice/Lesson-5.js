// Arithmatic operators

//
var x = 7;
x += 8;
console.log(x);

// order of operations 
var x = (5*3) + 10/2;
console.log(x);

// Math properties
// we can access different mathathematical constants using math properites
var pi = Math.PI;
console.log(pi);

// 
var euler = Math.E;
console.log(euler);

// Math methods

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}
var random = randomBetween(5, 25);
console.log("The value of random is " + random + ".");



