// Array

// creation
var drinks = ["water", "juice", "milk", "soda"];

// Retrieval
console.log(drinks[0]);

// Reassignment
drinks[3] = "coffee";
console.log(drinks);



// Array Methods


// sort
var drinks = ["water", "juice", "milk", "soda"];
drinks.sort();
console.log(drinks);

// push
var drinks = ["water", "juice", "milk", "soda"];
drinks.push("tea");
console.log(drinks);

//pop
var drinks = ["water", "juice", "milk", "soda"];
drinks.pop();
console.log(drinks);

//shift
//The shift method removes the first element of an array and then returns that element to you.
var drinks = ["water", "juice", "milk", "soda"];
var drinks2 = drinks.shift();
console.log(drinks);
console.log(drinks2);

//unshift
//The unshift method adds elements to the beginning of the array and returns the new array's length to you.
var drinks = ["water", "juice", "milk", "soda"];
drinks.unshift("cola","coffee");
console.log(drinks);

//concat
var drinks1 = ["milk", "soda"];
var drinks2 = ["water", "juice"];
var drinks = drinks1.concat(drinks2);
console.log(drinks);

//slice

//it copies a segment of the mother array
//if only one parameter is given (index-->end) is copied
var colors = ["purple", "red", "white", "blue", "gold"];
var slice = colors.slice(1);
console.log(slice);

// If you provide a second parameter, you can specify the number of elements to copy from the array starting from that index.
var colors = ["purple", "red", "white", "blue", "gold"];
var slice = colors.slice(1, 4);
console.log(slice);


//splice

//it removes a segment of the mother array
//if only one parameter is given (index-->end) is removed
var colors = ["purple", "red", "white", "blue", "gold"];
colors.splice(3);
console.log(colors);

var x = colors.splice(3);
console.log(colors);
console.log(x);

// If you provide a second parameter, you can specify the number of elements to remove from the array starting from that index.
var colors = ["purple", "red", "white", "blue", "gold"];
colors.splice(3,1);
console.log(colors);

//Map
// The map function creates a new array(here-intros) from an existing one(here - names) after calling a function on every element.
var names = ["Bill", "Kelly", "John"];
var intros = names.map(function(name){  // through name function gets arguments from names
	return "My name is " + name;
});
console.log(intros);

//Filter
//The filter method is useful for, well, filtering out elements you don't want from an array to form a new one.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

var odd = numbers.filter(function(number){
	return number%2;   // we remove the even ones.
})
console.log(odd);

//Reduce

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

var total = numbers.reduce(function(number){
	return total + number;
});
console.log(total);

