$('#userInput').on('input', function(event){ 

    const maximumCharacter = 50;

    const currentLength = event.target.value.length;
    const remainingChar = maximumCharacter - currentLength;
    console.log(remainingChar);

    $('.totalcharacters').html(currentLength);

    $('.remainingcharacters').html(remainingChar);

    if(currentLength >= maximumCharacter){

        $('.totalcharacters').html('Total Character Reached');
        $('.totalcharacters').addClass('font');
        $('.remainingcharacters').html('0');
        $('#userInput').prop('disabled', true);
        
        } else
            {
                console.log('first')
            }
})