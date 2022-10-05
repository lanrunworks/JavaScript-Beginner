/*
    p
    - 

    文
*/
// 新しいJavaScriptを実行するモード
'use strict'

// const number = Math.floor(Math.random() * 6);
let number = Math.floor(Math.random() * 6);

const answer = parseInt(window.prompt('数字あてゲーム。0~5の数字を入力してね。'));

let message;

// number = 1;

if (answer === number) {
    message = 'あたり'
} else {
    message = 'はずれ'
};