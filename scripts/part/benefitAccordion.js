import BadgerAccordion from 'badger-accordion'

const benefitAccordion = function(){
  const accordions = document.querySelectorAll('.js-badger-accordion')

  Array.from(accordions).forEach((accordion) => {
    const ba = new BadgerAccordion(accordion)

    // console.log(ba.getState([0]));
  })

}

export default benefitAccordion;