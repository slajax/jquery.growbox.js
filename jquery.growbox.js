
if(typeof jQuery != "undefined" ) {

    (function($){

        $.fn.growBox = function(options) {

            options = $.extend({ filter: 'textarea'}, options);

            var grow = function() {

                var lh = Math.ceil( parseInt( $(this).css('line-height') ) )
                  , nl = $(this).val().split('\n').length
                  , cl = $(this).val().length
                  , cw = 8
                  , tw = $(this).width() / cw
                  , lines = Math.ceil( cl / tw + nl )
                  , nh = lines * lh + lh;

                if( nh > lh * 12 ) {
                    $(this).css({ height: lh * 12 });
                    return $(this).css({'overflow-y':'auto'});
                } else {
                    $(this).css({'overflow-y': 'hidden'});
                    return $(this).css({ height: nh });
                }
            }

            if ( typeof $(this).data('original-height') == "undefined"  ) {
                $(this).css('resize','none')
                $(this).data('original-height', $(this).outerHeight());
                $(document).on('keyup keypress focus', options.filter, grow);
            }

            return grow.apply(this);

        };

    })(jQuery);

}

