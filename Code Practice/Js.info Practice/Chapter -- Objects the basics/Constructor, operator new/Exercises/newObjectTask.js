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
