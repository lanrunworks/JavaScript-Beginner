'use strict';

const nums = [];

for (let i = 0; i < 3; i++) {

    let answer = parseInt(window.prompt('数字を入力してね'));
    nums[i] = answer;
    if (Number.isNaN(answer)) {
        document.writeln((i + 1) + 'つ目は数字ではありませんでした。<br>数字を入力してください。<br>');
    } else { };
};
let max = Math.max(...nums);
let min = Math.min(...nums);

document.writeln('最大値は'+max+'です。<br>');
document.writeln('最小値は'+min+'です。<br>');
