$("#burger-menu").on("click", function(){
    $("#menu").toggleClass("open-menu");
  })

  // ------------------------------------------------  slideshow -----------------------------------------------------------

var slideIndex = 0;
var slideIndexCurrent = 0;
showSlides();
// showSlidesCurrent(slideIndexCurrent);

function currentSlide(n) {
  showSlidesCurrent(slideIndexCurrent = n);
}
/*** CURRENT SLIDE on click ***/
function currentSlide(n) {
  showSlidesCurrent(slideIndexCurrent = n);
}
function showSlidesCurrent(n) {
  //var slideIndex = 1;
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexCurrent = 1}
  if (n < 0) {slideIndexCurrent = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexCurrent-1].style.display = "block";  
  dots[slideIndexCurrent-1].className += " active";
  slideIndexCurrent++;
}
/*** SHOW SLIDE with timer ***/
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
  setTimeout(showSlides, 4000); // Change image every x seconds
}

//   ----------------------------------------------- facebook -----------------------------------------------------------
 
(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//   ----------------------------------------------- search video -----------------------------------------------------------


document.getElementById("newsearch").addEventListener("submit", function(e) {
  e.preventDefault();

  var searchText = document.getElementById("searchvalue").value;
  var extension = document.getElementById("hiddenvalue1").value;

  // window.location = this.action + searchText + "." + extension;
  // or if you don't want to use the form's action attribute to specify
  // the domain you could hardcode it in the function:
  window.location = "http://127.0.0.1:5500/" + searchText + "." + extension;
});



