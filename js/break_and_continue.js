"use strict";

var skippedNum = prompt("Hello! Give me an odd number between 1 and 50 please!")
console.log("You have chosen to skip " + skippedNum)
for (var a = 0; a < 51; a++) {
    if (a == skippedNum) {
        console.log("Yike! Skipping " + skippedNum)
        continue;
    }
    if (a % 2 != 0) {
    console.log("Here's an odd number; " + a)
}}