"use strict";

var car = {};
var myFeatures = ["GPS", "Bluetooth", "WIFI"]
console.log(typeof car)

car.make = "Honda";

car["model"] = "Civic";
car.year = 2017;
car.features = myFeatures

car.owner = {firstName: "Josh", lastName: "Taylor", birthDay: "01/26/1997"}
console.log(car)