import Glide from '@glidejs/glide'


const sliderProduct = function(){
  // BESTSELLERS
  new Glide('.glide-product', {
    type: 'slider',
    startAt: 0,
    perView: 1
  }).mount()
}

export default sliderProduct;