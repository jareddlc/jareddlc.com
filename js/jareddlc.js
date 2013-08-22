$(document).ready(function(){
  $(".avatar-talk").popover({
    html:   true,
    placement:  'bottom',
    title:    'Jared De La Cruz',
    content:  'Hello!',
  }).popover('show');

  talkBox();
  function talkBox() {
    $(".popover-content").html("Hello!");
    setTimeout(function() {
      $(".popover-content").html("I am a software engineer.");
      setTimeout(function() {
        $(".popover-content").html("Please visit my <a href=\"projects/\"><button class=\"btn btn-primary\" type=\"button\">Projects</button></a>");
        setTimeout(function() {
          talkBox();
        }, 4000);
      }, 2000);
    }, 2000);
  };

});
