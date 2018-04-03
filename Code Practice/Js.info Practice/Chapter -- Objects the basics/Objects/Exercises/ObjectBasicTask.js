let user = {};
user.name = "Jhon";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);

// Check for emptyness
let schedule = {};
schedule["08:30"] = "get up";
console.log(isEmpty(schedule));

function isEmpty(schedule){
    for(let key in schedule){
        return false;
    }
    return true;
}

// constant object
const user ={
    name : "John"
};

user.name ="Pete";
console.log(user);
user = "111";   // can not use the user as another variable  (Shows TypeError)


// Some arithmatic  opeerations on object 

// Sum
let salaries ={
    Jhon : 100,
    Ann : 160,
    Pete : 100
};

console.log(performSum(salaries));

function performSum(salaries){
    let totalSalary = 0;
    for(let key in salaries){
        totalSalary += salaries[key];
    }
    return totalSalary;
}

// Multiply
let menu ={
    width : 200,
    height : 300,
    title : "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(menu){
    for(let key in menu){
        if(typeof(menu[key]) === "number"){
            menu[key] *= 2;
        }
    }
}

console.log(menu);

