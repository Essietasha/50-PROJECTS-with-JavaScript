$('.add').on('click', function() {

    var randomNumber = Math.floor(Math.random() * 2000 + 1);

        var newImgEl = $('<img>', {

            src: `https://picsum.photos/300?random=${randomNumber}`,
            alt: 'New Image'

        });
        
        newImgEl.addClass('box');


        $('.grid').append(newImgEl);
    })

    // $('.add').on('click', function() {
    //     imageCount = 10;

    //     var randomNumber = Math.floor(Math.random() * 2000 + 1);
        
    //     var newImgEl = $('<img>', {
    //         src: `https://picsum.photos/300?random=${randomNumber}`,
    //         alt: 'New Image' 
    //     });
        
    //     for (var index = 0; index <= imageCount; index++){
            
    //         newImgEl.addClass('box');
       
    //         $('.grid').append(newImgEl);
    //     }
    //     })
