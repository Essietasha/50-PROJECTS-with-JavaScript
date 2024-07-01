$('#btn').on('click', function (){

    const characters = '0123456789abcdefghijklmnopqrstuvwzyz@!#$*()%_-+:{}[]?ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const passswordLength = 12;
    let password = "";

    for (let i = 0; i < passswordLength; i++){

        const randomNumb = Math.floor(Math.random() * characters.length);
        password +=characters.substring(randomNumb, randomNumb + 1);
        $('#passwordBox').val(password);
    }   
})


//Pop Up
$('#copyEl').on('click', function (){

    var $inputEl = $('#passwordBox')
    $inputEl.select();
    $inputEl[0].setSelectionRange(0, 9999);
    navigator.clipboard.writeText($inputEl.val());

    $('.popUp').removeClass('hidden');

    $('.popUp').fadeIn('slow', function (){
            setTimeout(() => {
                $('.popUp').fadeOut('slow');
            }, 3000);
    });
 })

