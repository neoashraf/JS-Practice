let user = {
	id : 1,
	"a b" : 23,
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

