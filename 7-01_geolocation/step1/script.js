/*
    p
    - 

    文
*/
// 新しいJavaScriptを実行するモード
'use strict';
//位置情報 緯度経度
function success(pos) {
    console.log(pos);
}
//エラーコード関数
function fail(error) {
    alert('位置情報の取得に失敗しました。エラーコード：' + error.code);
    console.log(error);
}
//位置情報取得メソッド
navigator.geolocation.getCurrentPosition(success, fail);