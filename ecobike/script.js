$(document).ready(function(){
    $(this).scrollTop(0);
});

var width = document.documentElement.clientWidth;
console.log(width);
if(width <= 768){
  $('.header').css('background','#0000009b');
  $('.title').css('margin-top','4px');
  $('.title').css('font-size','35px');
  $('.black').css('color','white');
  $('.menu-link').css('color','white');
}
else{


//OnScroll Events
  $(window).scroll(function () {
if ($(window).scrollTop() >= 1) {
$('.header').css('background','#0000009b');
$('.title').css('margin-top','4px');
$('.title').css('font-size','35px');
$('.black').css('color','white');
$('.menu-link').css('color','white');
} else {
$('.header').css('background','transparent');
$('.title').css('margin-top','55px');
$('.title').css('font-size','65px');
$('.black').css('color','black');
$('.menu-link').css('color','black');
}
});
}

//infoboxes
var first_realblock = document.querySelector('.first');
var second_realblock = document.querySelector('.second');

var first_infoblock =  document.querySelector('.first-info-box');
var second_infoblock =  document.querySelector('.second-info-box');

var first_bike_img =  document.querySelector('.first-bike-img');
var second_bike_img =  document.querySelector('.second-bike-img');


first_realblock.onmouseover = function () {
  first_infoblock.style.display = 'block';
  first_bike_img.style.width = '60px';

};
first_realblock.onmouseout = function () {
  first_infoblock.style.display = 'none';
  first_bike_img.style.width = '120px';
};

second_realblock.onmouseover = function () {
  second_infoblock.style.display = 'block';
  second_bike_img.style.width = '60px';

};
second_realblock.onmouseout = function () {
  second_infoblock.style.display = 'none';
  second_bike_img.style.width = '120px';
};

mob_menu = document.querySelector('.mob-menu');
var menuOpened = false;
/*Open mob menu*/
function OpenMobMenu(){
  if(menuOpened == false){
    mob_menu.style.display = "block";
    menuOpened = true;
  }
  else{
    mob_menu.style.display = "none";
    menuOpened = false;
  }

}