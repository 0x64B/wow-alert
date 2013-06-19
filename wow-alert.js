    ;
    (function ($) {


        var defaults = {
            label: "OK",
            autoClose: true
        };

        jQuery.fn.extend({
            halfWidth: function () {
                var width = 0;
                this.each(function () {
                    width += $(this).outerWidth() / 2;
                });
                return width;
            },
            halfHeight: function () {
                var height = 0;
                this.each(function () {
                    height += $(this).outerHeight() / 2;
                });
                return height;
            }
        });
        function centerWindow() {
            this._alertWindow.css({
                marginLeft: -this._alertWindow.halfWidth(),
                marginTop: -this._alertWindow.halfHeight()
            });
        }

        function createWindow(msg) {
            var elements = $("<div class='wow-alert-overlay'></div><div class='wow-alert-content'><p>" + msg + "</p><a href='#'>" + this.options.label + "</a></div>");
            this._alertOverlay = $(elements[0]);
            this._alertWindow = $(elements[1]);

            this._actionButton = this._alertWindow.find('a');

            this._alertOverlay.appendTo("body");
            this._alertWindow.appendTo("body");

            return [this._alertOverlay, this._alertWindow];
        }

        function configureActions() {
            var context = this;

            this._actionButton.bind('click', function (e) {
                e.preventDefault();
                if (context.options.autoClose) close();
                if (context.options.success) context.options.success();
            });
        }

        function close() {
            this._alertOverlay.remove();
            this._alertWindow.remove();
        }
        window.alert = function (msg, opts) {
            this.options = $.extend(defaults, opts);

            createWindow(msg);
            centerWindow();
            configureActions();

        }

    }(jQuery));
