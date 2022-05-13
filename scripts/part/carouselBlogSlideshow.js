import Glide from '@glidejs/glide'

const carouselBlogSlideshow = function(){

  const glideCarousel = new Glide('.glide-blog-slideshow', {
    type: 'carousel',
    perView: 1,
    gap: 0,
    autoplay: 4000
  });


  // Mount!
  glideCarousel.mount();


}

export default carouselBlogSlideshow