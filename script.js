const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// ตรวจสอบว่าปุ่มเปิดมีอยู่จริงไหมก่อนทำงาน
if (menuOpenButton) {
    menuOpenButton.addEventListener("click", () => {
        document.body.classList.toggle("show-mobile-menu");
    });
}

// ตรวจสอบว่าปุ่มปิดมีอยู่จริงไหมก่อนทำงาน
if (menuCloseButton) {
    menuCloseButton.addEventListener("click", () => {
        document.body.classList.remove("show-mobile-menu");
    });
}


// close menu when the close button is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("show-mobile-menu");
    });
});

//Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickacle: true,
    dynamicBullets: true,
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
    780: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }
});