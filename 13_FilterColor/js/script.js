$(document).ready(function(){

    var $btnRed = $('.f-red')
    var $btnGreen = $('.f-green')
    var $btnBlue = $('.f-blue')
    var $btnAll = $('.f-all')
    var $color = $('.color')

  function slideToggle(value){

    $color.not(value).slideUp()
    $color.filter(value).slideDown(500)

  }



    $btnRed.click(function(){
        slideToggle('.red')
    })                                                             
   
    $btnGreen.click(function(){
        slideToggle('.green')
    })
    $btnBlue.click(function(){
        slideToggle('.blue')
    })
    $btnAll.click(function(){
        slideToggle($color)
    })

                                                              
   
    
})