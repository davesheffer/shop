var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

function $(value) {
    const valueLength = document.querySelectorAll(value)
    if (valueLength.length > 1  ) {
        const q = document.querySelectorAll(value)
        return q
    } else {
        const q = document.querySelector(value)
        return q
    } 
}

function cl(value){
    const cl = console.log(value)
    return cl
}




