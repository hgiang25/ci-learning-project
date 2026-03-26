const sum = require("./app");

if (sum(2, 3) !== 6) {
  throw new Error("Test failed!");
}

console.log("Test passed!");
