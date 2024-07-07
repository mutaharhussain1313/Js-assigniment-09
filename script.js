// Problem//
// const table = +prompt("enter the number");
// for (var i = 0; i < 11; i++) {
//     console.log(`${table} * ${i} = ${table * i}`);
// }

// Problem//
// var array = [];
// var start = 0;
// for (var i = 0; i < 5; i++) {
//     var get = +prompt("Please enter the value");
//     array.push(get);
// }
// var x = 0;
// for (var j = 0; j < 5; j++) {
//     x += array[j]
// }
// console.log(array);
// console.log(x);

// Problem//
var array = [];
for (var i = 0; i < 5; i++) {
    var num = +prompt("Please Enter the value");
    array.push(num);
}
var largestNumbers = array [0];
for (let j = 1; j < array.length; j++) {
    if (array[j] > largestNumberNum) {
      largestNum = array[j];
    }
}
console.log(array);
console.log(largestNumbers);
