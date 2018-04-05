// this example
let user = {
    name: "John",
    go: function () {
        alert(this.name)
    }
}

user.go() // John

// target is to access user via this 
function makeUser() { // just a function not a method 
    return {
        name: "John",
        ref: this
    };
};

let user = makeUser();
alert(user.ref.name); // error  // user.ref retuens undefined(this)  

// solution 
function makeUser() {
    return {
        name: "Ashraf",
        ref() {
            return this;
        }
    }
}

let user = makeUser();

console.log(user.ref().name); // to get a this that references to the user object, we have to call a method of user


// calculator 
let calculator = {

    read(){
        this.a = +prompt('a?',0);
        this.b = +prompt('b?',0);     
    },
    sum(){
        return this.a + this.b ;
    },
    mul(){
        return this.a * this.b ;
    }
};

calculator.read();
console.log(calculator.a,calculator.b);
console.log("Sum = " + calculator.sum());
console.log("Mul = " + calculator.mul());

// chaining of function call
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      console.log( this.step );
    }
  };

  ladder.up().up().down().showStep();
