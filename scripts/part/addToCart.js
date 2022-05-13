const addToCart = function(){
  const addCartBtns = document.querySelectorAll('.fd-add-to-cart')

// FUNCTION FADEOUT remove active classe after time
  function fadeOut(el, timeout){
    setTimeout(() => {
      el.classList.remove('active')
      el.innerHTML = ""
    }, timeout);
  }

  // FUNCTION UPPERCASE first letter
  function capitalize(word) {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }



  function btnAnimation(addBtn, json){
    let modal = addBtn.parentNode.nextElementSibling
    let infoText = document.createElement('p')
    if(json.quantity !== undefined){
      addBtn.value = `${json.quantity} in your cart`
      modal.classList.add('active')

      let text = json.product_title
      let finalText = capitalize(text)
      let html = finalText 
      let htmlFinal  ="<p class='added'> <span>" + html + " </span></br>" + " ADDED TO YOUR CART </p>"
      modal.innerHTML = htmlFinal
      fadeOut(modal, 2800)
    }else{
      modal.classList.add('active')

      let text = json.description
      let finalText = capitalize(text)
      infoText.append(finalText)
      infoText.className = "alert"
      modal.appendChild(infoText)
      fadeOut(modal, 2800)
    }
  }


  addCartBtns.forEach(btn => {
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      const addData = {
        'id':btn.dataset.id, /* for testing, change this to a variant ID on your store */
        'quantity':1
      };
      fetch('/cart/add.js', {
        body: JSON.stringify(addData),
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With':'xmlhttprequest' /* XMLHttpRequest is ok too, it's case insensitive */
        },
        method: 'POST'
      }).then(function(response) {
        // console.log(response);
        return response.json();
      }).then(function(json) {
        /* we have JSON */
        // console.log(json) 
        btnAnimation(btn , json);
        document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
          bubbles: true
        }));
        document.documentElement.dispatchEvent(new CustomEvent('product:added', {
          bubbles: true,
          detail: {
            variant: btn.dataset.id,
            quantity: 1
          }
        }));
      }).catch(function(err) {
        /* uh oh, we have error. */
        console.error(err)
      })
    })  
    
    btn.addEventListener('mouseenter', ()=>{
      btn.value = "Add to cart"
    })
  })
}

export default addToCart;