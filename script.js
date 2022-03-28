

AOS.init();





const tabNavigationElements = document.querySelectorAll(".about .tab-navigation li");
const tabContentElements = document.querySelectorAll(".about .tab-content");

function removeActiveClassesFromElements(elements) {
    for (let element of elements) {
        element.classList.remove("active");
    }
}

for (let tabElement of tabNavigationElements) {
    tabElement.addEventListener("click", function() {
        const target = this.dataset.target; 

        removeActiveClassesFromElements(tabNavigationElements);
        this.classList.add("active");

        removeActiveClassesFromElements(tabContentElements);
        document.querySelector('.tab-content[data-tab="'+target+'"]').classList.add('active');
    });
}



const swiper = new Swiper('.reviews-swiper', {
    speed: 900,
    slidesPerView: 1,
    spaceBetween: 50,
    
    autoHeight: true,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        800: {
          slidesPerView: 3,
          spaceBetween: 120
        }
      }
});


