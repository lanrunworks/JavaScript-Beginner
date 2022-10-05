'use strict';

const answer = parseInt(window.prompt('数字を入力してね'));
console.log('入力した値：' + answer);
if (Number.isNaN(answer)) {

    console.log('数字を入力してください');

} else {

    for (let i = 0; i < answer; i++) {
        if (i % 2 == 0) {
            console.log('+');
        } else {
            console.log('-');
        }
    };

};