// AND

let x = 10;
let y = 20;
let z = 30;

console.log(x < y && y < z);
console.log(x > y && y > z);

//output: 
// true 
// false

//OR

let a = "Hello";
let b = "World";
let c = "Goodbye";

console.log( a === b || a === c); // false
console.log(a === b || b === c); //false
console.log(a === b || b === b); //true

//NOT

let isSunny = true;
let isRainy = false;
console.log(!isSunny); // false
console.log(!isRainy); // true

console.log(!(isSunny && isRainy)); // true
console.log(isSunny || isRainy); //true


