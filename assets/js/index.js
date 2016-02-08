$(function () {
    $("a[href^=#]").not(".open").on("click", function(e) {
        var targetElement = $(this.hash);
        $('html,body').animate({
            scrollTop: targetElement.offset().top
        }, 800);  /* 0.8秒的速度 */
        e.preventDefault();  /* 拿掉預設的會執行的動作 */
        history.pushState({}, "", this.href);  /* 上一頁是回到上一個狀況 */
    });

    document.getElementById('close').onclick = function(){
        this.parentNode.parentNode.parentNode
            .removeChild(this.parentNode.parentNode);
        return false;
    };

});