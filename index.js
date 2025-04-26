var offerClose = document.getElementById("offer-close")

offerClose.addEventListener("click",function(){
    offerClose.parentElement.parentElement.style.display="none"
})

var navIcon = document.getElementById("nav-icon")
var sideBar = document.getElementById("side-bar")
var navClose = document.getElementById("nav-close")

navIcon.addEventListener("click",function(){
   sideBar.style.left="0"
})

navClose.addEventListener("click",function(){
    sideBar.style.left="-50%"
})


//image slider

// var leftButton = document.getElementById("slider-left-activate")
// var rightButton = document.getElementById("slider-right-activate")

var sliderleftbutton = document.getElementById("slider-left-activate");
var sliderrightbutton = document.getElementById("slider-right-activate");
var sliderimage = document.querySelector(".slider-images");
var slidermargin = 0;

sliderrightbutton.addEventListener("click", function () {
  slidermargin += 100;

  if (slidermargin > 100) {
    slidermargin = 0;
  }

  sliderimage.style.marginLeft = "-" + slidermargin + "vw";
});

sliderleftbutton.addEventListener("click", function () {
  if (slidermargin === 0) {
    slidermargin = 100;
  } else {
    slidermargin -= 100;
  }

  sliderimage.style.marginLeft = "-" + slidermargin + "vw";
});
