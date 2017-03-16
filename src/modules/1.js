'use strict';

var i = 999999;
(function () {
    // Let will create a block scope. Babel will rename it as a new variable (_i)
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }

    // Using const babel will just create a var variable
    var j = 3;

    // i will have the value of the upper 
    console.log(i);
})();
console.log('after loop', i);