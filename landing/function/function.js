$(document).ready(function(){
    $('.content__form--btn').click(function(){
        $('.popup').css('display','flex')
    })

    $('body').on('click', '.popup--bg, .popup__content--close', function () {
        $('.popup').css('display','none')
    })
})