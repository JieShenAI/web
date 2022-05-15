var Vehicle = function () {
    this.price = 1000;
};

var v = new Vehicle();
console.log(v.price);  // 1000

var car = function () {
    'use strict';
    this.price = 1001;
};

var c = new car();
console.log(c.price);  // 1000
// console.log(price);