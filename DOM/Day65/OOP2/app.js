let arr = [1,2,3];

console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);
// console.log(arr.__proto__.__proto__.__proto__.__proto__);

console.log("qwerty");
console.log("qwerty".__proto__);
console.log("qwerty".__proto__.__proto__);
console.log("qwerty".__proto__.__proto__.__proto__);
// console.log("qwerty".__proto__.__proto__.__proto__.__proto__);

console.log(Array.prototype)
console.log(arr.hasOwnProperty(1))