$(document).ready(function(){
   var $btn = $('.menu-link')
   var $menu = $('menu')
   var $closeBtn = $('.close-btn')
   var $menuLink = $('a')





   $btn.click(function(){
       $menu.css('transform', 'translateX(0%)')
   })


   $closeBtn.click(function(){
       $menu.css('transform', 'translateX(-100%)')
   })




   $menuLink.click(function(e){
       e.preventDefault();
       $('body, html').animate({
           scrollTop: $(this.hash).offset().top
       },500)
   })
  







})