var slideIndex = 1;
showSlides(slideIndex);
//document.getElementById("dropdown").onclick = drop();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var img = document.getElementsByClassName("imgslides");
  var captionText = document.getElementById("caption");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
 
  captionText.innerHTML = img[slideIndex-1].alt;
}

function drop(){
  var info = document.getElementById("reception");
  console.log(info.style.display);
  if(info.style.display === "block") {
    info.style.display = "none"
    
  } 
  else {
    info.style.display = "block";
  }
  
}