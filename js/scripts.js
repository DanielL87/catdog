$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>meow</li>");
    $("ul#dog").prepend("<li>woof woof</li>");

    $("ul#cat").children("li").first().click(function() {
      $(".hiss").toggle();
    })

  });

  $("button#bark").click(function() {
    $("ul#cat").prepend("<li>Hiss</li>");
    $("ul#dog").prepend("<li>WOOF!</li>");

    $("ul#dog").children("li").first().click(function() {
      $(".bark").toggle();
    })

  });


});
