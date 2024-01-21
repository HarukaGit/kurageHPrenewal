'use strict'

// fontロード用
setTimeout(function() {
  if (document.getElementsByTagName("html")[0].classList.contains('wf-active') != true) {
      document.getElementsByTagName("html")[0].classList.add('loading-delay');
  }
}, 3000);

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

