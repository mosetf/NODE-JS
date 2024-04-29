let a = 35;
console.log(typeof a);

a = "Go hard or go home";
console.log(typeof a);

a = true;
console.log(typeof a);

a = undefined;
console.log(typeof a)

/**
 * ---OUTPUT---
 * number
 * string
 * boolean
 * undefined
 */

//---objects---//
let company = {
    Name: "Nats",
    Address: "Noida",
    Contact: "+254 765432891",
    Emaiil: "null@gmail.com"
};

console.log("information of variable Company: ", company);

console.log("Type of variable company: ", typeof company);

//---   functions   ---//

function multiply(num1, num2) {
    return num1 * num2;
}

let x = 23;
let y = 2;

console.log("multiplication of", x, "and", y, "is", multiply(x,y))