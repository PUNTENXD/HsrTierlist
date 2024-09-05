new Swiper('.swiper-container', {
  slidesPerView: 3, // Tampilkan 3 slide per tampilan
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    loop: true
  },
    // pagnition bullets
    pagination: {
      el: '.swiper-pagination',
      Clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });