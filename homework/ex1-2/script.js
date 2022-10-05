'use strict';
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
document.writeln("今は<span id='hour'></span>時<span id='minute'></span>分です");
document.getElementById('hour').textContent = hours;
document.getElementById('minute').textContent = minutes;