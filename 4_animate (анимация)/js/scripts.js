// $(function () {
//     var $ask = $('.ask')
//     var $answ = $('.ask').next()  // 

//     $answ.css('opacity', 0);


//     $ask.on('click', function () {
//         // $(this).next().css({ 'display': 'block', 'color': 'red', 'background': 'green', 'fontSize': '50px' })
//         // console.log($(this).css('display'));
//         $(this).next().animate({
//             'opacity': 1,
//             'width': '600px',
//             'fontSize': '20px'
//         }, 1000).animate({
//             'opacity': .7,
//             'width': '400px',
//         }, 2000).animate({
//             'opacity': .5,
//             'heigth': '200px'
//         }, 500).animate({
//             'opacity': 1,
//             'borderRadius': '50px',
//         }, 1000)
//     })
// });


$(document).ready(function () {

  var ask = $('.ask')
  ask.next().css('opacity', '0')

  ask.on('click', function () {
    var answ = $(this).next()


    answ.animate({
      'width': '800px',
      'opacity': '1',
      'margin-left': '50px',

    }, 3000).animate({
      'height': '200px',
      'opacity': '1',
      'margin-left': '50px',

    }, 2000)





  })
});





















