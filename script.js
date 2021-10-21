
var slideIndex = 1;
var slides = document.getElementsByClassName("image");
var dots = document.getElementsByClassName("dot");
var i;


showSlides(slideIndex);

function currentSlide(num) {
  showSlides(slideIndex = num);
}

function plusSlides(num) {
  showSlides(slideIndex += num);
}


function showSlides(num) {
  if (num > slides.length) {slideIndex = 1}    
  else if (num < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}