console.clear()
const assert = require("assert");

let y = 2;
let x = 5;

try {
    //checking condition
    assert (x == y);
}
catch{
    //error output
    console.log(
        `${x} is not equal to ${y}`
    );
}