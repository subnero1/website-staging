
jQuery.extend({
  randomColor: function() {
    return '#' + Math.floor(Math.random()*256*256*256).toString(16);
  }
});

(function(removeClass) {
  jQuery.fn.removeClass = function(value) {
    if(value && typeof value.test === 'function') {
      for(var i = 0; i < this.length; i++) {
        var elem = this[i];
        if( elem.nodeType === 1 && elem.className ) {
          var classNames = elem.className.split(/\s+/);
          for(var n = 0; n < classNames.length; n++) {
            if(value.test(classNames[n])) {
              classNames.splice(n, 1);
            }
          }
          elem.className = jQuery.trim(classNames.join(" "));
        }
      }
    } else {
      removeClass.call(this, value);
    }

    return this
  }
})(jQuery.fn.removeClass);

jQuery(document).ready(function() {
  jQuery('html').removeClass('no-js');
});

jQuery(document).foundation();


(function($) {
  "use strict";
  $(document).ready(function() {

    $('video').each(function() {
      this.muted = true;
    });

    $('.fadeinleft, .fadeinright, .fadein, .popin').appear(function() {
      var delay = $(this).data('delay');
      var that = this;

      setTimeout(function() {
        $(that).addClass('appear');
      }, delay)

    });

    // $('.popin').each(function() {
    //   $(this).addClass('appear');
    // });

    // Shrink top bar on all pages except landing page
    if ($('#fullscreen-video').length == 0){
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if ( scroll >= 40 ) {
          $('body').addClass('shrink');
        } else {
          $('body').removeClass('shrink');
        }
      });
    }

    // onepage nav scroll
    if ( $("nav.top-bar.onepage").length > 0 ) {
      $('.top-bar-section a[href=#top]').closest('li').addClass('active');

      var ctx = $("nav.top-bar.onepage");

      // var headerHeight = ctx.height();
      // $(window).scroll(function() {
      //   headerHeight = ctx.height();
      //   console.log(headerHeight);
      // });
      var headerHeight = 59;

      // use to mark whether the scrolling is caused by clicking
      var clickScrolling = false;
      // cache for current anchor id
      var currentAnchorId;

      $('.top-bar-section a', ctx).click(function(event) {
        $('.top-bar-section a', ctx).closest('li').removeClass('active');
        $(this).closest('li').addClass('active');
        clickScrolling = true;
        // console.log($(this).attr('href').offset());
        try {
          if ( $(this).attr('href') == '#top' ) {
            var distance = 0
          } else {
            var distance = $($(this).attr('href')).offset().top - headerHeight + 'px';
          }

          // console.log(distance);

          $('html, body').stop().animate({
            scrollTop: distance
          }, { duration: 1200, easing: "easeInOutExpo", complete: function() { clickScrolling = false; } });
          event.preventDefault();
        } catch(e) {}
      });


      // hightlight nav when scrolling
      var anchors = $('.top-bar-section a', ctx).map(function() {
        var anchor = $($(this).attr('href'));
        if(anchor.length) { return anchor; }
      });

      $(window).scroll(function() {
        if(clickScrolling) return false;

        var fromTop = $(this).scrollTop();
        var passedAnchors = anchors.map(function() {
          // add 1 to make the current nav change 1px before it should when scrolling top to bottom
          if(fromTop + headerHeight + 1 >= $(this).offset().top)
            return this;
        });
        // get the last anchor in the passedAnchors as the current one
        var currentAnchor = passedAnchors[passedAnchors.length - 1];
        if(currentAnchor) {
          if(currentAnchorId !== currentAnchor.attr('id')) {
            currentAnchorId = currentAnchor.attr('id');
            $('.top-bar-section a', ctx).closest('li').removeClass('active');
            $('.top-bar-section a[href=#'+currentAnchorId+']', ctx).closest('li').addClass('active');
          }
        }

      });


    }


  });
})(jQuery);

