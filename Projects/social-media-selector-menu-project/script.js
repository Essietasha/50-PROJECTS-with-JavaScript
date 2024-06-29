$('.select').click(function(){
    $('.arrowicon').toggleClass('rotate');
    $('#selectEl').toggleClass('hidden');

});


$('.item').click(function(){
    $('.select').html(this.innerHTML);
    // $('#selectEl').addClass('hidden');
})

$('.icon').click(function(){
    $('#selectEl').addClass('hidden');
})