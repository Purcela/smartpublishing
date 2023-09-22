$("#burger-menu").on("click", function(){
    $("#menu").toggleClass("open-menu");
  })

  // ------------------------------------------------  slideshow -----------------------------------------------------------

  let index = 0;
const images = document.getElementsByClassName("image");
let timer; // Declare timer variable

// Add event listeners to dot buttons
const dotButtons = document.querySelectorAll(".slideshow-dots button");
dotButtons.forEach((button, i) => {
  button.addEventListener("click", () => {
    index = i; // Set the index based on the clicked button
    displayImages();
  });
});

function displayImages() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
    dotButtons[i].style.backgroundColor = "transparent"; // Reset button colors
  }

  if (index >= images.length) {
    index = 0;
  }

  images[index].style.display = "block";
  dotButtons[index].style.backgroundColor = "#3B5998"; // Set active button color

  index++;

  // Clear the previous timeout and set a new one
  clearTimeout(timer);
  timer = setTimeout(displayImages, 2500);
}

// Call displayImages() initially
displayImages();

  

//   ----------------------------------------------- facebook -----------------------------------------------------------
 
(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


//   -------------------------------------------- search and play -----------------------------------------------------------

let currentVideo = null; // Variable to keep track of the currently playing video

function searchVideo() {
    // Get the input value and convert it to lowercase
    const searchText = document.getElementById("searchInput").value.toLowerCase();
    
    // Get all video elements with the "video" class
    const videos = document.querySelectorAll(".video");

    // Pause and hide the currently playing video if it exists
    if (currentVideo) {
        currentVideo.pause();
        currentVideo.style.display = "none";
    }

    // Loop through each video
    videos.forEach((video) => {
        // Get the video ID (which matches the video name)
        const videoId = video.id.toLowerCase();

        // Check if the entered text matches the video ID
        if (videoId === searchText) {
            // Show and autoplay the matching video
            video.style.display = "block";
            video.play();
            currentVideo = video; // Set the currently playing video
        }
    });
}









