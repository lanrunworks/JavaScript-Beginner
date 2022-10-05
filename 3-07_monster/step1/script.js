/*
    p
    - 

    文
*/
// 新しいJavaScriptを実行するモード
'use strict'

let enemy = 100;

window.alert('戦闘開始');

while (enemy > 0) {
    const attack = Math.floor(Math.random() * 30) + 1;

    console.log('モンスターに' + attack + 'のダメージ');
    enemy = enemy - attack;
}

console.log('モンスターを倒しました');