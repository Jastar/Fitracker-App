$(document).ready(function(){
   $("input[type='email']").focus(function(){
   		$("input[type='submit']").fadeIn("slow")
	});
   $("input[type='email']").blur(function(){
   		$("input[type='submit']").fadeOut("slow")
	});

   $("nav button.navigation").click(function(){
   		$("nav ul.socialgroup").slideToggle("slow");
   });

   $("nav ul.socialgroup li.share").mouseenter(function(){
   		$("ul.submenu").fadeIn();
   });
   $("nav ul.socialgroup li.share").mouseleave(function(){
   		$("ul.submenu").fadeOut();
   })

   window.onscroll = function() {
        if (window.pageYOffset > 500) {
            $("section#gallery h2").addClass("animated bounceIn");
            $("section#gallery h4").addClass("animated bounceIn");
            $("section#gallery hr").addClass("animated fadeIn");
            $("section#gallery ul.groups").addClass("animated bounceIn");
        } 
        if (window.pageYOffset > 1000) {
            $("section#gallery img[src='images/gallery1.gif']").addClass("animated zoomIn");
            $("section#gallery img[src='images/gallery4.gif']").addClass("animated zoomIn");

            $("section#gallery img[src='images/gallery2.gif']").addClass("animated zoomIn");
            $("section#gallery img[src='images/gallery5.gif']").addClass("animated zoomIn");

            $("section#gallery img[src='images/gallery3.gif']").addClass("animated zoomIn");
            $("section#gallery img[src='images/gallery6.gif']").addClass("animated zoomIn");
        }
    };
});