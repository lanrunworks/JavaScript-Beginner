'use strict';

const nums = [];

for (let i = 0; i < 3; i++) {

    let answer = parseInt(window.prompt('数字を入力してね'));
    nums[i] = answer;
    if (Number.isNaN(answer)) {
        console.log((i + 1) + 'つ目は数字ではありませんでした。');
    } else {
        console.log((i + 1) + 'つ目：' + answer);
    };
};

if (Number.isNaN(nums[0], nums[1], nums[2])) {
    console.log('数字を入力してください。');
} else {
    if (nums[0] == nums[1] && nums[0] !== nums[2]) {
        console.log('2つの値は等しい');
    } else if (nums[0] == nums[2] && nums[0] !== nums[1]) {
        console.log('2つの値は等しい');
    } else if (nums[1] == nums[2] && nums[0] !== nums[1]) {
        console.log('2つの値は等しい');
    } else if (nums[0] == nums[1] && nums[0] == nums[2]) {
        console.log('3つの値は等しい');
    } else {
        console.log('等しい値がありません');
    };
};