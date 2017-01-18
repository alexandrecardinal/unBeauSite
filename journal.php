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
	<title>Journal</title>
</head>


<body class="dark-background uk-animation-fade">
	<!-- En haut de page -->
	<?php
        /* Haut-page: Login System, Titre, Navigation et plus... */ 
    	include '/templates/haut-page.php';
    ?>
    
	<!--Contenu -->
    <div style="display: flex;justify-content: center;" class="uk-animation-fade">
        <div id="flipbook">
            <div class="hard"> Exemple </div>
            <div class="hard"></div>
            <div> Date 1 </div>
            <div> Date 2 </div>
            <div> Date 3 </div>
            <div> Date 4 </div>
            <div class="hard"></div>
            <div class="hard"></div>
        </div>
    </div>
	<script type="text/javascript">
        $("#flipbook").turn({
            width: 800,
            height: 600,
            autoCenter: true
        });
    </script>
    
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
<audio style="hidden:true;" autoplay="true" src="/media/musiques/24-the-goddess-appears.mp3"/>
</html>