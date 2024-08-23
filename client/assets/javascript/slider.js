
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
    const projectSlider = $('.projects__slider')
    projectSlider.owlCarousel({
        loop:false,
        nav:false,
        dots: false,
        margin:40,
        responsive:{
            0:{
                items:1,
                margin: 16,
                stagePadding: 40,
            },
            768:{
                items:2
            }
        }
    })

    $('.owl--prev').click(function() {
        projectSlider.trigger('prev.owl.carousel');
    })
    
    $('.owl--next').click(function() {
        projectSlider.trigger('next.owl.carousel');
    })


    // news slider
    const newsSlider = $('.news__slider')
    newsSlider.owlCarousel({
        loop:false,
        nav:false,
        dots: false,
        margin:40,
        responsive:{
            0:{
                items:1,
                margin: 16,
                stagePadding: 40,
            },
            768:{
                items:3
            }
        }
    })

    $('.owl--prev').click(function() {
        newsSlider.trigger('prev.owl.carousel');
    })
    
    $('.owl--next').click(function() {
        newsSlider.trigger('next.owl.carousel');
    })

    // projects slider which is project detail on page
    const projectDetailGallery = $('.detail__gallery--slider')
    projectDetailGallery.owlCarousel({
        loop:false,
        nav:false,
        dots: false,
        margin:40,
        // stagePadding: 40,
        responsive:{
            0:{
                items:1,
                margin: 16,
            },
            768:{
                items:3
            }
        }
    })

    $('.owl--prev').click(function() {
        projectDetailGallery.trigger('prev.owl.carousel');
    })
    
    $('.owl--next').click(function() {
        projectDetailGallery.trigger('next.owl.carousel');
    })

    // other house slider which is houme detail on page
    const othersHouse = $('.house__otherhouse--slider')
    othersHouse.owlCarousel({
        loop:false,
        nav:false,
        dots: false,
        margin:40,
        responsive:{
            0:{
                items:1,
                margin: 16,
                stagePadding: 40,
            },
            768:{
                items:3
            }
        }
    })

    $('.owl--prev').click(function() {
        othersHouse.trigger('prev.owl.carousel');
    })
    
    $('.owl--next').click(function() {
        othersHouse.trigger('next.owl.carousel');
    })
});