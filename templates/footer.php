
<!-- ex
<p class="copyright">
   Copyright &copy; 2016 El-Harrache Soheib. All rights reserved.
</p>
-->

<!-- SCRIPTS! -->

<script>
$(document).keydown(function(e) {
  if(e.which == 37) { // left
    /*$("#direction").html("Gauche");*/
	$('.link').css({"background":"url(/media/images/spriteG.png) no-repeat center center fixed", "background-size": "80px 100px"});
	/*alert("Gauche");*/
  }
  else if(e.which == 38) { // up
    /*$("#direction").html("Haut");*/
	$('.link').css({"background":"url(/media/images/spriteH.png) no-repeat center center fixed", "background-size": "80px 100px"});
	/*alert("Haut");*/
  }
  else if(e.which == 39) { // right
    /*$("#direction").html("Droite");*/
	/*alert("Droite");*/
	$('.link').css({"background":"url(/media/images/spriteD4.png) no-repeat center center fixed", "background-size": "80px 100px"});
	/*$('.link').css({"background":"url(/media/images/spriteD.png) no-repeat center center fixed"});*/
  }
  else if(e.which == 40) { // bas
    /*$("#direction").html("Bas");*/
	$('.link').css({"background":"url(/media/images/sprite-static.png) no-repeat center center fixed", "background-size": "80px 100px"});
	/*alert("Bas");*/
  }
});
</script>