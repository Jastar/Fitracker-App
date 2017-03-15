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
});