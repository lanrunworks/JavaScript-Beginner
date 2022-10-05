'use strict';
const date = new Date();
const day = date.getDay();
if (day == 0 || day == 6) {
    document.writeln("今日は休日です");
} else {
    document.writeln("今日は平日です");
};