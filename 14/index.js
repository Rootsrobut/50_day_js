let str = "Hello, JavaScript!";

// charAt
console.log(str.charAt(0)); // "H"

// charCodeAt
console.log(str.charCodeAt(0)); // 72 (Unicode of "H")

// concat
console.log(str.concat(" How are you?")); // "Hello, JavaScript! How are you?"

// includes
console.log(str.includes("JavaScript")); // true

// endsWith
console.log(str.endsWith("!")); // true

// indexOf
console.log(str.indexOf("JavaScript")); // 7

// lastIndexOf
console.log(str.lastIndexOf("o")); // 4

// match
console.log(str.match(/Java/)); // ["Java"]

// matchAll
const matches = str.matchAll(/o/g);
for (const match of matches) {
    console.log(match); // Array of matches with index and groups
}

// repeat
console.log("Hi! ".repeat(3)); // "Hi! Hi! Hi! "

// replace
console.log(str.replace("JavaScript", "World")); // "Hello, World!"

// replaceAll
console.log("Apple, Apple".replaceAll("Apple", "Orange")); // "Orange, Orange"

// search
console.log(str.search(/JavaScript/)); // 7

// slice
console.log(str.slice(0, 5)); // "Hello"

// split
console.log(str.split(", ")); // ["Hello", "JavaScript!"]

// startsWith
console.log(str.startsWith("Hello")); // true

// substring
console.log(str.substring(0, 5)); // "Hello"

// toLowerCase
console.log(str.toLowerCase()); // "hello, javascript!"

// toUpperCase
console.log(str.toUpperCase()); // "HELLO, JAVASCRIPT!"

// trim
let paddedStr = "   Hello!   ";
console.log(paddedStr.trim()); // "Hello!"

// trimStart
console.log(paddedStr.trimStart()); // "Hello!   "

// trimEnd
console.log(paddedStr.trimEnd()); // "   Hello!"