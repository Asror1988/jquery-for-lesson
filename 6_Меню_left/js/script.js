$(document).ready(function(){

      var $menu = $('.menu');
      var $menuBtn = $('.show_hide-menu');
      var $icon = $('.show_hide-menu i')
    


      $menuBtn.on('click', function(){
           if($menu.css('left') === '-300px'){
                $menu.animate({
                    'left': 0
                },500)

                $icon.css('transform', 'rotate(180deg)')

           }else{
               $menu.animate({
                   'left': '-300px'
               },500)

               $icon.css('transform', 'rotate(0deg)')
           
           }
           
      })
 



});