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
    <meta charset="utf-8">
	<title>Membres</title>
</head>

<body class="membres-background uk-animation-fade" style="overflow: hidden;">
	<!-- En haut de page -->
	<?php
        /* Haut-page: Login System, Titre, Navigation et plus... */ 
    	include '/templates/haut-page.php';
    ?>
    
	<!--Contenu -->
    <!--<p><img src="/media/images/Membres/Bazaar.png" alt="Plan" usemap="#membres" id="Image1" />
    <map name="membres">
      <!-- coor: posXCoinSuperieuràGauche,posYCoinSuperieurAGauche,posXCoinInferieurADroite,posYCoinInférieurADroite-->
      <!--<area shape="rect" coords="180,146,325,245" href="#" title="Ton texte surgissant"
      onmouseover="MM_swapImage('Image1','','/media/images/spriteD.png',1)" onmouseout="MM_swapImgRestore()"" "/> <!-- 3 flèches-->
      <!--<area shape="rect" coords="181,342,330,462" href="#" /> <!-- flèche -->
      <!--<area shape="rect" coords="1022,133,1153,253" href="#" alt="bleu" /> <!-- bombe -->
      <!--<area shape="rect" coords="1014,321,1160,460" href="#" alt="orange" /> <!-- bouclier -->
   <!-- </map>
    
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
<audio style="hidden:true;" autoplay src="/media/musiques/Princess_Zelda_The_Legend_of_Zelda_Ocarina_of_Time_EKLAUNc58iA_youtube.mp3" loop/>
<script>

</script>
</html>