"use strict";
var character = 'mario';
console.log(character);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
});
var circ = function (diameter) {
    return diameter * Math.PI;
};
// console.log(area('hello'));
console.log(circ(7.5));
// let greet = () => {
//   console.log('hello')
// }
var greet;
// greet ="hello"
greet = function () {
    console.log('hello');
};
var add = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
var great = function (user) {
    console.log(user.name + " says hello");
};
var greater = function (user) {
    console.log(user.name + " says hello");
};
logDetails(39, 'Stella');
great({
    name: 'tony',
    uid: 50
});
