// Scripts
// Store Banner Images
var img0 = 'img/cover1.jpg';
var img1 = 'img/cover2.jpg';
var img2 = 'img/cover3.jpg';

// Random Number Generator
var maxRand = 3;
var randNum = Math.floor( Math.random() * maxRand );
console.log(randNum);

// Swap Out Banner
$('header img').attr('src', eval('img' + randNum) );

// Random Background
$('body').addClass( 'bg' + randNum);

// Lightgallery
$('figure').lightGallery({
    selector: 'a',
    mode: 'lg-slide-circular',
    thumbnail: true
});


