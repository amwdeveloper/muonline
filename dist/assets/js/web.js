var buttonMobilie = document.querySelector('.button-mobile');
var divMobile = document.querySelector('.mobile');
var buttonClosedMobile = document.querySelector('.button-closed-mobile');

buttonMobilie.addEventListener('click', function () {
    divMobile.style.right = '0'
    divMobile.style.transition = 'all .2s ease-in-out'
})

buttonClosedMobile.addEventListener('click', function () {
    divMobile.style.right = '-100%'
})

var buttonMediaPlay = document.querySelector('.media-play');
var MediaView = document.querySelector('.media-view');
var buttonClosedMedia = document.querySelector('.closed-media-view');

buttonMediaPlay.addEventListener('click', function () {
    MediaView.style.visibility = 'visible'
})

buttonClosedMedia.addEventListener('click', function () {
    MediaView.style.visibility = 'hidden'
})


var buttonTemplateView = document.querySelectorAll('.image-gallery');
var templateView = document.querySelector('.template-view');
var buttonClosedTemplate = document.querySelector('.closed-template');
var imageViewSrc = document.querySelector('.image-gallery-view')

buttonTemplateView.forEach(e => {
    e.onclick = image => {
        var imagesrc = image.target.getAttribute('src');
        templateView.style.visibility = 'visible'
        imageViewSrc.src = imagesrc
    }
})

buttonClosedTemplate.addEventListener('click', function () {
    templateView.style.visibility = 'hidden'
    imageViewSrc.src = ''
})