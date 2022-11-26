/*  Active page */


/* Swiper shop.html */
var swiper = new Swiper(".mySwipers", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    speed: 1200,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 1200,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

/* Range price shop.html */
var lowerSlider = document.querySelector('#lower');
var upperSlider = document.querySelector('#upper');

document.querySelector('#two').value = upperSlider.value;
document.querySelector('#one').value = lowerSlider.value;

var lowerVal = parseInt(lowerSlider.value);
var upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;
        if (lowerVal == lowerSlider.min) {
            upperSlider.value = 4;
        }
    }
    document.querySelector('#two').value = this.value
};

lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;
        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 4;
        }
    }
    document.querySelector('#one').value = this.value
};

