/*
    p90
    3-5 時間で異なるメッセージを表示する

    現在の日時を取得し、時間によって表示を切り替える
        19:00~20:59             : 30%OFF
        9:00~9:59、15:00~15:59  : お弁当を1個おまけ
        その他の時間             : お弁当を勧める
*/
// 新しいJavaScriptを実行するモード
'use strict';


// 現在の時間を取得
const hour = new Date().getHours();
// デバッグ用
// const hour = 19;
// const hour = 21;
// const hour = 9;
// const hour = 12;
// const hour = 15;
// デバッグ用はここまで


// 時間によって処理を変える
if(hour >= 19 && hour < 21){
    // 19:00~20:59
    window.alert('お弁当30%OFF');

}
else if(hour === 9 || hour === 15){
    // 9:00~9:59、15:00~15:59
    window.alert('お弁当1個買ったら1個おまけ！');

}
else{
    // その他の時間
    window.alert('お弁当はいかがですか');
}