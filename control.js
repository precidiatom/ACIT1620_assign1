var horizontal = 380;
var vertical = 85;
var horizontal2 = 100;
var vertical2 = 200;
var Rhorizontal = 100;
var Rvertical = 200;
var bottomvert = 125;

var height = 250;
var width = 250;
var Rheight = 250;
var Rwidth = 250;
var Lheight = 250;
var Lwidth = 250;
var Bheight = 250;
var Bwidth = 250;

/*changing the images */
document.getElementById("topimg1").addEventListener("click", function(){
    document.getElementById("topImg").src="gen1.png"
});

document.getElementById("topimg2").addEventListener("click", function(){
    document.getElementById("topImg").src="gen1b.png"
});

document.getElementById("topimg3").addEventListener("click", function(){
    document.getElementById("topImg").src="gen1c.png"
});

document.getElementById("leftimg1").addEventListener("click", function(){
    document.getElementById("leftImg").src="gen2a.png"
});

document.getElementById("leftimg2").addEventListener("click", function(){
    document.getElementById("leftImg").src="gen2b.png"
});

document.getElementById("leftimg3").addEventListener("click", function(){
    document.getElementById("leftImg").src="gen2c.png"
});

document.getElementById("rightimg1").addEventListener("click", function(){
    document.getElementById("rightImg").src="gen4a.png"
});

document.getElementById("rightimg2").addEventListener("click", function(){
    document.getElementById("rightImg").src="gen4b.png"
});

document.getElementById("rightimg3").addEventListener("click", function(){
    document.getElementById("rightImg").src="gen4c.png"
});

document.getElementById("botimg1").addEventListener("click", function(){
    document.getElementById("bottomImg").src="gen3a.png"
});

document.getElementById("botimg2").addEventListener("click", function(){
    document.getElementById("bottomImg").src="gen3b.png"
});

document.getElementById("botimg3").addEventListener("click", function(){
    document.getElementById("bottomImg").src="gen3c.png"
});

/* changing the directions */
document.getElementById("topR").addEventListener("click", function(){
   horizontal = horizontal + 5;
    document.getElementById("topImg").style.left = horizontal+"px";
});

document.getElementById("topL").addEventListener("click", function(){
   horizontal = horizontal - 5;
    document.getElementById("topImg").style.left = horizontal+"px";
});

document.getElementById("topU").addEventListener("click", function(){
   vertical = vertical - 2;
    document.getElementById("topImg").style.top = vertical+"px";
});

document.getElementById("topD").addEventListener("click", function(){
   vertical = vertical + 2;
    document.getElementById("topImg").style.top = vertical+"px";
});

document.getElementById("botR").addEventListener("click", function(){
   horizontal = horizontal + 5;
    document.getElementById("bottomImg").style.left = horizontal+"px";
});

document.getElementById("botL").addEventListener("click", function(){
   horizontal = horizontal - 5;
    document.getElementById("bottomImg").style.left = horizontal+"px";
});

document.getElementById("botU").addEventListener("click", function(){
   bottomvert = bottomvert + 2;
    document.getElementById("bottomImg").style.bottom = bottomvert+"px";
});

document.getElementById("botD").addEventListener("click", function(){
   bottomvert = bottomvert - 2;
    document.getElementById("bottomImg").style.bottom = bottomvert+"px";
});

document.getElementById("leftL").addEventListener("click", function(){
    horizontal2 = horizontal2 - 5;
    document.getElementById("leftImg").style.left = horizontal2+"px";
});

document.getElementById("leftR").addEventListener("click", function(){
    horizontal2 = horizontal2 + 5;
    document.getElementById("leftImg").style.left = horizontal2+"px";
});

document.getElementById("leftU").addEventListener("click", function(){
    vertical2 = vertical2 - 5;
    document.getElementById("leftImg").style.top = vertical2+"px";
});

document.getElementById("leftD").addEventListener("click", function(){
    vertical2 = vertical2 + 5;
    document.getElementById("leftImg").style.top = vertical2+"px";
});

document.getElementById("rightL").addEventListener("click", function(){
    Rhorizontal = Rhorizontal + 4;
    document.getElementById("rightImg").style.right = Rhorizontal+"px";
});

document.getElementById("rightR").addEventListener("click", function(){
    Rhorizontal = Rhorizontal - 4;
    document.getElementById("rightImg").style.right = Rhorizontal+"px";
});

