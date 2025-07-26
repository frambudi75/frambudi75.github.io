/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }


  // Mendapatkan semua elemen .work__box
const workBoxes = document.querySelectorAll('.work__box');

// Fungsi untuk memeriksa apakah elemen masuk dalam viewport
function checkVisibility(element) {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    return elementTop < windowHeight;
}

// Memeriksa setiap elemen saat halaman discroll
function handleScroll() {
    workBoxes.forEach(box => {
        if (checkVisibility(box)) {
            box.classList.add('animate');
        }
    });
}

// Mendengarkan event scroll
window.addEventListener('scroll', handleScroll);

// Menjalankan sekali saat halaman dimuat untuk memeriksa elemen yang sudah ada di viewport
handleScroll();

});
