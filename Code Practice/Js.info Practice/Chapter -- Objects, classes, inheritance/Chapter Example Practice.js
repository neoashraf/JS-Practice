let user = {
	id: 1,
	"a b": 23,
};

user.name = "xXx";
user["a b c"] = 12;
user["aaa"] = 23;
console.log(user);
console.log(user["a b c"]);
console.log(user[aaa]);

let user = {};
let key = "a b c";
user.key = "xXx";
console.log(user.key);

let user = {};
let key = "a b c";
user[key] = "xXx";
console.log(user[key]);

let user = {
	name: "John",
	age: 30
};

let key = prompt("What do you want to know about the user?", "name");
// access by variable
console.log(user[key]); // John (if enter "name")

// Class is not hoisted but function is 
class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
		console.log(this.height);
		console.log(this.width);
	}
}
var smallRectangle = new Rectangle(5, 4);


// Referance error
var smallRectangle = new Rectangle(5, 4);

// Object property check
var p = new Object();
p.name = "asd";
p.city = undefined;
console.log(p.name);
console.log(p.cellNum === undefined); // returns true as cellNum is not in the object
console.log("city" in p); // for property named city check against undefined will not work  

// for in loop in object
var user = {
	name: "Ashraf",
	city: "Dhaka",
	cell: "1134"
};

for (key in user) { //key is a user defined variable
	console.log(key, '->', user[key]); // . operator will return undefined
}

//  Integer properties are sorted
let codes = {
	"49": "Germany",
	"41": "Switzerland",
	"44": "Great Britain",
	"1": "USA"
};

for (let code in codes) { //code is a user defined variable
	console.log(code); //1, 41, 44, 49
}

// Here the object is orderded  as the input
let codes = {
	"+49": "Germany",
	"+41": "Switzerland",
	"+44": "Great Britain",
	"+1": "USA"
};

for (let code in codes) {
	console.log(+code); // 49, 41, 44, 1
}

// Copy object [Reference is copied]

let user = {
	name: "John",
	age: 30,
};
// the new empty object
let clone = user;
// now clone is a fully independant clone
clone.name = "Pete"; // changed the data in it
console.log(clone);
console.log(user.name); // still John in the original object

// Clone a object using loop

let user = {
	name: "John",
	age: 30
};
let clone = {}; // the new empty object
// let's copy all user properties into it
for (key in user) {
	clone[key] = user[key];
}
// now clone is a fully independant clone
clone.name = "Pete"; // changed the data in it
console.log(user.name); // still John in the original object


// Clone object using Object.assign

let user = {
	name: "John",
	age: 30
};
let clone = {}; // the new empty object
// let's copy all user properties into it  
Object.assign(clone, user);
// now clone is a fully independant clone
console.log(clone); //view the datas in it
clone.name = "Pete"; // changed the data in it
console.log(clone); //view the datas in it
console.log(user.name); // still John in the original object


// Use Object.assign differently

let user = {
	name: "John",
	age: 30
};
let permissions1 = {
	canView: true
};
let permissions2 = {
	canEdit: true
};
// the new empty object
let clone = Object.assign({}, user, permissions1, permissions2); // assigned along-side definition   , we are assigning property from multiple object
// now clone is a fully independant clone
clone.name = "Pete"; // changed the data in it
console.log(clone);
console.log(user.name); // still John in the original object


// copy object that has another object as property

let user = {
	name: "John",
	age: 30,
	permissions1: {
		canView: true
	}
};
// the new empty object
let clone = user;
// now clone is a fully independant clone
clone.name = "Pete"; // changed the data in it
console.log(clone);
console.log(user.name); // still John in the original object

// clone object that has another object as property

let user = {
	name: "John",
	age: 30,
	sizes: {
		height: 182,
		width: 50
	}
};
// the new empty object
let clone = Object.assign({}, user); // assigned along-side definition 
// now clone is a fully independant clone
clone.name = "Pete"; // changed the data in it
console.log(clone);
console.log(user.name); // still John in the original object


// clone object and change the properties of the child object 

let user = {
	name: "John",
	sizes: {
		height: 182,
		width: 50
	}
};
let clone = Object.assign({}, user);     
console.log(user.sizes === clone.sizes); // true, same object    // reference is copied
// user and clone share sizes
user.sizes.width++; // change a property from one place
clone.sizes.length = 145;
clone.name = "Pete"; // changed the data in it
console.log(user);   
console.log(clone);   

// clone the object 
var objects = [{ 'a': 1 }, { 'b': 2 }];			
var deep = _.cloneDeep(objects);     // have to add lodash script
console.log(deep[0] === objects[0]);
// => false

