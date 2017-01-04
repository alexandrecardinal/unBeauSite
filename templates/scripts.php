<!-- SCRIPTS! -->

<script>
$(document).keydown(function(e) {
  if(e.which == 37) { // left
    /*$("#direction").html("Gauche");*/
	$('.link').css({"background":"url(/media/images/spriteG.png) no-repeat center center fixed", "background-size": "80px 100px"});
	if (positionX != 0) {
		positionX--;
	}
	/*alert("Gauche");*/
  }
  else if(e.which == 38) { // up
    /*$("#direction").html("Haut");*/
	$('.link').css({"background":"url(/media/images/spriteH.png) no-repeat center center fixed", "background-size": "80px 100px"});
	if (positionY < maxHauteur) {
		positionY++;
	}
	/*alert("Haut");*/
  }
  else if(e.which == 39) { // right
    /*$("#direction").html("Droite");*/
	/*alert("Droite");*/
	$('.link').css({"background":"url(/media/images/spriteD4.png) no-repeat center center fixed", "background-size": "80px 100px"});
	if (positionX < maxLargeur) {
		positionX++;
	}
	/*$('.link').css({"background":"url(/media/images/spriteD.png) no-repeat center center fixed"});*/
  }
  else if(e.which == 40) { // bas
    /*$("#direction").html("Bas");*/
	$('.link').css({"background":"url(/media/images/sprite-static.png) no-repeat center center fixed", "background-size": "80px 100px"});
	if (positionY != 0) {
		positionY--;
	}
	/*alert("Bas");*/
  }
});
</script>