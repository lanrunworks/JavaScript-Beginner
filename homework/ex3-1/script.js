'use strict';
const now = new Date();
const hour = now.getHours();
const minute = now.getMinutes();
if (hour >= 9 && hour <= 16 && minute >= 0 && minute <= 59) {
    document.writeln("営業時間内です。");
} else {
    document.writeln("営業時間外です。");
};