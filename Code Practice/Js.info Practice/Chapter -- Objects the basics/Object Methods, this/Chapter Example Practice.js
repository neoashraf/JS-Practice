// assign function as a property of the object
let user = {
    name: "John",
    age: 30
  };

  user.sayHello = function(){
      console.log("Hello Dear!");
  }

  user.sayHello();

//pre-declared function as a method(the function that is a property of a object)
let user = {
    name: "John",
    age: 30
  };

function sayHi(){
    console.log("Hello!");
}

user.sayHi = sayHi; 
sayHi();    // function
user.sayHi(); //method

// Method as a property
let user = {
    sayHi: function(){
        console.log("Hello");
    }
};
user.sayHi();

// Method shorthand
let user = {
    sayHi(){
        console.log("Hello");
    }
};
user.sayHi();

//this 
let user = {
    name : "Jhon",
    age :  30 ,
    sayHi(){
        console.log(this.name);
    }
};
user.sayHi();
//  referencing it via the outer variable
let user = {
    name : "Jhon",
    age :  30 ,
    sayHi(){
        console.log(user.name);
    }
};
user.sayHi();

//  referencing it via the outer variable   
let user = {
    name : "Jhon",
    age :  30 ,
    sayHi(){
        console.log(user.name);   //error  because it refers to the outer user
    }
};
user = null;
user.sayHi();

// necessity of this
let user = {
    name : "Jhon",
    age :  30 ,
    sayHi(){
        console.log(this.name);    // correct output this 
    }
};
user = null;
user.sayHi();

//  referencing it via the outer variable 
let user = {
    name : "Jhon",
    age :  30 ,
    sayHi(){
        console.log(user.name);   // error -- user became null in the global scope so the sayHi property is not available
    }
};
user.sayHi();
let admin = user;
user = null;
admin.sayHi();  

//  so use this
let user = {
    name : "Jhon",
    age :  30 ,
    sayHi(){
        console.log(this.name); 
    }
};
user.sayHi();
let admin = user;
user = null;
admin.sayHi(); 

