var sliderImages = document.querySelectorAll(".slide");
var arrowLeft = document.querySelector("#arrow-left");
var arrowRight = document.querySelector("#arrow-right");
var current = 0;

// Limpa todas as imagens
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Inicia o Slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Mostra o anterior
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Mostra o próximo
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Click seta esquerda
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// // Click seta direita
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();


// Pegando o modal
var modal = document.getElementById("myModal");

// Pegando o elemento <span> para fechar o modal
var span = document.getElementsByClassName("close")[0];

// Quando a página carregar, abra o modal
window.onload = function() {
  modal.style.display = "block";
}

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar da página, fecha o modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}