document.getElementById("rightU").addEventListener("click", function(){
    Rvertical = Rvertical - 5;
    document.getElementById("rightImg").style.top = Rvertical + "px";
});

document.getElementById("rightD").addEventListener("click", function(){
    Rvertical = Rvertical + 5;
    document.getElementById("rightImg").style.top = Rvertical + "px";
});

/*Changing the image height and width */
document.getElementById("topMax").addEventListener("click", function(){
   width = width + 5;
    height = height + 5;
    document.getElementById("topImg").style.width = width+"px";
    document.getElementById("topImg").style.height = height+"px";
});

document.getElementById("topMin").addEventListener("click", function(){
   width = width - 5;
    height = height - 5;
    document.getElementById("topImg").style.width = width+"px";
    document.getElementById("topImg").style.height = height+"px";
});

document.getElementById("botMax").addEventListener("click", function(){
   Bwidth = Bwidth + 5;
    Bheight = Bheight + 5;
    document.getElementById("bottomImg").style.width = Bwidth+"px";
    document.getElementById("bottomImg").style.height = Bheight+"px";
});

document.getElementById("botMin").addEventListener("click", function(){
   Bwidth = Bwidth - 5;
    Bheight = Bheight - 5;
    document.getElementById("bottomImg").style.width = Bwidth+"px";
    document.getElementById("bottomImg").style.height = Bheight+"px";
});

document.getElementById("leftMax").addEventListener("click", function() {
   Lwidth = Lwidth + 5;
    Lheight = Lheight + 5;
    document.getElementById("leftImg").style.width = Lwidth+"px";
    document.getElementById("leftImg").style.height = Lheight+"px";
});

document.getElementById("leftMin").addEventListener("click", function() {
   Lwidth = Lwidth - 5;
    Lheight = Lheight - 5;
    document.getElementById("leftImg").style.width = Lwidth+"px";
    document.getElementById("leftImg").style.height = Lheight+"px";
});

document.getElementById("rightMax").addEventListener("click", function() {
   Rwidth = Rwidth + 5;
    Rheight = Rheight + 5;
    document.getElementById("rightImg").style.width = Rwidth+"px";
    document.getElementById("rightImg").style.height = Rheight+"px";
});

document.getElementById("rightMin").addEventListener("click", function() {
   Rwidth = Rwidth - 5;
    Rheight = Rheight - 5;
    document.getElementById("rightImg").style.width = Rwidth+"px";
    document.getElementById("rightImg").style.height = Rheight+"px";
});

/* buttons to hide, bring back, and reset the images */
document.getElementById("botDppear").addEventListener("click", function(){
   document.getElementById("topbar").style.top = "-80px";
    document.getElementById("leftbar").style.left = "-100px";
    document.getElementById("rightbar").style.right = "-100px";
    document.getElementById("bottombar").style.bottom = "-85px";
});

document.getElementById("botAppear").addEventListener("click", function(){
   document.getElementById("topbar").style.top = "10px";
    document.getElementById("leftbar").style.left = "10px";
    document.getElementById("rightbar").style.right = "10px";
    document.getElementById("bottombar").style.bottom = "30px";
});

document.getElementById("botreset").addEventListener("click", function(){
   document.getElementById("bottomImg").style.bottom = "120px";
    document.getElementById("bottomImg").style.left = "380px";
    document.getElementById("bottomImg").style.width = "250px";
    document.getElementById("bottomImg").style.height = "250px";
    document.getElementById("bottomImg").src="gen3a.png";
    
    document.getElementById("topImg").style.top = "85px";
    document.getElementById("topImg").style.left = "380px";
    document.getElementById("topImg").style.width = "250px";
    document.getElementById("topImg").style.height = "250px";
    document.getElementById("topImg").src="gen1.png";
    
    document.getElementById("leftImg").style.top = "200px";
    document.getElementById("leftImg").style.left = "100px";
    document.getElementById("leftImg").style.width = "250px";
    document.getElementById("leftImg").style.height = "250px";
    document.getElementById("leftImg").src="gen2a.png";
    
    document.getElementById("rightImg").style.top = "200px";
    document.getElementById("rightImg").style.right = "100px";
    document.getElementById("rightImg").style.width = "250px";
    document.getElementById("rightImg").style.height = "250px";
    document.getElementById("rightImg").src="gen4a.png";
    
});