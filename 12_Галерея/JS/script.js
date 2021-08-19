$(document).ready(function(){
   var $bigImg = $('#big img')
   var $smallBtn = $('#small a')

   $smallBtn.on('click', function(e){
       e.preventDefault()
       var btnAttr = $(this).attr('href')
  
       $bigImg.fadeOut(1000, function(){   // olib tashlash 
           $bigImg.attr('src',btnAttr)
           $bigImg.fadeIn(1000)            // qo'yish
       })
      
   })


})