$(document).ready(function(){
    // quando clicco su una delle frecce assegno la classe "active" (visibile) all'immagine successiva/precedente
    $('.right').click(function(){
        var img_active = $('img.active');
        img_active.removeClass('active');

        if (img_active.next().length) {
                img_active.next('img').addClass('active');
        } else {
            $('.product-images img:first-of-type').addClass('active');
        }
    })

    $('.left').click(function(){
        var img_active = $('img.active');
        img_active.removeClass('active');

        if (img_active.prev().length) {
                img_active.prev('img').addClass('active');
        } else {
            $('.product-images img:last-of-type').addClass('active');
        }
    })
})
