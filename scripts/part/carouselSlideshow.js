import Glide from '@glidejs/glide'

const carouselSlideshow = function(){

  const glideCarousel = new Glide('.glide-slideshow', {
    type: 'carousel',
    perView: 1,
    gap: 0,
    autoplay: 4000
  });
  // Automated height on Carousel build
  glideCarousel.on('build.after', function () {
    glideHandleHeight();
  });

    // Automated height on Carousel change
    glideCarousel.on('run.after', function () {
      glideHandleHeight();
  });

  // Mount!
  glideCarousel.mount();

  glideCarousel.start


   // Resize height
   function glideHandleHeight() {
    const activeSlide = document.querySelector('.glide-slideshow .glide__slide--active');
    const activeSlideHeight = activeSlide ? activeSlide.offsetHeight : 0;

    const glideTrack = document.querySelector('.glide-slideshow .glide__track');
    const glideTrackHeight = glideTrack ? glideTrack.offsetHeight : 0;

    if (activeSlideHeight !== glideTrackHeight) {
        glideTrack.style.height = `${activeSlideHeight}px`;
    }
  }
}

export default carouselSlideshow