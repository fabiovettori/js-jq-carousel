$(document).ready(function(){
    // quando clicco su una delle frecce assegno la classe "active" (visibile) all'immagine successiva/precedente
        if ($('img.active + img').length) {
            $('.right').click(function(){
                var img_active = $('img.active');
                img_active.removeClass('active');
                img_active.next('img').addClass('active');
                console.log('test');
        } else {

        }
    })

    $('.left').click(function(){
        var img_active = $('img.active');
        img_active.removeClass('active');
        img_active.prev('img').addClass('active');
    })

    // TEST
    // var test = '';
    // console.log(test.length);

    // console.log($('img.active + img').length);
})
