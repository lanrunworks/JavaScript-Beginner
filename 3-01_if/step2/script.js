/*
    p61
    3-1 確認ダイアログボックスを表示する

    確認ダイアログボックスを表示し、その結果によって
    コンソールへ出力する文字列を変更
*/
// 新しいJavaScriptを実行するモード
'use strict'

// 確認ダイアログボックスを表示し、
// その結果によって処理内容を変える
if(window.confirm('ゲームスタート！準備はいい？')){
    // 「OK」ボタン(true)のとき
    console.log('ゲームを開始します。');
}
else{
    // 「キャンセル」ボタン(false)のとき
    console.log('ゲームを終了します。');
}

/*
    writelnメソッドのサンプル
    書式:document.writeln(出力したい要素、文字列);
*/
// 文字列
document.writeln('今は');
// 要素
document.writeln('<br><hr><h1>見出し1</h1>');
// メソッド
document.writeln(new Date());
document.writeln('です。');