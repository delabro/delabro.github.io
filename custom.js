var img, height, top, blurb

img = document.querySelector('.child-1')
img = img.querySelector('img')
blurb = document.querySelector('.projects-blurb')

height = img.clientHeight // Get image height

console.log(height)

blurb.style.top = (height + 60) + 'px' // offset top with image height
// Readjust when window resizes
window.addEventListener('resize', function (e) {
	e.preventDefault();
	height = img.clientHeight
	blurb.style.top = (height + 60) + 'px'
})



