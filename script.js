const slide = document.querySelector('.carousel-slide');
const products = document.querySelectorAll('.product-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let counter = 0;
const slideWidth = products[0].clientWidth;


slide.style.transform = `translateX(${-slideWidth * counter}px)`;
const slidePrev = () => {
    if (counter <= 0) return;
    counter--;
    slide.style.transition = 'transform 0.5s ease-in-out';
    slide.style.transform = `translateX(${-slideWidth * counter}px)`;
};
const slideNext = () => {
    if (counter >= products.length - 1) return;
    counter++;
    slide.style.transition = 'transform 0.5s ease-in-out';
    slide.style.transform = `translateX(${-slideWidth * counter}px)`;
};

nextBtn.addEventListener('click', slideNext);
prevBtn.addEventListener('click', slidePrev);
const autoSlide = setInterval(slideNext, 5000);