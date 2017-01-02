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
	<title>Bêta 0.2</title>
</head>


<body class="village-jeu">
	<!-- En haut de page -->
	<?php
        /* Haut-page: Login System, Titre, Navigation et plus... */ 
    	include '/templates/haut-page.php';
    ?>
    
	<!--Contenu -->
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
<script>
/* alert("Bêta 0.1:\n1)Structure de base (PHP+)\n2)Interactions sociales\nEN CONSTRUCTION:\n1)Link\n2)Menu"); */
alert("Bêta 0.2:\n1)Structure fonctionnelle (PHP+)\n2)Détection des touches directionnelles et changement de position de Link" +
"\n3)Interactions sociales (+animation)\nEN CONSTRUCTION:\n1)Menu\n2)Background\n3)Essais de styles d'animation");
</script>
</html>