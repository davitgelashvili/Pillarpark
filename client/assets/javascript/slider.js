
$(window).on("load",function() {
    // main slider 
    (() => {
        $('.slider__content').owlCarousel({
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
            $('.slider__content').trigger('to.owl.carousel', [$(this).index(), 300]);
            $('.slider__dots--item').removeClass('active');
            $(this).addClass( 'active' );
        })
    })()

    // project slider
    const Slider = $('.owl-carousel')
    $('.projects__slider').owlCarousel({
        loop:false,
        nav:false,
        dots: false,
        margin:40,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    })

    $('.owl--prev').click(function() {
        Slider.trigger('prev.owl.carousel');
    })
    
    $('.owl--next').click(function() {
        Slider.trigger('next.owl.carousel');
    })


});