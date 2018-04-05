let obj1 = {
    num : 4
};

let obj2 = {
    num : 5
};
let obj = obj1 + obj2;

console.log(+obj);

let num = Number(obj1);
console.log(num);

let user= {
    name : "John",
    money : 1000,
    [Symbol.toPrimitive](hint){
        alert(`hint:"${hint}"`);
        return hint == "string" ? `name : ${this.name}`: `money : ${this.name}`;
    }
};

alert(user);
alert(+user);
alert(user + 500);

let user = {
    name: "John",
    money: 1000,
  
    // for hint="string"
    toString() {
      return `{name: "${this.name}"}`;   // ${} is part string lateral to get tha value
    },
  
    // for hint="number" or "default"
    valueOf() {
      return this.money;
    }
  
  };
  
  alert(user); // toString -> {name: "John"}
  alert(+user); // valueOf -> 1000
  alert(user + 500); // valueOf -> 1500

