const { chownSync } = require("fs");
const local = require("./locmod");
local.sayhello();
console.log("Today`s date is", local.currTime);
console.log("The company name is ", local.companyName, "co-oparation`s limited");