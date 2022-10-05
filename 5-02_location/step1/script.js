/*
    p
    - 

    文
*/
// 新しいJavaScriptを実行するモード
'use strict';

document.getElementById('form').select.onchange = function () {
    location.href = document.getElementById('form').select.value;
}