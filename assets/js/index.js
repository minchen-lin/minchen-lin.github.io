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
        $('.popup').append('<div class="back-to-top"></div>');

        event.preventDefault();
        openPopUp(this);
        document.body.addEventListener('touchstart', onTouchStartListener);
    });

    //close popup
    $('.close').on('click', function (event) {
        event.preventDefault();
        closePopUp(this);
        document.body.removeEventListener('touchstart', onTouchStartListener);
    });

    var openPopUp = function(popup) {
        var targetId = popup.getAttribute('data-target');
        $('#' + targetId).addClass('is-visible');
        $('body').css('overflow', 'hidden');
        return popup;
    }

    var closePopUp = function(popup) {
        var targetId = popup.getAttribute('data-target');
        $('#' + targetId).removeClass('is-visible');
        $('body').css('overflow', 'scroll');
        return popup;
    }

    $('.popup').scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').css('visibility', 'visible');
        } else {
            $('.back-to-top').css('visibility', 'hidden');
        }
    });

    $('.popup').on('click', '.back-to-top', function (e) {
        e.preventDefault();
        $('.popup').animate({
            scrollTop: 0
        }, '300');
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

    // $('.sticker-bg').on('click', function () {
    //     window.open('/illustration.html')s
    // });

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]"
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
    })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

    var isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    }

    //cover star animation
    if (isFirefox || isSafari || isMobile) {
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
    function getRatio() {
        return 1.5 * (1280 / $('html').width());
    }
    $('.circles').data('ratio', getRatio());
    $('.circles img').each(function () {
        var ratio = $('.circles').data('ratio');
        $(this).on('load', function () {
            var width = $(this).width();
            var height = $(this).height();
            $(this).width(width / ratio);
            $(this).height(height / ratio);
        });
    });

    $(window).on('resize', function () {
        var newRatio = getRatio();
        $('.circles img').each(function () {
            var ratio = $('.circles').data('ratio');
            var width = $(this).width();
            var height = $(this).height();
            $(this).width(width * ratio / newRatio);
            $(this).height(height * ratio / newRatio);
        });
        $('.circles').data('ratio', newRatio);
    });

    //fade animation
    $(document).on('scroll', function () {
        var currentScrollPosition = $(this).scrollTop();
        var clickerPosition = $('.clicker').offset().top;
        var approachcontentPosition = $('.desc-content').offset().top;
        // var approachPosition = $('#approach').offset().top;
        var approachPosition = $('.sticker2').offset().top;


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
                    t.css('visibility', 'visible');
                    t.addClass('animated bounceInLeft');
                }, (index) * 200);
            });
            $('.doublediamond-right').each(function (index) {
                var t = $(this);
                setTimeout(function () {
                    t.css('visibility', 'visible');
                    t.addClass('animated bounceInRight');
                }, (index) * 200);
            });
        };
    });

    //enlarge image
    $('.wireframe').on('click', function () {
        $('.zoom-in')
            .css({
                'backgroundImage': `url(${this.src})`,
                'z-index': 10000
            })
            .addClass('open')
            .one('click', function () {
                $(this).removeClass('open');
            })
    });

});