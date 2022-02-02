
// Burger Menu

$('.mobile-menu').on('click', function () {
    $(this).toggleClass('open')
    $('.main-menu').toggleClass('open')
})

$('.category-mob-button').on('click', function () {
    $(this).toggleClass('open')
    $('.category-side').toggleClass('open')
})

$('.add').click(function () {
    if ($(this).prev().val() < 3) {
    $(this).prev().val(+$(this).prev().val() + 1);
    }
});
$('.sub').click(function () {
    if ($(this).next().val() > 1) {
    if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
    }
});

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

//   product slider 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("slide-thumbnail");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  console.log(slideIndex);

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      // slides[i].style.display = "inline";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // slides[slideIndex-1].style.display = "inline";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

