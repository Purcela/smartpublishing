$("#burger-menu").on("click", function(){
    $("#menu").toggleClass("open-menu");
  })
 
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
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
 
function myFunction() {
  var x = document.getElementById("myVideo").autoplay;
  document.getElementById("demo").innerHTML = x;
}


// ----------------------------------------------------------------------------------------------

// var fallbackToStore = function() {
//   window.location.replace('https://play.google.com/store/apps/details?id=com.facebook.orca');
// };
// var openApp = function() {
//   window.location.replace('https://purcela.github.io/smartpublishing/index.html');
// };
// var triggerAppOpen = function() {
//   openApp();
//   setTimeout(fallbackToStore, 250);
// };