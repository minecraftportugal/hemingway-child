jQuery(document).ready(function($) {

    // http://stackoverflow.com/questions/1216114/how-can-i-make-a-div-stick-to-the-top-of-the-screen-once-its-been-scrolled-to
    var $bar = $("div#wpadminbar");
    var $nav = $("div#navigation");
    var $window = $(window);
    var $anchor = $("div#navigation-anchor");

    var anchorMenuBar = function() {

        var windowScrollTop = $window.scrollTop();
        var anchorOffsetTop = $anchor.offset().top;

        if ($bar.length == 0) {
            if (windowScrollTop > anchorOffsetTop) {
                $nav.css({position: "fixed", top: "0px"})
            } else if (windowScrollTop <= anchorOffsetTop) {
                $nav.css({position: "relative", top: ""})
            }
        } else {
            if (windowScrollTop+32 > anchorOffsetTop) {
                $nav.css({position: "fixed", top: "32px"})
            } else if (windowScrollTop <= anchorOffsetTop) {
                $nav.css({position: "relative", top: ""})
            }
        }
    };

    $(window).scroll(anchorMenuBar);
    anchorMenuBar();

});