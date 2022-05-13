const clearCart= function(){
  
const removerBtn = document.querySelectorAll('.fdry-removeFreeGift')


removerBtn.forEach(item=>{
 item.addEventListener('click', ()=>console.log('hey'))

})


       
function removeItem(){

  let cart = $.getJSON('/cart.js');
    cart.done(function(){
    cart = cart.responseJSON;
    let items = cart.items;
    if(items.length === 2){
      console.log('no item')
      fetch('/cart/clear.js', {
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With':'xmlhttprequest' /* XMLHttpRequest is ok too, it's case insensitive */
          },
          method: 'POST'
      })
    }
  })

}
}

export default clearCart;