<!DOCTYPE html>
<?php
        /* Avant head: Ip Block, Commentaire, Login Conditions et plus... */ 
       include '/templates/avant-head.php';
?>
<html lang="fr">
<head>
	<?php
        /* Head: Charset, favicon, links CSS, description et plus... */ 
    	include '/templates/head.php';
    ?>
    <!-- À changer par page -->
	<title>Bêta 0.4</title>
</head>


<body style="overflow:hidden;">
	<!-- En haut de page -->
	<?php
        /* Haut-page: Login System, Titre, Navigation et plus... */ 
    	include '/templates/haut-page.php';
    ?>

    <!--Contenu -->
    
    <!-- Message de bienvenue -->
    <div id="parch" class="parchmentTop uk-animation-fade" style="z-index:51;">
    	<div class="parchment" style="z-index:51;"></div>
        <div class="parchmentBody" style="z-index:51;">
            <h1 style="color:black;">Bienvenue!</h1>
            <p>
            Bienvenue dans le monde de Zelda! Veuillez utiliser les touches</br>
            directionnelles pour vous déplacer ou utiliser la navigation.</br>
            Profitez de l'ambiance!
            </p>
            <p>
            Welcome to the universe of Zelda! You may move using arrow</br>
            keys or use the navigation bar as you please.</br>
            Have fun!
            </p>
    		<input type="image" src="/media/images/triforce2.png" class="boutonIntro" id="boutonParch" />
        </div><div class="parchmentBottom" style="z-index:51;"></div>
    </div>
    
    
    <div class-"conteneur-jeu">
        <div class="village-jeu">
            &nbsp;
        </div>
    </div>
    
    <div class="centre link">
    </div>
    
	<!--En bas de page -->
	<?php
        /* Bas-page: Communication Email et plus... */ 
    	include '/templates/bas-page.php';
    ?>
</body>

<footer>
	<?php
        /* Footer: Copyright et plus... */ 
    	include '/templates/footer.php';
    ?>
</footer>

<?php
        /* Footer: Scripts */ 
    	include '/templates/scripts.php';
?>
<script>
	//Scroll
	$( "#boutonParch" ).click(function() {
		$( "#parch" ).remove();
	});
	
	//Déplacement link
	var maxHauteur = 1000000;
	var maxLargeur = 1000000;
	var positionX = 0;
	var positionY = 0;
	
	$(document).keydown(function(e) {
	  var $playground = $('.village-jeu');
	
	  if(e.which == 37) { // left
		/*$("#direction").html("Gauche");*/
		$('.link').css({"background":"url(/media/images/spriteG.png) no-repeat center center fixed", "background-size": "80px 100px"});
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
</script>
<!-- Musique -->
<audio style="hidden:true;" autoplay src="/media/musiques/04-overworld.mp3" loop/>
</html>