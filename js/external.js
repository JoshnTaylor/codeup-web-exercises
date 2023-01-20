"use strict";
console.log("Hello from external JavaScript!!");
alert("Welcome to my Website! :)");
var color = prompt("What is your favorite color?");
alert("Cool! I like the color " + color + " too! My favorite color is probably yellow, though.");
alert("Now for some word problems;");
var submittedAnswer = prompt("You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?");
var littleMermaid = 3 * 3;
var brotherBear = 5 * 3;
var hercules = 1 * 3;
var answer = littleMermaid+brotherBear+hercules;
if(submittedAnswer != answer) {
    alert("Ooops! That's wrong. The answer is really 27!")
} else {
    alert("That's right!")
};
var paymentAmountAnswer = prompt("Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.");
var googlePay = 400 * 6;
var amazonPay = 380 * 4;
var facebookPay = 350 * 10;
var paymentAmountRight = googlePay+amazonPay+facebookPay;
if(paymentAmountAnswer != paymentAmountRight) {
    alert("Nice try, but the right amount is actually; $" + paymentAmountRight)
} else {
    alert("Nailed it!");
};
var enrolledOrNotAnswer = confirm("Mary is looking for a class on Mondays and Fridays. She can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule. Provided that the class is Monday and Friday, with two available slots, will Mary be able to attend?");
if(enrolledOrNotAnswer == true) {
    alert("Nice! She totally can!")
} else {
    alert("Sorry, but she actually can enroll!");
};
alert("A product offer can be applied only if a person buys more than 2 items, and the offer has not expired (It's expiration date is 2022). Premium members do not need to buy a specific amount of products.");
var premiumMember = confirm("Are you a premium member?")
if(premiumMember == true) {
    alert("Nice! The product offer will be applied!")
} else {
    alert("Hmmm, alright let's see if we can still get you that offer.")
    var itemsBought = prompt("How many items did you buy?")
    if(itemsBought < 3) {
        alert("Sorry, that's not going to work. You need more than 2 items.")
    } else {
        alert("Sweet! You have enough items. Now let's see if the offer is expired...")
        var expired = prompt("What is the current year?")
        if(expired > 2022) {
            alert("Sorry! It's expired!")
        } else {
            alert("Nice! Here's your offer code: ajwefu3hajdcks4uga82r782r73ayar2re001-2")
        };
    };

};
