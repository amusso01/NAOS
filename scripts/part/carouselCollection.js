import Glide from '@glidejs/glide'

const carouselCollection = function(){

  const sliders = document.querySelectorAll('.glide-single-collection')

  sliders.forEach(slide => {

    new Glide(slide, {
      type: 'slider',
      perView: 3,
      bound: true,
      gap: 22,
      breakpoints: {
        1140: {
          perView: 2
        },
        520: {
          perView: 1
        }
      }
    }).mount()
  });

 


}

export default carouselCollection