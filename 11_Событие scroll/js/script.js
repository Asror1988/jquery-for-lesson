$(document).ready(function(){

 var $icon = $('#top')

 $(window).scroll(function(){
     console.log('x')
     if ($(this).scrollTop() >= 400 ){
         $icon.fadeIn()
     }else{
         $icon.fadeOut()
     }
 });

 $icon.click(function(){
     $('body, html').animate({
         scrollTop: '0'
     }, 1000)
 })




})