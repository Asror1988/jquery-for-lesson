$(document).ready(function(){


   var $btn = $('.nav li')
   var $tabList = $('.tab-pane')
   var $link = $('.nav li a')
   

   $btn.click(function(){
        
      $btn.removeClass('active');           // class oliadi
      $(this).addClass('active');          // class qo'shadi

   })
   
   $link.click(function(){
        var href = $(this).attr('href');

        $tabList.removeClass('active') 
        $(href).addClass('active')     

     })


})