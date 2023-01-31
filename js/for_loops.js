"use strict";
// console.log("TEST")
function showMultiplicationTable(x) {
    return (console.log("You chose to see the multiplication table for " + x) +
        console.log (x + " x 1 = " + (x * 1)) +
        console.log (x + " x 2 = " + (x * 2)) +
        console.log (x + " x 3 = " + (x * 3)) +
        console.log (x + " x 4 = " + (x * 4)) +
        console.log (x + " x 5 = " + (x * 5)) +
        console.log (x + " x 6 = " + (x * 6)) +
        console.log (x + " x 7 = " + (x * 7)) +
        console.log (x + " x 8 = " + (x * 8)) +
        console.log (x + " x 9 = " + (x * 9)) +
        console.log (x + " x 10 = " + (x * 10)))
}
for (var y = 0; y < 10; y++ ) {
    var random = Math.floor(Math.random() * (200 - 20) + 20)
    if (random % 2 !== 0) {
        console.log(random + " is odd!")
    } else {
        console.log(random + " is even!")
    }
}
for (var a = 1; a < 10; a++) {
    var string = "";
    for (var b = 1; b <= a; b++) {
        string += a;
}
    console.log(string)
}
for (var c = 100; c > 0; c -= 5) {
    console.log(c)
}

