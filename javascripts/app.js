
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

    return this;
  };
})(jQuery.fn.removeClass);

jQuery(document).ready(function() {
  jQuery('html').removeClass('no-js');
});

jQuery(document).foundation();
