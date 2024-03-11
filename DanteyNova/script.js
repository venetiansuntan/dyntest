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
    let slides = document.getElementsByClassName("slider");
    let slides1 = document.getElementsByClassName("slider1");
    let slides2 = document.getElementsByClassName("slider2");

    if (n > slides.length) {
        slideIndex = 1
    }

     if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides1[i].style.display = "none";
        slides2[i].style.display = "none";
    }
     slides[slideIndex-1].style.display = "block";
     slides1[slideIndex-1].style.display = "block";
     slides2[slideIndex-1].style.display = "block";
}
