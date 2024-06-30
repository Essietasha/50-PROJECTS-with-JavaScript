$('.hamburger').click(function(){
    $('.popup').toggleClass('hidden').slideUp('slow').slideDown('slow');

})

$('.close').click(function(){
    $('.popup').addClass('hidden');
})
