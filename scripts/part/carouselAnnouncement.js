import Glide from '@glidejs/glide'

const carouselAnnouncement = function(){

  new Glide('.glide__announcement', {
    type: 'carousel',
    perView: 1,
    gap: 0,
    autoplay: 3000,
  }).mount()
  
}

export default carouselAnnouncement