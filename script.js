$(function(){
  $('.main-line').slick({
    //	自動再生を有効にするか。
    autoplay:true,
    //自動再生のスライド切り替えまでの時間をミリ秒で設定。
    autoplaySpeed:5000,
    //ドットインジケーターを表示するか。
    dots:true,
    //スライドの左右の矢印ボタンを表示するか。
    arrows:false,
    //	自動再生時にスライドにフォーカスした際、自動再生をストップさせるか。
    pauseOnFocus:false,
  });
  $(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 2000,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});
});
