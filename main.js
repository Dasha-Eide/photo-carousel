let index = 0;

showSlide = (i) => {
  index += i;

  const images = document.getElementsByClassName("image");
  const circles = document.getElementsByClassName("circle");

  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  
  for (let i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" active", "");
  }
  if (index > images.length - 1) {
    index = 0 ;
  }

  if (index < 0) {
    index = images.length - 1;
  }
  images[index].style.display = "block";
  circles[index].className += " active";
}

window.addEventListener("onload", showSlide(index));
