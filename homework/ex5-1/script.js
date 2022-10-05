'use strict';

let random = Math.floor(Math.random() * 6);
console.log(random);

const animals = [];
animals[0] = 'ゾウ';
animals[1] = 'ライオン';
animals[2] = 'シマウマ';
animals[3] = 'トラ';
animals[4] = 'ツチノコ';
animals[5] = 'ヤギ';

document.getElementById('msg').textContent = animals[random] + 'を表示しています。';