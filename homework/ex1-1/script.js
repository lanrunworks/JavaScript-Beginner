'use strict';
const now = new Date();
const year = now.getFullYear();
document.writeln("今年は<span id='time'></span>年です");
document.getElementById('time').textContent = year;