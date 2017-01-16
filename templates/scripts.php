<!-- SCRIPTS! -->

<script>
$(document).keydown(function(e) {
  var $playground = $('.village-jeu');

  if(e.which == 37) { // left
    /*$("#direction").html("Gauche");*/
	$('.link').css({"background":"url(media/images/spriteG.png) no-repeat center center fixed", "background-size": "80px 100px"});
	if (positionX != -5000) {
		positionX++;
	}
	movePlayground(positionX, positionY);
	/*alert("Gauche");*/
  }
  else if(e.which == 38) { // up
    /*$("#direction").html("Haut");*/
	$('.link').css({"background":"url(media/images/spriteH.png) no-repeat center center fixed", "background-size": "80px 100px"});
	if (positionY < maxHauteur) {
		positionY++;
	}
	movePlayground(positionX, positionY);
	/*alert("Haut");*/
  }
  else if(e.which == 39) { // right
    /*$("#direction").html("Droite");*/
	/*alert("Droite");*/
	$('.link').css({"background":"url(media/images/spriteD4.png) no-repeat center center fixed", "background-size": "80px 100px"});
	if (positionX < maxLargeur) {
		positionX--;
	}
	movePlayground(positionX, positionY);
	/*$('.link').css({"background":"url(/media/images/spriteD.png) no-repeat center center fixed"});*/
  }
  else if(e.which == 40) { // bas
    /*$("#direction").html("Bas");*/
	$('.link').css({"background":"url(media/images/sprite-static.png) no-repeat center center fixed", "background-size": "80px 100px"});
	if (positionY != -5000) {
		positionY--;
	}
	movePlayground(positionX, positionY);
	/*alert("Bas");*/
  }

  function movePlayground(x, y) {
  	console.log($playground);
  	$playground.css('transform', 'translate(' + 5 * x + 'px, ' + 5 * y + 'px)');
  }
});

/* SOURIS */
$(document).mousemove(function(e){
    $("#souris").css({left:e.pageX, top:e.pageY});
});
</script>