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
	<title>Bêta 0.3</title>
</head>


<body class="">
	<!-- En haut de page -->
	<?php
        /* Haut-page: Login System, Titre, Navigation et plus... */ 
    	include '/templates/haut-page.php';
    ?>
    <body>

    <!--Contenu -->
    <!-- Musique -->
    <!--<audio style="hidden:true;" autoplay="true" src="/media/musiques/04-overworld.mp3"/>-->
    
    <!-- Message de bienvenue -->
    <div id="parch" class="parchmentTop uk-animation-fade" style="z-index:51;"><div class="parchment" 
    style="z-index:51;"></div><div class="parchmentBody" style="z-index:51;">
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

		<button id="boutonParch" class="uk-button-large" type="button">...</button>
        <script>
			$( "#boutonParch" ).click(function() {
				$( "#parch" ).fadeOut( "slow" );
			});
		</script>
	</div><div class="parchmentBottom" style="z-index:51;"></div></div>
    
    
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
var maxHauteur = 1000000;
var maxLargeur = 1000000;
var positionX = 0;
var positionY = 0;
</script>
</html>