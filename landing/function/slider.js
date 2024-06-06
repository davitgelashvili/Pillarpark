$(document).ready(function(){
    $('.slider--content').owlCarousel({
        loop:false,
        nav:false,
        dots: true,
        dotsContainer: '.slider__dots',
        responsive:{
            0:{
                items:1
            }
        }
    })
    
    $('.slider__dots--item').on('click', function() {
        $('.slider--content').trigger('to.owl.carousel', [$(this).index(), 300]);
        $('.slider__dots--item').removeClass('active');
        $(this).addClass( 'active' );
    })
    
    const Slider = $('.owl-carousel')
    
    $('.slider--prev').click(function() {
        Slider.trigger('prev.owl.carousel');
    })
    
    $('.slider--next').click(function() {
        Slider.trigger('next.owl.carousel');
    })
    
})