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

  $('.selectfloor__area--floor').click(function(){
    window.location.pathname = `${$(this).data('href')}`;
  })

  $('.selectfloor__area--floor').on("mouseover", function(){ 
    let x = $(this).data('floor')
    $(`.selectfloor__area--textarea.${x}`).show()
  })

  $('.selectfloor__area--floor').on("mouseout", function(){ 
    $('.selectfloor__area--textarea').hide()
  })


  $('.selection__cover--block').click(function(){
    window.location.pathname = `${$(this).data('href')}`;
  })

  // $('.selection__cover--block').on("mouseover", function(){ 
  //   $('.selection__cover--text').show()
  // })

  // $('.selection__cover--block').on("mouseout", function(){ 
  //   $('.selection__cover--text').hide()
  // })

  $('.selecthouse__area--group.active').click(function(){
    window.location.pathname = `${$(this).data('href')}`;
  })

})


