// var slides = document.querySelectorAll('#slides .slide');
// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide,4000);
// var rightArrow = document.querySelector('.previous-wrapper');
// var leftArrow = document.querySelector('.next-wrapper');
// var sliderImages = document.querySelector('#slides')
// var current = 0;
// rightArrow.addEventListener('click', clicar);
// leftArrow.addEventListener('click', clicar);

// function clicar(){
//     console.log('clicou!')
// }

// function reset() {
//     for (var i = 0; i < sliderImages.length; i++) {
//       sliderImages[i].style.display = "none";
//     }
//   }


// function nextSlide(){
// 	slides[currentSlide].className = 'slide';
// 	currentSlide = (currentSlide+1)%slides.length;
// 	slides[currentSlide].className = 'slide showing';
// }



var sliderImages = document.querySelectorAll(".slide");
var arrowLeft = document.querySelector("#arrow-left");
var arrowRight = document.querySelector("#arrow-right");
var current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
