import Glide from '@glidejs/glide'

const carouselBiodermaBody = function(){

  // RANGE BIODERMA
  new Glide('.glide-body-bioderma', {
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
      520: {
        perView: 1
      }
    }
  }).mount()


}

export default carouselBiodermaBody