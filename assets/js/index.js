$(function () {
    //autoscroll animation
    $("a[href^=#]").not(".open").on("click", function (e) {
        var targetElement = $(this.hash);
        $('html,body').animate({
            scrollTop: targetElement.offset().top
        }, 800);
        /* 0.8秒的速度 */
        e.preventDefault();
        /* 拿掉預設的會執行的動作 */
        history.pushState({}, "", this.href);
        /* 上一頁是回到上一個狀況 */
    });


    var onTouchStartListener = function (e) {
        if (!$(e.target).parents('.popup').length) {
            e.preventDefault();
            var $target = $(e.target);
            if ($target.hasClass("overlay")) {
                $target.removeClass('is-visible');
                $('body').css('overflow', 'scroll');
                document.body.removeEventListener('touchstart', onTouchStartListener);
            }
        }
    };

    //open popup
    $('.ch-item').on('click', function (event) {
        console.log('click');
        event.preventDefault();
        var targetId = this.getAttribute('data-target');
        $('#' + targetId).addClass('is-visible');
        //$('.overlayTW').addClass('is-visible');
        $('body').css('overflow', 'hidden');

        document.body.addEventListener('touchstart', onTouchStartListener);
    });


    //close popup
    $('.close').on('click', function (event) {
        event.preventDefault();
        var targetId = this.getAttribute('data-target');
        $('#' + targetId).removeClass('is-visible');
        $('body').css('overflow', 'scroll');

        document.body.removeEventListener('touchstart', onTouchStartListener);
    });

    $('.overlay').on('click', function (event) {
        event.preventDefault();
        var $target = $(event.target);
        if ($target.hasClass("overlay")) {
            $target.removeClass('is-visible');
            $('body').css('overflow', 'scroll');
            document.body.removeEventListener('touchstart', onTouchStartListener);
        }

    });

    $('.sticker-bg').on('click', function () {
        window.open('/illustration.html')
    });

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]"
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
    })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

    //cover star animation
    if (isFirefox || isSafari) {
        $('.stars').hide();
        particlesJS.load('particles-js', 'assets/js/particles.json');
    } else {
        $('#particles-js').hide();
        $(document).ready(function () {
            var stars = 800;
            var $stars = $(".stars");
            var r = 800;
            for (var i = 0; i < stars; i++) {
                var $star = $("<div/>").addClass("star");
                $stars.append($star);
            }
            $(".star").each(function () {
                var cur = $(this);
                var s = 0.2 + (Math.random() * 1);
                var curR = r + (Math.random() * 300);
                cur.css({
                    transformOrigin: "0 0 " + curR + "px",
                    transform: " translate3d(0,0,-" + curR + "px) rotateY(" + (Math.random() * 360) + "deg) rotateX(" + (Math.random() * -50) + "deg) scale(" + s + "," + s + ")"

                })
            })
        })
    }

    //pre-fade   
    $('.skill').fadeTo(0, 0);
    $('.workspace li').fadeTo(0, 0);




    // re-size circle 
    $('.circles img').each(function () {
        $(this).on('load', function () {
            var width = $(this).width();
            var height = $(this).height();
            $(this).width(width / 1.5);
            $(this).height(height / 1.5);
        });
    })

    //fade animation
    $(document).on('scroll', function () {
        var currentScrollPosition = $(this).scrollTop();
        var clickerPosition = $('.clicker').offset().top;
        var approachcontentPosition = $('.desc-content').offset().top;
        var approachPosition = $('#approach').offset().top;

        if (currentScrollPosition > clickerPosition) {
            $('.skill').each(function (index) {
                var t = $(this);
                setTimeout(function () {
                    t.addClass('animated fadeIn');
                }, (index) * 300);
            });
        }

        if (currentScrollPosition > approachcontentPosition) {
            $('.workspace li').each(function (index) {
                var t = $(this);
                setTimeout(function () {
                    t.addClass('animated fadeIn');
                }, (index) * 300);
            });
        }

        //circle animation
        if (currentScrollPosition > approachPosition) {
            $('.doublediamond-left').each(function (index) {
                var t = $(this);
                setTimeout(function () {
                    t.css('display', 'block');
                    t.addClass('animated bounceInLeft');
                }, (index) * 200);
            });
            $('.doublediamond-right').each(function (index) {
                var t = $(this);
                setTimeout(function () {
                    t.css('display', 'block');
                    t.addClass('animated bounceInRight');
                }, (index) * 200);
            });
        };
    });



});