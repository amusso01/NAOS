import addToCart from './part/addToCart'
import carouselBestseller from './part/carouselBestseller'
import carouselBioderma from './part/carouselBioderma'
import carouselInstitut from './part/carouselInstitut'
import carouselBiodermaBody from './part/carouselBiodermaBody'
import carouselSlideshow from './part/carouselSlideshow'
import carouselBlogSlideshow from './part/carouselBlogSlideshow'
import carouselCollection from './part/carouselCollection'
import carouselAnnouncement from './part/carouselAnnouncement'
import benefitAccordion from './part/benefitAccordion'
import sliderProduct from './part/sliderProduct'
// import clearCart from './part/clearCart'




document.addEventListener('DOMContentLoaded', (event) => {

  // clearCart()
  
  // ADD TO CART
  const hasAddToCart = document.querySelector('.fd-add-to-cart__form');
  if (typeof(hasAddToCart) != 'undefined' && hasAddToCart != null){
    addToCart();
  }

  // CAROUSEL 
  const hasCarouselBest = document.querySelector('.glide-bestsellers');
  if (typeof(hasCarouselBest) != 'undefined' && hasCarouselBest != null){
    carouselBestseller()
  }
  const hasCarouselBio = document.querySelector('.glide-range-bioderma');
  if (typeof(hasCarouselBio) != 'undefined' && hasCarouselBio != null){
    carouselBioderma()
  }
  const hasCarouselInst = document.querySelector('.glide-range-institut');
  if (typeof(hasCarouselInst) != 'undefined' && hasCarouselInst != null){
    carouselInstitut()
  }
  const hasCarouselBioBody = document.querySelector('.glide-body-bioderma');
  if (typeof(hasCarouselBioBody) != 'undefined' && hasCarouselBioBody != null){
    carouselBiodermaBody()
  }
  const hasCarouselCollection = document.querySelector('.glide-single-collection');
  if (typeof(hasCarouselCollection) != 'undefined' && hasCarouselCollection != null){
    carouselCollection()
  }
  const hasCarouselSlideshow= document.querySelector('.glide-slideshow');
  if (typeof(hasCarouselSlideshow) != 'undefined' && hasCarouselSlideshow!= null){
    carouselSlideshow()
  }
  const hasCarouselBlogSlideshow= document.querySelector('.glide-blog-slideshow');
  if (typeof(hasCarouselBlogSlideshow) != 'undefined' && hasCarouselBlogSlideshow!= null){
    carouselBlogSlideshow()
  }
  const hasCarouselAnnouncement= document.querySelector('.glide__announcement');
  if (typeof(hasCarouselAnnouncement) != 'undefined' && hasCarouselAnnouncement!= null){
    carouselAnnouncement()
  }

  // ACCORDION
  const hasAccordion = document.querySelector('.js-badger-accordion')
  if (typeof(hasAccordion) != 'undefined' && hasAccordion != null){
    benefitAccordion()
  }

  const hasSlideProduct = document.querySelector('.glide-product')
  if (typeof(hasSlideProduct) != 'undefined' && hasSlideProduct != null){
    sliderProduct()
  }


  
  setTimeout(() => { 
    const reviewBtn = document.querySelector('.jdgm-widget-actions-wrapper')
    if (typeof(reviewBtn) != 'undefined' && reviewBtn  != null){
      reviewBtn.style.display = "none"
    }
      
  }, 300);


})