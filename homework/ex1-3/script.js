'use strict';
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
// }
// const random = getRandomInt(1,6);
const random = Math.floor(Math.random() * 6 + 1);
document.writeln("乱数の値は「<span id='random'></span>」となります");
document.getElementById('random').textContent = random;