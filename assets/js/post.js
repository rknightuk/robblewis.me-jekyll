$(".focus").click(function (e) {
  e.preventDefault();
  if($(this).text() == 'focus')
   {
      $("header").slideToggle("slow");
      $("nav").slideToggle("slow");
      // $(".meta").slideToggle("slow");
      $("footer").slideToggle("slow");
      $("img").animate({"opacity":"0.3"}, 550);
      $("article").animate({"margin-top":"20px"}), 550;
      $(this).text('unfocus');
   }
   else
   {
      $("header").slideToggle("slow");
      $("nav").slideToggle("slow");
      // $(".meta").slideToggle("slow");
      $("footer").slideToggle("slow");
      $("img").animate({"opacity":"1"}, 550);
      $("article").animate({"margin-top":"0"}), 550;
      $(this).text('focus');
   }
});