<!-- SCRIPTS! -->

<script>
///* SOURIS */
var mouseX = 0, mouseY = 0;
$(document).mousemove(function(e){
   mouseX = e.pageX+5;
   mouseY = e.pageY-5; 
});

// cache the selector
var follower = $("#souris");
var xp = 0, yp = 0;
var loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp += (mouseX - xp) / 12;
    yp += (mouseY - yp) / 12;
    follower.css({left:xp, top:yp});
}, 30);

</script>