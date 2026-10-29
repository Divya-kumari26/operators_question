// swap two numbers using bitwise xor

let a = 4;
let b = 7;

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log("a ="+ a);
console.log("b =" +b);

