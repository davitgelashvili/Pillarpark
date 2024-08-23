$(window).on("load", function(){
    const convertImages = (query, callback) => {
        const images = document.querySelectorAll(query);
      
        images.forEach(image => {
          fetch(image.src)
          .then(res => res.text())
          .then(data => {
            const parser = new DOMParser();
            const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');
            if (image.id) svg.id = image.id;
            if (image.className) svg.classList.add(image.classList);
            
            console.log(svg)
            image.parentNode.replaceChild(svg, image);
          })
          .then(callback)
          .catch(error => console.error(error))
        });
      }
      
      convertImages('.imgtosvg');

  $('.open-menu').click(function(){
    $('.menu').css('display','block')
    $('body').css('overflow','hidden')
  })

  $('.close-menu').click(function(){
    $('.menu').css('display','none')
    $('body').css('overflow','auto')
  })

  $('.loader').remove()

  $('.selecthouse__area--floor.active').click(function(){
    window.location.pathname = `/client/${$(this).data('href')}`;
  })

  $('.selectfloor__area--floor').click(function(){
    window.location.pathname = `/client/${$(this).data('href')}`;
  })

  $('.selectfloor__area--floor').on("mouseover", function(){ 
    $('.select-floor').show()
    $('.select-floor--number').html($(this).data('floor'))
    $('.select-floor').css({
      'top': `${($(this).offset().top - $('.selectfloor__area').offset().top) + 10}px`,
    })
  })

  $('.selectfloor__area--floor').on("mouseout", function(){ 
    $('.select-floor').hide()
  })


  $('.selection__cover--block').click(function(){
    window.location.pathname = `/client/${$(this).data('href')}`;
  })

  $('.selection__cover--block').on("mouseover", function(){ 
    $('.selection__cover--text').show()
    $('.selection__cover--number').html($(this).data('block'))
    $('.selection__cover--text').css({
      'top': `${($(this).offset().top - $('.selection__cover').offset().top) + 50}px`,
      'left': `${($(this).offset().left) + 50}px`,
    })
  })

  $('.selection__cover--block').on("mouseout", function(){ 
    $('.selection__cover--text').hide()
  })

})


