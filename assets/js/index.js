$(function () {
    $("a[href^=#]").not(".open").on("click", function(e) {
        var targetElement = $(this.hash);
        $('html,body').animate({
            scrollTop: targetElement.offset().top
        }, 800);  /* 0.8秒的速度 */
        e.preventDefault();  /* 拿掉預設的會執行的動作 */
        history.pushState({}, "", this.href);  /* 上一頁是回到上一個狀況 */
    });

    //open popup
    $('.open').on('click', function(event){
        event.preventDefault();
        $('.overlay').addClass('is-visible');
        $('body').css('overflow', 'hidden');
    });

    //close popup
    $('.overlay').on('click', function(event){
        if( $(event.target).is('.close') || $(event.target).is('.overlay') ) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }
        $('body').css('overflow', 'scroll');
    });
});

//window.onscroll = function() {scrollTosec()};
//
//var previousScrollTop = 0;
//var isAnimating = false;
//
//function scrollTosec() {
//
//    if (isAnimating) {
//        return;
//    }
//
//    var currentScrollTop = document.body.scrollTop;
//
//    var isScrollingDown = (currentScrollTop - previousScrollTop) > 0;
//    var isScrollingUp = (currentScrollTop - previousScrollTop) < 0;
//
//    var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
//
//    var sec2TopOffset = document.getElementById('about').offsetTop;
//    var sec3TopOffset = document.getElementById('approach').offsetTop;
//    var sec4TopOffset = document.getElementById('work').offsetTop;
//    var sec5TopOffset = document.getElementById('contact').offsetTop;
//
//    if (isScrollingDown) {
//        if (currentScrollTop < sec5TopOffset && currentScrollTop > sec4TopOffset) {
//            scrollDownWithOffset(sec5TopOffset);
//        }
//        if (currentScrollTop < sec4TopOffset && currentScrollTop > sec3TopOffset) {
//            scrollDownWithOffset(sec4TopOffset);
//        }
//        if (currentScrollTop < sec3TopOffset && currentScrollTop > sec2TopOffset) {
//            scrollDownWithOffset(sec3TopOffset);
//        }
//        if (currentScrollTop < (sec2TopOffset)) {
//            scrollDownWithOffset(sec2TopOffset);
//        }
//    }
//
//
//    if (isScrollingUp) {
//        //if (currentScrollTop < sec3TopOffset && currentScrollTop > sec2TopOffset) {
//        //    scrollDownWithOffset(sec2TopOffset);
//        //}
//        if (currentScrollTop < sec3TopOffset && currentScrollTop > sec2TopOffset) {
//            scrollDownWithOffset(sec2TopOffset);
//        }
//        if (currentScrollTop < sec4TopOffset && currentScrollTop > sec3TopOffset) {
//            scrollDownWithOffset(sec3TopOffset);
//        }
//        if (currentScrollTop > sec4TopOffset) {
//            scrollDownWithOffset(sec4TopOffset);
//        }
//    }
//
//    previousScrollTop = currentScrollTop;
//}
//
//function scrollDownWithOffset(offset) {
//    isAnimating = true;
//    disableScroll();
//    $("html, body").animate({ scrollTop: offset +"px" }, 750, function(){
//        isAnimating = false;
//        enableScroll();
//    });
//}
//
//// Disable Scroll
//
//// left: 37, up: 38, right: 39, down: 40,
//// spacebar: 32, secup: 33, secdown: 34, end: 35, home: 36
//var keys = {37: 1, 38: 1, 39: 1, 40: 1};
//
//function preventDefault(e) {
//    e = e || window.event;
//    if (e.preventDefault)
//        e.preventDefault();
//    e.returnValue = false;
//}
//
//function preventDefaultForScrollKeys(e) {
//    if (keys[e.keyCode]) {
//        preventDefault(e);
//        return false;
//    }
//}
//
//function disableScroll() {
//    if (window.addEventListener) // older FF
//        window.addEventListener('DOMMouseScroll', preventDefault, false);
//    window.onwheel = preventDefault; // modern standard
//    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
//    window.ontouchmove  = preventDefault; // mobile
//    document.onkeydown  = preventDefaultForScrollKeys;
//}
//
//function enableScroll() {
//    if (window.removeEventListener)
//        window.removeEventListener('DOMMouseScroll', preventDefault, false);
//    window.onmousewheel = document.onmousewheel = null;
//    window.onwheel = null;
//    window.ontouchmove = null;
//    document.onkeydown = null;
//}