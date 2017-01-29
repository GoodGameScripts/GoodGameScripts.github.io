$( window ).ready(function() {

  var WidthInPixels = $('.SWFWrapper').outerWidth(true)*.8;
  var input = document.getElementById("search");
  var awesomplete = new Awesomplete(input, {
    minChars: 1,
    maxItems: 5,
    autoFirst: true
  });
  window.addEventListener("awesomplete-selectcomplete", function(e) {

    var articleTitle = $(e.target).val().replace(/ /g,'');
    var articleId = '#'+ articleTitle;
    var $article = $(articleId);
    var articleUrl = $article.data('link');
    window.location.href = articleUrl;
    });

$("#MMinimize" ).click(function() {
$("aside").toggleClass("showaside");
$("body").toggleClass("showsidenav");
$("#fixed").toggleClass("fixed2");
$("#rightside").toggleClass("mrightside");
$("#MMinimize i" ).toggleClass("flip-horizontal");
var $el = $(this);
var title = $(this).prop('title');
if(title === 'Show'){
  $el.prop('title', 'hide');
} else {
  $el.prop('title', 'show');
}

});

$( "#minimize" ).click(function() {
    $( "aside" ).toggleClass("hideaside")
    $("#MinimizeIcon").toggleClass("fa-angle-double-right");
    $("#fixed").toggleClass("fixed");
    $("#rightside").toggleClass("articleOnhide");
    $("body").toggleClass("hidesidenav");
    var $el = $(this);
   var title = $(this).prop('title');

   if(title === 'Minimize Sidebar'){
     // Reset state
     $el.prop('title', 'Maximize Sidebar');
   } else {
     $el.prop('title', 'Minimize Sidebar');
   }


});


$(".swf").css("height", WidthInPixels + 'px');

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

});
