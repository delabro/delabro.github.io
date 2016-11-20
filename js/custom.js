(function() { // IIFE
    var img, height, top, blurb

    img = document.querySelector('.child-1')
    img = img.querySelector('img')
    blurb = document.querySelector('.projects-blurb')
    height = img.clientHeight // Get image height

    console.log(height)

    blurb.style.marginTop = (height + 5) + 'px' // offset top with image height
        // Readjust when window resizes
    window.addEventListener('resize', function(e) {
        e.preventDefault();
        height = img.clientHeight
        blurb.style.marginTop = (height + 5) + 'px'
    })
})();

(function() { // IIFE
    var img, height, top, blurb

    img = document.querySelector('.child-1-2')
    img = img.querySelector('img')
    blurb = document.querySelector('.projects-blurb-2')
    height = img.clientHeight // Get image height

    console.log(height)

    blurb.style.marginTop = (height + 5) + 'px' // offset top with image height
        // Readjust when window resizes
    window.addEventListener('resize', function(e) {
        e.preventDefault();
        height = img.clientHeight
        blurb.style.marginTop = (height + 5) + 'px'
    })
})();




var nav, offset

nav = document.querySelector('.top')
offset = nav.offsetTop
console.log(offset + ' offset')
    // On scroll trigger script
window.addEventListener('scroll', function() {
    // When element has reached the top of the window trigger script
    if (this.pageYOffset >= offset) {
        nav.classList.add('sticky')
    } else {
        nav.classList.remove('sticky')
    }
    console.log(this.pageYOffset)
})

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// animation timing -----------------------------------------------------------

var el = document.querySelector('.child-1'),
    pathThink = document.querySelector('.path-think');

window.addEventListener('scroll', function() {
    var isInViewPort = inViewport(el)
    if (isInViewPort) {
        setTimeout(function() { pathThink.classList.remove('is-paused') }, 800)

    }
})

var elJordie = document.querySelector('.child-1'),
    pathJordie = document.querySelector('.path-jordie');

window.addEventListener('scroll', function() {
    var isInViewPort = inViewport(elJordie)
    if (isInViewPort) {
        setTimeout(function() { pathJordie.classList.remove('is-paused') }, 1200)

    }
})

var elGun = document.querySelector('.layout-brute'),
    pathGun = document.querySelector('.path-gun');

window.addEventListener('scroll', function() {
    var isInViewPort = inViewport(elGun)
    if (isInViewPort) {
        setTimeout(function() { pathGun.classList.remove('is-paused') }, 1600)

    }
})

var elBadge = document.querySelector('.layout-brute'),
    pathBadge = document.querySelector('.path-badge');

window.addEventListener('scroll', function() {
    var isInViewPort = inViewport(elGun)
    if (isInViewPort) {
        setTimeout(function() { pathBadge.classList.remove('is-paused') }, 6500)

    }
})

var elTape = document.querySelector('.layout-spotify'),
    pathTape = document.querySelector('.path-tape');

window.addEventListener('scroll', function() {
    var isInViewPort = inViewport(elTape)
    if (isInViewPort) {
        setTimeout(function() { pathTape.classList.remove('is-paused') }, 1000)

    }
})

var elPlatter = document.querySelector('.layout-cuisine'),
    pathPlatter = document.querySelector('.path-platter');

window.addEventListener('scroll', function() {
    var isInViewPort = inViewport(elPlatter)
    if (isInViewPort) {
        setTimeout(function() { pathPlatter.classList.remove('is-paused') }, 1000)

    }
})

var elMonster = document.querySelector('.child-1-2'),
    pathMonster = document.querySelector('.path-monster');

window.addEventListener('scroll', function() {
    var isInViewPort = inViewport(elMonster)
    if (isInViewPort) {
        setTimeout(function() { pathMonster.classList.remove('is-paused') }, 1000)

    }
})

var elSkull = document.querySelector('.contact-box'),
    pathSkull = document.querySelector('.path2');

window.addEventListener('scroll', function() {
    var isInViewPort = inViewport(elSkull)
    if (isInViewPort) {
        setTimeout(function() { pathSkull.classList.remove('is-paused') }, 1000)

    }
})
