'use strict';

const nums = [];
let min = 0;
for (let i = 0; i < 2; i++) {

    let answer = parseInt(window.prompt('数字を入力してね'));
    nums[i] = answer;
    if (Number.isNaN(answer)) {
        document.writeln((i + 1) + 'つ目は数字ではありませんでした。' + '<br>');
    } else {
        document.writeln('入力された値' + (i + 1) + '：' + answer + '<br>');
    };
};

function compareNums(num1, num2) {
    if (num1 - num2 > 0) {
        return num2;
    } else {
        return num1;
    };
};

document.writeln('小さい方の値は' + compareNums(nums[0], nums[1]) + 'です。');