// returns different object
function A(){

}
function B(){

}

let a = new A;
let b = new B;

alert(a == b);

// making them to refer to same object 
let obj = {};
function A(){
    return obj;
}

function B(){
    return obj;
}

let a = new A;
let b = new B;

alert(a == b);

// calculator using constructor 
function Calculator(){
    
    this.read = function (){
        this.a = +prompt('a?',0);
        this.b = +prompt('b?',0);
    }
    this.sum = function (){
        return this.a + this.b;
    }
    this.mul = function (){
        return this.a * this.b;
    }
    
}

let calculator = new Calculator();

calculator.read();

console.log( calculator.sum() );
console.log( calculator.mul() );

// create a accumulator
function Accumulator(startingValue){
    this.value =  startingValue;
    this.read = function (){
        this.value += +prompt('How much you want ot add?',0);
    }
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);

//
function Calculator() {
    
    let methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
  
      if (!methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return methods[op](a, b);
    }
  
    this.addMethod = function(name, func) {
      methods[name] = func;
    }
}


let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 + 3");
console.log( result ); 
