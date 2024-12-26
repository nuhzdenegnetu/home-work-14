const images = document.querySelectorAll('.carousel__images');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let currentIndex = 0;

function updateCarousel(index) {
  images.forEach((img, i) => {
    if (i === index) {
      img.classList.add('carousel__images--active'); // Добавляем класс active
    } else {
      img.classList.remove('carousel__images--active'); // Убираем класс active
    }
  });
}

// Обработчики для кнопок переключения
prev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel(currentIndex);
});

next.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel(currentIndex);
});

// Добавляем возможность клика по изображению
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel(currentIndex);
  });
});
