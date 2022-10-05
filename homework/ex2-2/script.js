'use strict';
const date = new Date();
const hour = date.getHours();
if (hour>=0 || hour <= 11) {
    document.writeln("今は午前です");
} else {
    document.writeln("今は午後です");
};