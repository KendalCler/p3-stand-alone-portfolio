// Scripts
// Store Banner Images
var img0 = 'http://www.publicdomainpictures.net/pictures/150000/velka/blue-sky-1451668678s9M.jpg';
var img1 = 'http://www.publicdomainpictures.net/pictures/130000/velka/pool-water-1439770501OqV.jpg';
var img2 = 'https://static.pexels.com/photos/33359/grass-meadow-green-forest.jpg';

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


