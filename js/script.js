'use strict'
// ハンバーガーメニューアニメーション
$(".openbtn").click(function () {
  $(this).toggleClass('active');
});

$(".openbtn").click(function () {
  $(".toggle-nav").toggleClass('open');
});

// ナビゲーションメニュー表示
$(".navbtn").click(function () {
  $("nav").removeClass('open');
});
// ナビゲーションメニュー閉じる
$(".navbtn").click(function () {
  $("button").removeClass('active');
});

