$(document).ready(function(){
    // Effetto transizione freccia destra
    $('.right').click(function(){
        var img_active = $('img.active');
        img_active.removeClass('active');

        var marker_active = $('span.active');
        marker_active.removeClass('active');

        if (img_active.next().length) {
            img_active.next('img').addClass('active');
            marker_active.next('span').addClass('active');
        } else {
            $('.product-images img:first-of-type').addClass('active');
            $('.markers span:first-of-type').addClass('active');
        }
    })

    // Effetto transizione freccia sinistra
    $('.left').click(function(){
        var img_active = $('img.active');
        img_active.removeClass('active');

        var marker_active = $('span.active');
        marker_active.removeClass('active');

        if (img_active.prev().length) {
            img_active.prev('img').addClass('active');
            marker_active.prev('span').addClass('active');
        } else {
            $('.product-images img:last-of-type').addClass('active');
            $('.markers span:last-of-type').addClass('active');
        }
    })

    // Effetto transizione sui markers
    $('.markers span').click(function(){
        var marker_active = $('span.active');
        marker_active.removeClass('active');
        $(this).addClass('active');
        var index = $('.markers .active').index();
        console.log(index);

        var img_active = $('img.active');
        img_active.removeClass('active');
        $('.product-images img').eq(index).addClass('active')
    })
})
