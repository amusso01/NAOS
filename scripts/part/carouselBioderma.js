import Glide from '@glidejs/glide'

const carouselBioderma = function(){

  // RANGE BIODERMA
  new Glide('.glide-range-bioderma', {
    type: 'carousel',
    perView: 8,
    gap: 28,
    breakpoints: {
      1140: {
        perView: 6
      },
      980: {
        perView: 5
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