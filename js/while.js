"use strict";
var x = 0
var y = 1
while (x < 16) {
    var y = y * 2
    console.log(y)
    x++
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("I have to sell " + allCones + " ice cream cones today before I can leave... Yikes.")
var soldCone = 0
do {
    var conesBought = Math.floor(Math.random() * 5) + 1;
    if (conesBought > (allCones - soldCone)) {
        console.log("Sorry! I only have " + (allCones - soldCone) + " left...")
        continue;
    }
    console.log("Sweet, you bought " + conesBought + " cones, thanks!")
    soldCone += conesBought
    console.log("I have " + (allCones - soldCone) + " Ice Cream cones left!")
    if ((allCones - soldCone) == 0) {
        console.log("FINALLY! I'm done!")
        alert("You're done for the day! Go home and don't think about ice cream!")
    }
} while (soldCone < allCones);


