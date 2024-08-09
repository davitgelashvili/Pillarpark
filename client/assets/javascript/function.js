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
    console.log(1)
    window.location.pathname = `/client/${$(this).data('href')}`;
  })

  // $('.my-select').selectpicker();
})