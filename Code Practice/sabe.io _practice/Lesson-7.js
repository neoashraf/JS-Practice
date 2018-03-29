for(var i=1 ;i<=10;i++){
	console.log(i);
}


var i = 1;
while(i<=10){
	console.log(i);
	i++;
}

//  For in loop with array
var colors =["red","yellow","black"];
for(var i in colors)
	console.log(colors[i]);

//For in with object
var person = {
	name : 'Tom',
	weight: 67,
	age: 30
};

for(var i in person){
	console.log(person[i]);
}


