//map
var map = new Map();
map.set("red", "apple");
map.set("blue", "blueberry");
map.set("green","pear");
console.log(map);

console.log(map.get("blue"));

map.delete("red");
console.log(map);

console.log(map.has("red"));
console.log(map.has("black"));

console.log(map.size);

map.clear();
console.log(map);
