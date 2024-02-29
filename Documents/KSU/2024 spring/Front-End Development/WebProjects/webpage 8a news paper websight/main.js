//<script src="main.js"></script>


//---------------------------script for hamburger menu-------------------------------
document.querySelector('.hamburger').addEventListener('click',function() {
	document.querySelector('nav ul').classList.toggle('active');
});

//---------------------------script for dark/light theme-------------------------------
document.getElementById('themeButton').addEventListener('click',function(){
	document.body.classList.toggle('dark-theme');
});


//---------------------------script for image slideshow-------------------------------
let slideIndex = 0;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
} 

//---------------------------End of script for image slideshow-------------------------------