'use strict';

document.getElementById('form').onsubmit = function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const element = document.querySelector('[name="elebox"]:checked').value;
    window.alert('入力された名前は「' + name + '」、\n選択された属性は「' + element + '」。')
};
