/*******************************************************************************
Write a function `alternatingMap` that accepts an array and two callbacks as
arguments. The function should return a new array containing the results of passing
the original elements into the callbacks in an alternating fashion.

In other words,
    - the first element should be passed to callback 1
    - the second element should be passed to callback 2
    - the third element should be passed to callback 1
    - the fourth element should be passed to callback 2
    - ... and so on

Examples:

let triple = function (n) {
    return 3 * n;
};

let half = function (n) {
    return n / 2;
};
console.log(alternatingMap([7, 3, 2, 9, 8], triple, half));
// [ 21, 1.5, 6, 4.5, 24 ]


let yell = function (s) {
    return s.toUpperCase() + '!';
};

let whisper = function (s) {
    return '..' + s.toLowerCase() + '..';
};
console.log(alternatingMap(['hEy', 'EVERYone', 'whats', 'uP??'], yell, whisper));
// [ 'HEY!', '..everyone..', 'WHATS!', '..up??..' ]

*******************************************************************************/
debugger

let alternatingMap = function(array, cb1, cb2) {

let altArray = [];

    for(let i = 0; i < array.length - 1; i += 2){
        altArray[i] = cb1(array[i]);
        altArray[i + 1] = cb2(array[i + 1]);
    }
    if(array.length % 2 !== 0){
        let last = array.length - 1
        altArray[last] = cb1(array[last]);
    }

   return altArray; 
};



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = alternatingMap;
