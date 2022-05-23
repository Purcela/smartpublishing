$("#burger-menu").on("click", function(){
    $("#menu").toggleClass("open-menu");
  })
 
// --------------------------  slideshow -------------------------------------

let slides = document.querySelectorAll('.slide');
let thumbnails = document.querySelectorAll('.thumbnail');
let currentSlide = document.querySelector('.slide.show');
let slideCount = slides.length;
let currentSlideId = currentSlide.dataset.slide;
let nextSlideBtn = document.querySelector('.slide-btn.next');
let prevSlideBtn = document.querySelector('.slide-btn.prev');
let nextSlideTimer = 5000;

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', showSlide);
});

nextSlideBtn.addEventListener('click', nextSlide);
prevSlideBtn.addEventListener('click', prevSlide);

let slideshow = setInterval(nextSlide, nextSlideTimer);

function showSlide(e) {
    let slideId = e.currentTarget.dataset.slide;

    currentSlide.classList.remove('show');

    currentSlide = document.querySelector(`.slide[data-slide="${slideId}"`);

    currentSlide.classList.add('show');

    resetSlideShow();
}

function nextSlide() {
    let nextSlideId = currentSlideId >= slideCount ? 1 : parseInt(currentSlideId) + 1;

    currentSlide.classList.remove('show');

    currentSlide = document.querySelector(`.slide[data-slide="${nextSlideId}"`);
    currentSlideId = currentSlide.dataset.slide;

    currentSlide.classList.add('show');

    resetSlideShow();
}

function prevSlide() {
    let prevSlideId = currentSlideId <= 1 ? slideCount : parseInt(currentSlideId) - 1;

    currentSlide.classList.remove('show');

    currentSlide = document.querySelector(`.slide[data-slide="${prevSlideId}"`);
    currentSlideId = currentSlide.dataset.slide;

    currentSlide.classList.add('show');

    resetSlideShow();
}

function resetSlideShow() {
    clearInterval(slideshow);
    slideshow = setInterval(nextSlide, nextSlideTimer);
}

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 3000); // Change image every 3 seconds
// }
 
// function myFunction() {
//   var x = document.getElementById("myVideo").autoplay;
//   document.getElementById("demo").innerHTML = x;
// }

// --------------------------------------------------------------------------------------

