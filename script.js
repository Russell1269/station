const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});
const navigation=document.getElementById("myNav");
const video=document.getElementById('video-Content');
function openNavagation(){
    navigation.style.height='100vh';
}
function closeNav(){
    navigation.style.height='0vh';
}
function openVideo(){
    video.style.display='block';
    document.getElementById('first-pg').style.display='none';
}
function closeVideo(){
    video.style.display='none';
    document.getElementById('first-pg').style.display='flex';
}

let slideIndex = 1;
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
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
const logIn=document.getElementById("letsTalk-id01");
function openLogin(){
  logIn.style.display='block';
}
function closeLogin(){
  logIn.style.display='none';
}
function console(){
  console.log('hi');
}