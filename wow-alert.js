    ;
    (function ($) {
        'use strict';

        window.alert = function (msg, label) {
            if (!label) {
                label = "OK"
            }
            var content_overlay = $("<div class='wow-alert-overlay'></div><div class='wow-alert-content'><p>" + msg + "</p><a href='#'>" + label + "</a></div>").appendTo("body");

            $('.wow-alert-content').css({
                left: ($(window).width() - $('.wow-alert-content').outerWidth()) / 2,
                top: ($(window).height() - $('.wow-alert-content').outerHeight()) / 2
            });

            $('.wow-alert-content a').bind('click', function (e) {
                e.preventDefault();
                content_overlay.remove();
            });

        }

    }(jQuery));
