// let map = new Map();
// map.set("1", "abhishek");
// map.set(1, "code");
// map.set(true, "bool1");
// map.set("2", "ajay");
// console.log("value1= " + map.get(1));
// console.log("value1= " + map.get("1"));
// console.log("key is present= " + map.has(3));
// console.log("key is present= " + map.has("2"));
// console.log("Size= " + map.size);
// console.log("delet value = " + map.delete(1));
// console.log("New Size= " + map.size);

let ageMapping = new Map();
ageMapping.set("rap", 40);
ageMapping.set("abi", 25);
ageMapping.set("ramos", 30);
// iterate map keys
for (let key of ageMapping.keys()) {
  console.log("Map Keys= " + key);
}
// iterate map values
for (let value of ageMapping.values()) {
  console.log("Map Values= " + value);
}
// iterate map entries
for (let entry of ageMapping.entries()) {
  console.log(entry[0], entry[1]);
}
