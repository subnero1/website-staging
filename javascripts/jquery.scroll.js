(function($) {
    $.fn.scroll = function(fn, options) {

var hidWidth;
var scrollBarWidths = 40;

var widthOfList = function(){
  var itemsWidth = 0;
  $('.item').each(function(){
    var itemWidth = $(this).outerWidth();//3200
    itemsWidth+=itemWidth;
  });
  //alert(itemsWidth);
  return itemsWidth;
};

var widthOfHidden = function(){
 // alert("outerWidth:"+($('.wrapper').outerWidth()));//1025
 // alert("widthOfList:"+widthOfList());//3200
 // alert("getLeftPosi:"+getLeftPosi());
 // alert("scrollBarWidths:"+scrollBarWidths);
  return (($('.wrapper').outerWidth())-widthOfList()-getLeftPosi())-scrollBarWidths;
};

var getLeftPosi = function(){
  //return $('.item:first-child').position().left;
  return $('.list').position().left;
};

var reAdjust = function(){
  if (($('.wrapper').outerWidth()) < widthOfList()) {
    $('.scroller-right').show();
  }
  else {
    $('.scroller-right').hide();
    /*
    var leftPos = $('.item:first-child').position().left;
  $('.item').animate({left:"-="+leftPos+"px"},'slow');
    */
  }
  
  if (getLeftPosi()<0) {
    $('.scroller-left').show();
  }
  else {
    $('.item').animate({left:"-="+getLeftPosi()+"px"},'slow');  
    $('.scroller-left').hide();
  }
}

reAdjust();

$(window).on('resize',function(e){  
    reAdjust();
});

$('.scroller-right').click(function() {

  $('.scroller-left').fadeIn('slow');
  $('.scroller-right').fadeOut('slow');
  alert("right: " +widthOfHidden());//-2260
  $('.list').animate({left:"+="+widthOfHidden()+"px"},'slow',function(){
    //reAdjust();
  });   
});

$('.scroller-left').click(function() {
    //var leftPos = $('.item:first-child').position().left;
  //$('.item').animate({left:"-="+getLeftPosi()+"px"},'slow');
    //$('.scroller-left').hide();
  $('.scroller-right').fadeIn('slow');
  $('.scroller-left').fadeOut('slow');
  //alert("left:" +getLeftPosi());
    $('.list').animate({left:"-="+getLeftPosi()+"px"},'slow',function(){
    
    });
  
});

}})(jQuery);   