$(document).ready(function(){

  $section = $('section');
  $footer = $('footer');
  $header = $('header');
  $success = $('.success')
  var $show = $('.show');
  var $hide = $('.hide');

  
  $header.on('click', function(){
        
           if($hide.css('display') === 'none'){
                 $hide.css('display', 'block');
                 $show.css('display', 'none');
                
           }else{
                $hide.css('display', 'none');
                $show.css('display', 'block');
           }
      })
   $header.on('click', function(){      
             $footer.slideUp()
             $section.slideToggle(1000)
            })
            
  $success.on('click', function(){
              $footer.slideToggle(500)       
            })
            
          
     
     
     
     






});