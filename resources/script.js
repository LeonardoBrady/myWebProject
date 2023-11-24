let slideIndex = 1;
showSlides(slideIndex);

// NEXT/PREVIOUS CONTROLS
function plusSlides(next){
    showSlides(slideIndex += next);
}

//THUMBNAIL IMAGE CONTROLS
function currentSlide(next){
    showSlides(slideIndex = next);
}

function showSlides(next){
    let i;
    let slides = document.getElementsByClassName('img-sliders');
    let dots = document.getElementsByClassName('dot');
    if (next > slides.length){ slideIndex = 1 }
    if (next < 1 ){ slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('active', '');
    }
    slides[slideIndex-1].style.display = 'block';
}
