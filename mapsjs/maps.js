const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const images = document.querySelector('.slider-carousel').children;
const totalImages = images.length;
let currentIndex = 0;


// Event Listeners to previous and next buttons
previous.addEventListener('click', () => {
    previousImage();
})

next.addEventListener('click', () => {
    nextImage();
})


// Function to go to next Image
function nextImage() {

    images[currentIndex].classList.remove('main');
    if (currentIndex == totalImages - 1) {
        currentIndex = 0;
    }
    else {
        currentIndex++;
    }

    images[currentIndex].classList.add('main');

}

// Function to go to previous Image
function previousImage() {

    images[currentIndex].classList.remove('main');
    if (currentIndex == 0) {
        currentIndex = totalImages - 1;
    }
    else {
        currentIndex--;
    }

    images[currentIndex].classList.add('main');

}



/*const slider2 = document.querySelector('.sliders');
const imagesa = document.querySelectorAll('.imgw');
let currentIndexa = 0;

function nextSlide() {
  currentIndexa = (currentIndexa + 1) % imagesa.length;
  updateSlider();
}

function updateSlider() {
  const translateXValue = -currentIndexa * 100;
  slider2.style.transform = `translateX(${translateXValue}px)`;
}

setInterval(nextSlide, 3000);*/

/*---------------------------------------------------------------------------------------------------------*/
/*let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}*/

/*---------------------------------------------------------------------------------------------------------- */

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

