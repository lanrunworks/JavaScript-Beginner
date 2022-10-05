'use strict';

// $(document).ready(function () {
//     $(".text").click(function () {
//         $(".text").fadeOut(function () {
//             $(".text").text(($(".text").text() == 'クリックされると文字が変化します。') ? 'クリックされました。' : 'クリックされると文字が変化します。').fadeIn();
//         })
//     })
// });
$(document).ready(function () {
    $(".text").click(function () {
        $(".text").fadeOut(function () {
            if ($(".text").text() === 'クリックされると文字が変化します。') {
                $(".text").text('クリックされました').fadeIn();
            } else {
                $(".text").text('クリックされると文字が変化します。').fadeIn();
            }
        })
    })
});