$(function () {
    $("a[href^=#]").on("click", function(e) {
        var targetElement = $(this.hash);
        $('html,body').animate({
            scrollTop: targetElement.offset().top
        }, 800);  /* 0.8秒的速度 */
        e.preventDefault();  /* 拿掉預設的會執行的動作 */
        history.pushState({}, "", this.href);  /* 上一頁是回到上一個狀況 */
    });
});