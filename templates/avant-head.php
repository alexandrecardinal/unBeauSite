<!--

Copyright © 2017 Équipe Robotique Bois-de-Boulogne. All rights reserved.

-->


<?php
/*mettre dans array() les IP a bloquer ex: array("111.111.111", "222.222.222", "333.333.333")*/
$deny = array();
if (in_array ($_SERVER['REMOTE_ADDR'], $deny)) {
   header("location: ");
   exit();
} ?>
