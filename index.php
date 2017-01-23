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
    
    <div class="background-wrap">
        <video id="video-bg-elem" preload="auto" autoplay="true" loop="loop" muted="muted"> 
            <source src="/media/videos/THE LEGEND OF ZELDA RAP [MUSIC VIDEO]x.mp4" type="video/mp4">
            Video not supported!
        </video>          
    </div>


    <div class="content">         
        <h1>Collège Bois-de-Boulogne</h1>
        <p>Un site qui se distingue!</p>
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
<!-- Musique -->
<audio style="hidden:true;" autoplay src="/media/musiques/04-overworld.mp3" loop/>
</html>