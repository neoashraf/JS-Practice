//Set
var set = new Set();
set.add("F");
set.add("F");
set.add("D");
set.add("C");
console.log(set);

set.delete("F");
console.log(set);

console.log(set.has("F"));
console.log(set.has("C"));

console.log(set.size);

set.clear();
console.log(set);
