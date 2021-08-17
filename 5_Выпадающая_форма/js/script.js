$(document).ready(function(){
      var search = $('.search');
       var btnOpen = $('#search');
       var btnClose = $('#close')
     
       
      btnOpen.on('click', function(){
          search.animate({
              'top': '0'
          },500)
      })
      btnClose.on('click', function(){
          search.animate({
               'top': '-150px'
          },500)
      })
      
      
 });


  



