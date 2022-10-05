'use strict';
$(document).ready(function () {
    $.ajax({ url: 'data.json', dataType: 'json' })
        .done(function (data) {
            data.forEach(function (item, index) {
                let info = ";"
                switch (item.id) {
                    case "title":
                        info = "<td>" + item.value + "</td>";
                        break;
                    case "price":
                        info = "<td>" + item.value + "円</td>";
                        break;
                    case "stocks":
                        info = "<td>" + item.value + "冊</td>";
                        break;
                };
                $(info).appendTo('#addInfo');
            });
        })
        .fail(function () {
            window.alert('読み込みエラー');
        });
});