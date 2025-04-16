const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,       // No rotation
        stretch: 0,      // No stretching
        depth: 300,      // Depth effect
        modifier: 1,     // Effect strength
        slideShadows: false, // Disable shadows
    },

    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  const videoSwiper = new Swiper('.video_scroll', {
    slidesPerView: 1,
    loop: true, centeredSlides: true,
    spaceBetween: 100,
    // Custom nav buttons
    navigation: {
      nextEl: '.video__button-right',
      prevEl: '.video__button-left',
    },
  
    // Progressbar pagination
  });
  const buttons = document.querySelectorAll(".open-form");
  const modal = document.querySelector(".form__large");
  const overlay = document.querySelector(".overlay");
  
  function openForm() {
    modal.classList.add("active");
    overlay.classList.add("active");
  }
  
  function closeForm() {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }
  
  // Open modal
  buttons.forEach(button => {
    button.addEventListener("click", openForm);
  });
  
  // Close when clicking on overlay or pressing Esc
  overlay.addEventListener("click", closeForm);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeForm();
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.intro__form-box form');
    const inputBoxes = form.querySelectorAll('.intro__input-box');

    const errorMessages = {
      name: document.querySelector('.name-error'),
      surname: document.querySelector('.surname-error'),
      email: document.querySelector('.email-error')
    };

    form.addEventListener('submit', function (event) {
      let isValid = true;

      inputBoxes.forEach(box => {
        const input = box.querySelector('input');
        const value = input.value.trim();
        const type = input.getAttribute('type');
        const name = input.getAttribute('name');

        // Reset outline and hide error
        box.style.outline = 'none';
        if (errorMessages[name]) {
          errorMessages[name].style.display = 'none';
        }

        // Validation
        let fieldIsValid = true;

        if (value === '') {
          fieldIsValid = false;
        } else if (type === 'email') {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(value)) {
            fieldIsValid = false;
          }
        }

        if (!fieldIsValid) {
          isValid = false;
          box.style.outline = '2px solid yellow';
          if (errorMessages[name]) {
            errorMessages[name].style.display = 'block';
          }
        }
      });

      if (!isValid) {
        event.preventDefault();
      }
    });
    
  });
  const form = document.querySelector('.form__large form');
    const inputBoxes = form.querySelectorAll('.intro__input-box-large');

    form.addEventListener('submit', function (event) {
      let isValid = true;

      inputBoxes.forEach(box => {
        const input = box.querySelector('input');
        const value = input.value.trim();
        const type = input.getAttribute('type');

        // Reset outline
        box.style.outline = 'none';

        // Validation
        let fieldIsValid = true;

        if (value === '') {
          fieldIsValid = false;
        } else if (type === 'email') {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(value)) {
            fieldIsValid = false;
          }
        }

        if (!fieldIsValid) {
          isValid = false;
          box.style.outline = '2px solid yellow';
        }
      });

      if (!isValid) {
        event.preventDefault();
      }
    });
  