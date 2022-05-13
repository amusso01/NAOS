import Glide from '@glidejs/glide'

const carouselBioderma = function(){

  // RANGE BIODERMA
  new Glide('.glide-range-institut', {
    type: 'carousel',
    perView: 5,
    gap: 28,
    breakpoints: {
      1140: {
        perView: 5
      },
      980: {
        perView: 4
      },
      720: {
         perView: 3
      },
      520: {
        perView: 2
      }
    }
  }).mount()


}

export default carouselBioderma