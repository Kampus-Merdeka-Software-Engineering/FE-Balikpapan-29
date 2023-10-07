const swiper = new Swiper(".swiper", {
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    // Default parameters
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    spaceBetween: 15,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 467px
      467: {
        slidesPerView: 1,
        spaceBetween: 100
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });