import Glide from '@glidejs/glide'

const carouselBestseller = function(){
  // BESTSELLERS
  new Glide('.glide-bestsellers', {
    type: 'carousel',
    perView: 4,
    gap: 22,
    breakpoints: {
      1140: {
        perView: 3
      },
      980: {
        perView: 2
      },
      640: {
        perView: 1
      }
    }
  }).mount()

}

export default carouselBestseller