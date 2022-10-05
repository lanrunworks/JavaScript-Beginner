/*
    p119
    3-9 FizzBuzz

    順番に数を数えてコンソールへ出力
        ・3でも5でも割り切れる場合は「FizzBuzz!」
        ・それ以外で、3で割り切れる場合は「Fizz!」
        ・それ以外で、5で割り切れる場合は「Buzz!」
        ・それ以外では数字を出力
*/
// 新しいJavaScriptを実行するモード
'use strict';

function fizzbuzz(num) {
    // 条件によって処理を変える
    if (num % 3 === 0 && num % 5 === 0) {
        // 3でも5でも割り切れる
        return 'fizzbuzz!';
    }
    else if (num % 3 === 0) {
        // 3で割り切れる
        return 'fizz';
    }
    else if (num % 5 === 0) {
        // 5で割り切れる
        return 'buzz!';
    }
    else {
        // 3でも5でも割り切れない
        return num;
    }
}

// console.log(fizzbuzz(1));
// くり返し用の変数
let i = 1;

// 30回繰り返す
while (i <= 30) {
    console.log(fizzbuzz(i));

    // くり返し用の変数を+1する
    i += 1;
}