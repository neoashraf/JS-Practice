class Pet{

}
var pet = new Pet();
console.log(pet);

// Contructor
class Pet{
	constructor(name,weight,cost){
		this.name = name;
		this.weight = weight;
		this.cost = cost;
	}
    getInfo() {
        return "Hi, my name is " + this.name + ". I weigh " + this.weight + " pounds and cost $" + this.price + ".";
    }
}
var pet1 = new Pet("Orio",14,156);
console.log(pet1.getInfo());
var pet2 = new Pet("Dashy",15,131);
console.log(pet2.getInfo());
var pet3 = new Pet("Ninja",12,167);
console.log(pet3.getInfo());

// one pet can be a dog and another can be a cat but the Pet class never differenciates it.
// Dog and cat can have their specific propeties.
// For cat-specific or dog specific functions we can create extra classes like Dog , Cat
// The common properties of dog and cat as pet can be inherited from the Pet class.

// Class Inheritance

class Pet{
	constructor(name,weight,cost){
		this.name = name;
		this.weight = weight;
		this.cost = cost;
	}
    getInfo() {
        return "Hi, my name is " + this.name + ". I weigh " + this.weight + " pounds and cost $" + this.cost + ".";
    }
}

// As Dog and Cat extends Pet they inherits the properties
class Dog extends Pet{
	bark(){
		console.log("BARK BARK.");
	}
}

class Cat extends Pet{
	mew(){
		console.log("MEW MEW.");
	}
}

var dog = new Dog("Cooper",56,190);
console.log(dog.getInfo());
dog.bark();
var cat = new Cat("Cope",19,167);
console.log(cat.getInfo());
cat.mew();
 
// Function Overloading  and super

// super keyword. This is simply manually calling the constructor of the class that Cat is inheriting from, in this case, the Pet class.

class Pet{
	constructor(name,weight,cost){
		this.name = name;
		this.weight = weight;
		this.cost = cost;
	}
    getInfo() {
        return "Hi, my name is " + this.name + ". I weigh " + this.weight + " pounds and cost $" + this.cost + ".";
    }
}

class Cat extends Pet{
	constructor(name,weight,cost,brand){
		super(name,weight,cost);  	
 		this.brand = brand;
	}
	getFavoriteBrand(){
		return this.brand;
	}
	// over-riding the getInfo of Pet
	getInfo() {
        return "Hi, I am a cat  named " + this.name + ". I weigh " + this.weight + " pounds and cost $" + this.cost + ".";
    }
}

var honey = new Cat("Honey",23,345,"Purina");
console.log(honey.getInfo());
console.log(honey.getFavoriteBrand());


