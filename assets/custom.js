/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */


// FDRY added to add item to cart

document.addEventListener('product:added', function(event) {


  const addData = {
    'id': parseInt(42542311473371),
    'quantity': 1
  };

  let cart = $.getJSON('/cart.js');
  cart.done(function(){
    cart = cart.responseJSON;
    let items = cart.items;
    const hasGift = items.find(el => el.variant_id === addData.id);

    if(hasGift === undefined){
      addIt()
    }
    
  })

 



  function addIt(){
    fetch('/cart/add.js', {
      body: JSON.stringify(addData),
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With':'xmlhttprequest' /* XMLHttpRequest is ok too, it's case insensitive */
      },
      method: 'POST'
    }).then(function(response) {

      return response.json();
    }).then(function(json) {
      /* we have JSON */
  
      document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
        bubbles: true
      }));
  
    }).catch(function(err) {
      /* uh oh, we have error. */
      console.error(err)
    })
  }
 
});
