// object creation
var dog = {
    name: "Cooper",
    age: 3,
    bark: function () {
        console.log("BORK BORK");
    }
};

console.log(dog.name);
console.log(dog.age);
console.log(dog.bark());

// reassignment
dog.age = 4;
dog.name = "Cop";
console.log(dog.name);
console.log(dog.age);

// has a property or not
console.log(dog.hasOwnProperty("name"));
console.log(dog.hasOwnProperty("bark"));
console.log(dog.hasOwnProperty("wight"));

// prints the keys , values
console.log(Object.keys(dog));
console.log(Object.values(dog));

// print both key and values
console.log(Object.entries(dog));

