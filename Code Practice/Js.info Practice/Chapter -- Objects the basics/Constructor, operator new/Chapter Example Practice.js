// create object using new
function User(name){
    this.name = name,
    this.isAdmin = "false"
}

let user = new User("Ashraf");
console.log(user.name);

// shortHand form
let user = new function(){
    this.name = "Ashraf",
    this.isAdmin = false
}
console.log(user);

// return from constructor  -- constructor returns this by default when call with new, if a return (that returns a object) statement is given the default return is over-written
function selectMovie(){
    this.movieName = "Tourist"
    return {movieName : "Gladialor"}
}

let movieTonight = new selectMovie();
console.log(movieTonight.movieName);

// methods in constructor
function selectMovie(){
    this.movieName = "Tourist"
    this.watchingTheMovie =  function (){
        console.log(`Now watching ${this.movieName}`);
    }
}

let movieTonight = new selectMovie();
movieTonight.watchingTheMovie();

