<!--

Si un jour tu lis ce message, c'est que j'ai prédis ta curiosité :P J'aimerai juste te faire part de...

-->

<!--

Copyright © 2016 El-Harrache Soheib. All rights reserved.

-->


<?php
/*mettre dans array() les IP a bloquer ex: array("111.111.111", "222.222.222", "333.333.333")*/
$deny = array();
if (in_array ($_SERVER['REMOTE_ADDR'], $deny)) {
   header("location: ");
   exit();
} ?>
