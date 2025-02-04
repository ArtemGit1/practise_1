document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
      type       : 'loop',
      perPage    : 5,
      perMove    : 1,
      breakpoints: {
        1024: {
          perPage: 3,
        },
        768: {
          perPage: 2,
        },
      },
      pagination: true,
      arrows: true,
    }).mount();
  });
  