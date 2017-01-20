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
	<title>Photos/Vidéos</title>
</head>


<body class="dark-background uk-animation-fade" style="overflow-x: hidden;">
	<!-- En haut de page -->
	<?php
        /* Haut-page: Login System, Titre, Navigation et plus... */ 
    	include '/templates/haut-page.php';
    ?>
    
	<!--Contenu -->
    <!--
    <div class="uk-slidenav-position" style="display: flex;justify-content: center;" data-uk-slideshow>
        <ul class="uk-slideshow" style="height: 283px;">
            <li><img src="/media/images/wallpaper-video-images-zelda-game-53834.jpg" width="300" height="300" alt=""></li>
            <li><img src="/media/images/wallpaper-video-images-zelda-game-53834.jpg" width="300" height="300" alt=""></li>
        </ul>
        <a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous"></a>
        <a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next"></a>
        <ul class="uk-dotnav uk-dotnav-contrast uk-position-bottom uk-flex-center">
            <li data-uk-slideshow-item="0"><a href="#"></a></li>
            <li data-uk-slideshow-item="1"><a href="#"></a></li>
        </ul>
	</div>
    -->
    <!--<div class="uk-slidenav-position" data-uk-slideshow="{kenburns:true, autoplay:true}" style="width:500px;display: flex;justify-content: center;">
       <ul class="uk-slideshow" style="height: 283px;">
          <li data-slideshow-slide="img" aria-hidden="true" class="" style="animation-duration: 500ms; opacity: 0; height: 283px;">
             <div class="uk-cover-background uk-position-cover uk-animation-scale uk-animation-reverse uk-animation-top-right" style="background-image: url(/media/images/wallpaper-video-images-zelda-game-53834.jpg); animation-duration: 15s;"></div>
             <canvas width="800" height="400" style="width: 100%; height: auto; opacity: 0;"></canvas>
          </li>
          <li data-slideshow-slide="img" aria-hidden="true" class="" style="animation-duration: 500ms; opacity: 0; height: 283px;">
             <div class="uk-cover-background uk-position-cover uk-animation-scale uk-animation-reverse uk-animation-bottom-left" style="background-image: url(/media/images/wallpaper-video-images-zelda-game-53834.jpg); animation-duration: 15s;"></div>
             <canvas width="800" height="400" style="width: 100%; height: auto; opacity: 0;"></canvas>
          </li>
          <li data-slideshow-slide="img" aria-hidden="false" class="uk-active" style="animation-duration: 500ms; opacity: 1; height: 283px;">
             <div class="uk-cover-background uk-position-cover uk-animation-scale uk-animation-reverse uk-animation-top-center" style="background-image: url(/media/images/wallpaper-video-images-zelda-game-53834.jpg); animation-duration: 15s;"></div>
             <canvas width="800" height="400" style="width: 100%; height: auto; opacity: 0;"></canvas>
          </li>
       </ul>
       <a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous" style="color: rgba(255,255,255,0.4)"></a>
       <a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next" style="color: rgba(255,255,255,0.4)"></a>
	</div>-->
    
    <div class="gallery cf" style="padding: 150px 50px 200px 150px;">
      <div>
        <img style="width:300px;" src="/media/images/wallpaper-video-images-zelda-game-53834.jpg" />
      </div>
      <div>
        <img style="width:300px;" src="/media/images/wallpaper-video-images-zelda-game-53834.jpg" />
      </div>
      <div>
        <img style="width:300px;" src="/media/images/wallpaper-video-images-zelda-game-53834.jpg" />
      </div>
      <div>
        <img style="width:300px;" src="/media/images/wallpaper-video-images-zelda-game-53834.jpg" />
      </div>
      <div>
        <img style="width:300px;" src="/media/images/wallpaper-video-images-zelda-game-53834.jpg" />
      </div>
      <div>
        <img style="width:300px;" src="/media/images/wallpaper-video-images-zelda-game-53834.jpg" />
      </div>
      <div>
        <img style="width:300px;" src="/media/images/wallpaper-video-images-zelda-game-53834.jpg" />
      </div>
      <div>
        <img style="width:300px;" src="/media/images/wallpaper-video-images-zelda-game-53834.jpg" />
      </div>
      <div>
        <img style="width:300px;" src="/media/images/wallpaper-video-images-zelda-game-53834.jpg" />
      </div>
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
<audio style="hidden:true;" autoplay src="/media/musiques/29-triforce-chamber.mp3" loop/>
</html>