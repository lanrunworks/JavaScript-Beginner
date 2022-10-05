/*
    p
    - 

    文
*/
// 新しいJavaScriptを実行するモード
'use strict'
let count = 0;

let enemy = 100;

window.alert('戦闘開始');

while (enemy > 0) {
    const attack = Math.floor(Math.random() * 30) + 1;

    console.log('モンスターに' + attack + 'のダメージ');
    enemy = enemy - attack;
    count++;
}

console.log(count + '回でモンスターを倒しました');